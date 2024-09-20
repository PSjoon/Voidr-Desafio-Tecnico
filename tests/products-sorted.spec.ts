import { test, expect } from "@playwright/test"
import { LoginPage } from "./pages/LoginPage"

test("Ordenação de produtos por preço menor para maior", async ({ page }) => {
  const loginPage = new LoginPage(page)

  await loginPage.baseRoute()
  await loginPage.login("standard_user", "secret_sauce")

  await page.selectOption(".product_sort_container", "lohi")

  const prices = await page.$$eval(".inventory_item_price", (items) =>
    items
      .map((item) => item.textContent)
      .filter((text): text is string => text !== null)
      .map((text) => parseFloat(text.replace("$", "")))
  )

  const sortedPrices = [...prices].sort((a, b) => a - b)
  expect(prices).toEqual(sortedPrices)
})

test("Ordenação de produtos por preço maior para menor", async ({ page }) => {
  const loginPage = new LoginPage(page)

  await loginPage.baseRoute()
  await loginPage.login("standard_user", "secret_sauce")

  await page.selectOption(".product_sort_container", "hilo")

  const prices = await page.$$eval(".inventory_item_price", (items) =>
    items
      .map((item) => item.textContent)
      .filter((text): text is string => text !== null)
      .map((text) => parseFloat(text.replace("$", "")))
  )

  const sortedPrices = [...prices].sort((a, b) => b - a)
  expect(prices).toEqual(sortedPrices)
})
