import { test, expect } from '@playwright/test';

test('Validate tooltip of March 2020 in Team Efficiency chart', async ({ page }) => {
  await page.goto('https://telerik.github.io/kendo-react/react-coffee-warehouse');

  // Pastikan chart "Team Efficiency" terlihat
  await expect(page.getByText('Team Efficiency')).toBeVisible();

  // Find the first data point on the chart (e.g., March 2020).
  const dataPoint = page.locator('svg circle').nth(11).first();
  await dataPoint.hover();

  // Validation tooltip muncul
  const tooltip = page.locator('circle.k-chart-tooltip');
  await expect(tooltip).toBeVisible();
  

  // Validation text tooltip contains "Mar" atau "March 2020"
  await expect(tooltip).toContainText(/MAR|MARCH 2020|MARCH 2020 15,810/);
});