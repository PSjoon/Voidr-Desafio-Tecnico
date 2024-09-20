import { test, expect } from "@playwright/test"
import { LoginPage } from "./pages/LoginPage"

test("Login com credenciais com erro de performance", async ({ page }) => {
  const loginPage = new LoginPage(page)

  await loginPage.baseRoute()

  const startTime = performance.now()
  await loginPage.login("performance_glitch_user", "secret_sauce")
  const endTime = performance.now()

  const loginDuration = endTime - startTime
  console.log(`Login duration: ${loginDuration} ms`)

  await expect(page).toHaveURL("/inventory.html")
})
