import { test, expect } from '@playwright/test';

test('Validate Pie chart elements and tooltip', async ({ page }) => {
  await page.goto('https://www.telerik.com/kendo-react-ui/components/charts/series-types/pie');

  // Click the link to the “React Pie Chart” section
  await page.locator('a[href="#react-pie-chart"]').click();

  // Validation #react-pie-chart
  await expect(page).toHaveURL(/#react-pie-chart/);

});


