import { test, expect } from "@playwright/test"
import { LoginPage } from "./pages/LoginPage"
import { InventoryPage } from "./pages/InventoryPage"

test("Adicionar item ao carrinho", async ({ page }) => {
  const loginPage = new LoginPage(page)
  const inventoryPage = new InventoryPage(page)

  await loginPage.baseRoute()
  await loginPage.login("standard_user", "secret_sauce")

  await inventoryPage.addItemToCart("Add to cart")
  await expect(page.locator(".shopping_cart_badge")).toHaveText("1")
})
