import { test } from '@playwright/test';

test('Espresso cup added to Cart', async ({ page }) => {
 /*
  1. Open the Coffee Cart menu page https://coffee-cart.app/
  2. Click at "Espresso" cup
  3. Click at "Cart" link
  4. Wait for URL https://coffee-cart.app/cart 
  5. Click "Remove" button
 */

  await page.goto('https://coffee-cart.app/'); 
  await page.getByTestId('Espresso').click();
  await page.getByLabel('Cart page').click();
  await page.waitForURL('https://coffee-cart.app/cart');
  await page.getByLabel('Remove all Espresso').click();
});