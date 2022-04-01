import {
    apply,
    applyTemplates,
    chain,
    MergeStrategy,
    mergeWith,
    move,
    Rule,
    SchematicsException,
    url
} from '@angular-devkit/schematics';
import { names, ProjectConfiguration, readProjectConfiguration } from '@nrwl/devkit';
import { formatFiles } from '@nrwl/workspace';

export default function (schema: ComponentExampleSchema): Rule {
    return (tree) => {
        const projectConfig = readProjectConfiguration(tree as any, schema.name);
        const metadata = getProjectMetadata(schema, projectConfig);

        return chain([
            addExampleComponents(metadata)
            // formatFiles()
        ]);
    };
}

function updateDocsTs(metadata: ComponentExampleData): Rule {
    return (tree) => {
        const content = tree.read(metadata.docsPath);
    };
}

function addExampleComponents(metadata: ComponentExampleData): Rule {
    const schemaComponentNameOptions = names(metadata.schema.name);
    const schemaExampleNameOptions = names(metadata.schema.exampleName);
    const template = apply(url('./files'), [
        applyTemplates({
            componentClassName: schemaComponentNameOptions.className,
            exampleClassName: schemaExampleNameOptions.className,
            scopeTag: metadata.scopeTag,
            exampleName: metadata.schema.exampleName,
            componentName: metadata.schema.name,
            componentTagName: metadata.componentTagName
        }),
        move(metadata.docsPath)
    ]);

    return mergeWith(template, MergeStrategy.Overwrite);
}

function getProjectMetadata(schema: ComponentExampleSchema, projectConfig: ProjectConfiguration): ComponentExampleData {
    const scopeTag = projectConfig.tags.find((t) => t.startsWith('scope')).replace('scope:', '');
    const scopePrefix = getDocFolderNameByTag(scopeTag);
    const docsPath = schema.customDocsPath ?? `apps/docs/src/app/${scopePrefix}/component-docs/${schema.name}`;
    const componentTagName = schema.name.replace(scopePrefix, scopeTag);
    return {
        schema,
        projectConfig,
        docsPath,
        scopeTag,
        componentTagName
    };
}

function getDocFolderNameByTag(tag: string): string {
    switch (tag) {
        case 'fd':
            return 'core';
        case 'fdp':
            return 'platform';
        case 'fn':
            return 'fn';
        default:
            throw new SchematicsException(`Could not resolve docs folder name from the given tag value: "${tag}"`);
    }
}

interface ComponentExampleSchema {
    name: 'core' | 'platform' | 'experimental';
    exampleName: string;
    customDocsPath?: string;
    customModulePath?: string;
    customComponentPath?: string;
}

interface ComponentExampleData {
    schema: ComponentExampleSchema;
    projectConfig: ProjectConfiguration;
    docsPath: string;
    scopeTag: string;
    componentTagName: string;
}

// 1. docs html add

// <separator></separator> // optional?

// <fd-docs-section-title id="inline" componentName="alert"> Inline Alert </fd-docs-section-title
// ><description>
//     To make use of inputs such as <code>mousePersist</code> and <code>duration</code> in an inline alert, a call to the
//     alert <code>open()</code> method is required. Otherwise, the alert will simply be shown without any complex
//     behaviour. <br /><br />
//     Note that inline alerts are not removed from the dom.
// </description>
// <component-example>
//     <fd-alert-inline-example></fd-alert-inline-example>
// </component-example>
// <code-example [exampleFiles]="alertInlineExample"></code-example>

// <separator></separator>

// 2. docs ts add
// import alertWidthExampleTs from '!./examples/alert-width-example.component.ts?raw';
// import alertWidthExampleScss from '!./examples/alert-width-example.component.scss?raw';

// alertWidthExample: ExampleFile[] = [
//     {
//         language: 'html',
//         code: alertWidthExampleHtml,
//         fileName: 'alert-width-example',
//         scssFileCode: alertWidthExampleScss
//     },
//     {
//         language: 'typescript',
//         component: 'AlertWidthExampleComponent',
//         code: alertWidthExampleTs,
//         fileName: 'alert-width-example'
//     }
// ];

// 3. add components themselves
// 4. add component declaration
