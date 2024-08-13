import { type Page } from '@playwright/test'
import { LoginPage } from './LoginPage'
import { InventoryPage } from './InventoryPage'
import { CartPage } from './CartPage'
import { CheckoutPage } from './CheckOutPage'
import { CheckoutLoginPage } from './CheckOutLoginPage'
import { ProductPage } from './ProductPage'
import { SideBarAndCartIcon } from './SideBarAndCartIcon'


// Wrapper to hold our page objects
export class Pages {
    
    constructor(readonly page: Page) { }

    get loginPage() { return new LoginPage(this.page) }
    get inventoryPage() { return new InventoryPage(this.page) }
    get cartPage() { return new CartPage(this.page) }
    get checkoutPage() { return new CheckoutPage(this.page) }
    get checkoutLoginPage() { return new CheckoutLoginPage(this.page) }
    get backpackPage() { return new ProductPage(this.page)}
    get sidebarAndCartIcon() { return new SideBarAndCartIcon(this.page)}
}