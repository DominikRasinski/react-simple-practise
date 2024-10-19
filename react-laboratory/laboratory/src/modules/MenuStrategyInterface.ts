import { MenuStrategy } from "./MenuStrategy";

interface MenuData {}

class MenuStrategyInterface implements MenuData {
  menu: MenuStrategy;
  constructor(menu: MenuStrategy) {
    this.menu = menu;
  }

  getMenu() {
    return this.menu;
  }
}
