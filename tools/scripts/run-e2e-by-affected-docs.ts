import { execSync } from 'child_process';
import { parseFiles } from '@nrwl/workspace/src/command-line/shared';
import { exit } from 'process';
import { uniqBy } from 'lodash';

interface AffectedLibData {
    project: string;
    libName: string;
}

const docsFoldersForE2E = ['core', 'platform', 'fn'];
const excludedRootLibs = new Set(docsFoldersForE2E);

const libs = processAffected(execSync(`npx nx affected:libs --plain`)).filter(
    (project) => project && !excludedRootLibs.has(project)
);

const affectedLibData: AffectedLibData[] = libs.map((lib) => {
    const [project, ...libNameParts] = lib.split('-');
    return { project, libName: libNameParts.join('-') };
});

const hasDocs = processAffected(execSync(`npx nx affected:apps --plain`)).includes('docs');
if (hasDocs) {
    const { files } = parseFiles({ base: 'main', onlyFailed: false, skipNxCache: false });
    const docsFiles = files.filter((f) => f.startsWith('apps/docs/'));
    const relevantDocsFiles = docsFiles.filter((f) =>
        docsFoldersForE2E.some((folder) => f.startsWith(`apps/docs/src/app/${folder}/component-docs`))
    );
    // if (relevantDocsFiles.length !== docsFiles.length) {
    //     // TODO: changes in docs, that are not related to docs themselves, run all
    // }

    // attempts to match the path "apps/docs/src/app/{{ project }}/component-docs/{{ libName }}/"
    // if matched, extracts project and libName variables as capturing groups
    const docsPathRegex = /^apps\/docs\/src\/app\/([a-zA-Z]+)\/component-docs\/([a-zA-Z-]+)(?:\/)(?:[a-zA-Z]+)/;

    const affectedByDocs = relevantDocsFiles
        .map((file) => {
            const matched = file.match(docsPathRegex);
            if (matched) {
                const [, project, libName] = matched;
                return { project, libName };
            }
            return null;
        })
        .filter((v) => !!v);
    affectedLibData.push(...uniqBy(affectedByDocs, (e) => e.project + ',' + e.libName));
}
const affectedE2EFileNames = affectedLibData.map(({ libName, project }) => getE2EFileName(project, libName));

if (affectedE2EFileNames.length) {
    console.info('Running E2E tests for the following projects: ', JSON.stringify(affectedE2EFileNames, null, 2));
    execSync(`npm run e2e:wdio -- ${affectedE2EFileNames.map((spec) => `--spec=${spec}`).join(' ')}`, {
        stdio: [0, 1, 2]
    });
} else {
    console.info('No affected E2E specs found.');
    exit(0);
}

function processAffected(data: Buffer): string[] {
    return data.toString().trim().split(' ');
}

function getE2EFileName(project: string, libName: string) {
    return `e2e/wdio/${project}/tests/${libName}.e2e-spec.ts`;
}
