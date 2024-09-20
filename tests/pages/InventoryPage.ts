import { Page } from "@playwright/test"

export class InventoryPage {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  async pageClick(pageClick: string) {
    await this.page.click(`text=${pageClick}`)
  }

  async goToCart() {
    await this.page.click(".shopping_cart_link")
  }
}
