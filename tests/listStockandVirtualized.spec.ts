import { test, expect } from '@playwright/test';

test('test listStock', async ({ page }) => {
  await page.goto('https://telerik.github.io/kendo-react/kendo-react-finance-portfolio/');
  await page.getByText('Add new').click();
  await page.getByRole('textbox', { name: 'Filter' }).click();
  await page.getByRole('textbox', { name: 'Filter' }).click();
  await page.getByRole('textbox', { name: 'Filter' }).fill('INTC');
  await page.getByRole('option', { name: 'INTC Intel Corporation Equity' }).click();
});

test('test virtualizedTAb', async ({ page }) => {
  await page.goto('https://telerik.github.io/kendo-react/kendo-react-finance-portfolio/');
  await page.getByRole('button', { name: 'Virtualized' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Export to PDF' }).click();
  const download = await downloadPromise;
  await page.getByRole('row', { name: 'Expand detail row ALFKI Thursday, January 15, 1998 Alfred\'s Futterkiste 69.53' }).getByLabel('Expand detail row').click();
});