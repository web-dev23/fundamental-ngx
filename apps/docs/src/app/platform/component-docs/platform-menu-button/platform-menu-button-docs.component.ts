import { Component } from '@angular/core';
import menuButtonSrc from '!./platform-menu-button-examples/platform-menu-button-example.component.html?raw';
import cozyMenuButtonSrc from '!./platform-menu-button-examples/platform-menu-button-cozy-example.component.html?raw';
import compactMenuButtonSrc from '!./platform-menu-button-examples/platform-menu-button-compact-example.component.html?raw';
import { ExampleFile } from '@fundamental-ngx/docs/common/shared-utils';

@Component({
    selector: 'app-link',
    templateUrl: './platform-menu-button-docs.component.html'
})
export class PlatformMenuButtonDocsComponent {
    cozyMenuButton: ExampleFile[] = [
        {
            language: 'html',
            code: cozyMenuButtonSrc,
            fileName: 'platform-menu-button-cozy-example'
        }
    ];

    compactMenuButton: ExampleFile[] = [
        {
            language: 'html',
            code: compactMenuButtonSrc,
            fileName: 'platform-menu-button-compact-example'
        }
    ];

    menuButton: ExampleFile[] = [
        {
            language: 'html',
            code: menuButtonSrc,
            fileName: 'platform-menu-button-example'
        }
    ];
}
