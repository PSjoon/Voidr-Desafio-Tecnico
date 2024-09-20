import { test, expect } from "@playwright/test"
import { LoginPage } from "./pages/LoginPage"

test("Logout", async ({ page }) => {
  const loginPage = new LoginPage(page)

  await loginPage.baseRoute()
  await loginPage.login("standard_user", "secret_sauce")

  await page.click("#react-burger-menu-btn")
  await page.click("#logout_sidebar_link")
  await expect(page).toHaveURL("/")
})
