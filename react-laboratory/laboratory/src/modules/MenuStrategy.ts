type Menu = {
    menu: [
        {
            path: string,
            label: string,
        }
    ]
}

export class MenuStrategy {
    menu: Menu;
    constructor(
        menu: Menu
    ) {
        this.menu = menu;
    }
}