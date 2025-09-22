import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.highcharts.com/docs/maps/marker-clusters');
  await page.getByRole('button', { name: 'Allow all cookies' }).click();
  await page.locator('iframe[title="Highcharts example"]').first().contentFrame().getByText('2323').first().click();
  await page.locator('iframe[title="Highcharts example"]').first().contentFrame().locator('g:nth-child(19) > text').click();
});