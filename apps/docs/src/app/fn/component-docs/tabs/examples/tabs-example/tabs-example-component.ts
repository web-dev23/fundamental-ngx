import { Component } from '@angular/core';

@Component({
    selector: 'fd-tabs-example',
    templateUrl: './tabs-example.component.html'
})
export class TabsExampleComponent {
    collapseOverflow = true;
    tabs = new Array(10).fill(undefined);

    onTabClick($event: MouseEvent): void {
        console.log({ $event });
    }

    onMouseOver($event: MouseEvent): void {
        console.log($event);
    }

    onKeydown($event: any): void {
        console.log($event);
    }
}
