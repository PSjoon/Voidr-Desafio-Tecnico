import { test, expect } from "@playwright/test"
import { LoginPage } from "./pages/LoginPage"
import { InventoryPage } from "./pages/InventoryPage"

test("Remover item do carrinho", async ({ page }) => {
  const loginPage = new LoginPage(page)
  const inventoryPage = new InventoryPage(page)

  await loginPage.baseRoute()
  await loginPage.login("standard_user", "secret_sauce")

  await inventoryPage.pageClick("Add to cart")
  await inventoryPage.pageClick("remove")
  await expect(page.locator(".shopping_cart_badge")).not.toBeVisible()
})
