import { test, expect } from "@playwright/test"
import { LoginPage } from "./pages/LoginPage"
import { InventoryPage } from "./pages/InventoryPage"
import { CheckoutPage } from "./pages/CheckoutPage"

test("Finalização de Compra", async ({ page }) => {
  const loginPage = new LoginPage(page)
  const inventoryPage = new InventoryPage(page)
  const checkoutPage = new CheckoutPage(page)

  await loginPage.baseRoute()
  await loginPage.login("standard_user", "secret_sauce")

  await inventoryPage.pageClick("Add to cart")
  await expect(page.locator(".shopping_cart_badge")).toHaveText("1")

  await inventoryPage.goToCart()
  await page.click("#checkout")
  await checkoutPage.fillCheckoutInformation("Pedro", "Santos", "12345")
  await checkoutPage.finishCheckout()

  await expect(page.locator(".complete-header")).toHaveText(
    "Thank you for your order!"
  )
})
