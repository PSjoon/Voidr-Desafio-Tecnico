import { test, expect } from "@playwright/test"
import { LoginPage } from "./pages/LoginPage"
import { InventoryPage } from "./pages/InventoryPage"

test("Persistencia de itens ao efetuar Logout", async ({ page }) => {
  const loginPage = new LoginPage(page)
  const inventoryPage = new InventoryPage(page)

  await loginPage.baseRoute()
  await loginPage.login("standard_user", "secret_sauce")

  await inventoryPage.pageClick("Add to cart")
  await page.click("#react-burger-menu-btn")
  await page.click("#logout_sidebar_link")

  await loginPage.login("standard_user", "secret_sauce")
  await expect(page.locator(".shopping_cart_badge")).toHaveText("1")
})
