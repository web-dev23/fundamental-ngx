import { Component } from '@angular/core';

import * as simpleH from '!raw-loader!./examples/multi-combobox-example/multi-combobox-example.component.html';
import * as simpleT from '!raw-loader!./examples/multi-combobox-example/multi-combobox-example.component.ts';

import * as displayH from '!raw-loader!./examples/multi-combobox-displaywith-example/multi-combobox-displaywith-example.component.html';
import * as displayT from '!raw-loader!./examples/multi-combobox-displaywith-example/multi-combobox-displaywith-example.component.ts';

import * as filterH from '!raw-loader!./examples/multi-combobox-filter-example/multi-combobox-filter-example.component.html';
import * as filterT from '!raw-loader!./examples/multi-combobox-filter-example/multi-combobox-filter-example.component.ts';

import * as includesH from '!raw-loader!./examples/multi-combobox-includes-example/multi-combobox-includes-example.component.html';
import * as includesT from '!raw-loader!./examples/multi-combobox-includes-example/multi-combobox-includes-example.component.ts';

import * as asyncH from '!raw-loader!./examples/multi-combobox-async-example/multi-combobox-async-example.component.html';
import * as asyncT from '!raw-loader!./examples/multi-combobox-async-example/multi-combobox-async-example.component.ts';

import * as compactH from '!raw-loader!./examples/multi-combobox-compact-example/multi-combobox-compact-example.component.html';
import * as compactT from '!raw-loader!./examples/multi-combobox-compact-example/multi-combobox-compact-example.component.ts';

import * as formH from '!raw-loader!./examples/multi-combobox-form-example/multi-combobox-form-example.component.html';
import * as formT from '!raw-loader!./examples/multi-combobox-form-example/multi-combobox-form-example.component.ts';

import * as newTokensH from '!raw-loader!./examples/multi-combobox-new-tokens-example/multi-combobox-new-tokens-example.component.html';
import * as newTokensT from '!raw-loader!./examples/multi-combobox-new-tokens-example/multi-combobox-new-tokens-example.component.ts';

import * as mobileH from '!raw-loader!./examples/multi-combobox-mobile-example/multi-combobox-mobile-example.component.html';
import * as mobileT from '!raw-loader!./examples/multi-combobox-mobile-example/multi-combobox-mobile-example.component.ts';

import * as customH from '!raw-loader!./examples/multi-combobox-custom-item-example/multi-combobox-custom-item-example.component.html';
import * as customT from '!raw-loader!./examples/multi-combobox-custom-item-example/multi-combobox-custom-item-example.component.ts';

import { ExampleFile } from '../../../documentation/core-helpers/code-example/example-file';

@Component({
    selector: 'app-multi-combobox-docs',
    templateUrl: './multi-combobox-docs.component.html',
    styleUrls: ['./multi-combobox-docs.component.scss']
})
export class MultiInputDocsComponent {
    multiInputBasic: ExampleFile[] = [
        {
            language: 'html',
            code: simpleH,
            fileName: 'multi-combobox-example'
        },
        {
            language: 'typescript',
            component: 'MultiInputExampleComponent',
            code: simpleT,
            fileName: 'multi-combobox-example'
        }
    ];

    display: ExampleFile[] = [
        {
            language: 'html',
            code: displayH,
            fileName: 'multi-combobox-displaywith-example'
        },
        {
            language: 'typescript',
            component: 'MultiInputDisplaywithExampleComponent',
            code: displayT,
            fileName: 'multi-combobox-displaywith-example'
        }
    ];

    filter: ExampleFile[] = [
        {
            language: 'html',
            code: filterH,
            fileName: 'multi-combobox-filter-example'
        },
        {
            language: 'typescript',
            component: 'MultiInputFilterExampleComponent',
            code: filterT,
            fileName: 'multi-combobox-filter-example'
        }
    ];

    includes: ExampleFile[] = [
        {
            language: 'html',
            code: includesH,
            fileName: 'multi-combobox-includes-example'
        },
        {
            language: 'typescript',
            component: 'MultiInputIncludesExampleComponent',
            code: includesT,
            fileName: 'multi-combobox-includes-example'
        }
    ];

    async: ExampleFile[] = [
        {
            language: 'html',
            code: asyncH,
            fileName: 'multi-combobox-async-example'
        },
        {
            language: 'typescript',
            component: 'MultiInputAsyncExampleComponent',
            code: asyncT,
            fileName: 'multi-combobox-async-example'
        }
    ];

    compact: ExampleFile[] = [
        {
            language: 'html',
            code: compactH,
            fileName: 'multi-combobox-compact-example'
        },
        {
            language: 'typescript',
            component: 'MultiInputCompactExampleComponent',
            code: compactT,
            fileName: 'multi-combobox-compact-example'
        }
    ];

    form: ExampleFile[] = [
        {
            language: 'html',
            code: formH,
            fileName: 'multi-combobox-form-example'
        },
        {
            language: 'typescript',
            component: 'MultiInputFormExampleComponent',
            code: formT,
            fileName: 'multi-combobox-form-example'
        }
    ];

    mobile: ExampleFile[] = [
        {
            language: 'html',
            code: mobileH,
            fileName: 'multi-combobox-mobile-example'
        },
        {
            language: 'typescript',
            component: 'MultiInputMobileExampleComponent',
            code: mobileT,
            fileName: 'multi-combobox-mobile-example'
        }
    ];

    newTokens: ExampleFile[] = [
        {
            language: 'html',
            code: newTokensH,
            fileName: 'multi-combobox-new-tokens-example'
        },
        {
            language: 'typescript',
            component: 'MultiInputNewTokensExampleComponent',
            code: newTokensT,
            fileName: 'multi-combobox-new-tokens-example'
        }
    ];

    customItem: ExampleFile[] = [
        {
            language: 'html',
            code: customH,
            fileName: 'multi-combobox-custom-item-example'
        },
        {
            language: 'typescript',
            component: 'MultiInputCustomItemExampleComponent',
            code: customT,
            fileName: 'multi-combobox-custom-item-example'
        }
    ];
}
