import { test, expect } from "@playwright/test"
import { LoginPage } from "./pages/LoginPage"
import { InventoryPage } from "./pages/InventoryPage"

test("Finalização de Compra de Carrinho Vazio", async ({ page }) => {
  const loginPage = new LoginPage(page)
  const inventoryPage = new InventoryPage(page)

  await loginPage.baseRoute()
  await loginPage.login("standard_user", "secret_sauce")

  await inventoryPage.goToCart()
  await page.click("#checkout")
  await expect(page.locator(".shopping_cart_badge")).toHaveText("1")
})
