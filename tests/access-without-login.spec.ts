import { test, expect } from "@playwright/test"

test("Acessar página de produtos sem login", async ({ page }) => {
  await page.goto("/inventory.html")

  await expect(page).toHaveURL("/")
  await expect(page.locator(".error-message-container")).toBeVisible()
})
