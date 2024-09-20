import { test, expect } from "@playwright/test"
import { LoginPage } from "./pages/LoginPage"

test("Login com credenciais inválidas", async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.baseRoute()
  await loginPage.login("invalid_user", "invalid_password")
  await expect(page.locator(".error-message-container")).toBeVisible()
})
