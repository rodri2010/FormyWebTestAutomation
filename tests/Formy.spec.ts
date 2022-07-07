
import { test, expect, type Page } from '@playwright/test';
const link = 'https://formy-project.herokuapp.com/';

test.describe('test three features', () => {
test('Button', async ({ page }) => {
  await page.goto(link);
  await expect(page).toHaveTitle(/Formy/);
  await expect(page.locator('text=Buttons').first()).toHaveAttribute('href', '/buttons');
  await page.click('text=Components');
  await expect(page.locator('text=Buttons').first()).toBeVisible();
  await expect(page.locator('text=Buttons').first()).toHaveAttribute('href', '/buttons');
  await page.click('text=Buttons');
  await expect(page.locator('text=Formy').first()).toBeVisible();
  await page.click('text=Primary');
  await expect(page.locator('text=Form').first()).toBeVisible(); 
})

test('Form', async ({ page }) => {
  await page.goto(link);
  await expect(page.locator('text=Complete Web Form').first()).toHaveAttribute('href', '/form');
  await page.click('text=Components');
  await expect(page.locator('text=Complete Web Form').first()).toBeVisible();
  await page.click('text=Complete Web Form');
  await page.fill('#first-name', 'Leonardo');
  await page.fill('#last-name', 'Sanchez');
  await page.fill('#job-title', 'QA analyst');
  await page.click('#radio-button-1');
  await page.click('#checkbox-1');

  const dropdown = '#select-menu';
  await page.click(dropdown);
  await page.selectOption('#select-menu', { label: '2-4' });
  await page.click('#datepicker' );

  const date = await page.fill('#datepicker', "10/11/1995");
  await page.locator('#datepicker').press('Enter');
  await expect(page.locator('text=Submit').first()).toBeVisible();
  await page.click('text=Submit');
  await expect(page.locator('text=Thanks for submitting your form').first()).toBeVisible();
});

test('Switch Window',async ({ page }) => {
  await page.goto(link);
  await page.click('text= Components');
  await expect(page.locator('text=Switch Window').first()).toHaveAttribute('href', '/switch-window');
  await expect(page.locator('text=Switch Window').first()).toBeVisible();
  await page.click('text= Switch Window');
  await page.click('text= Open new tab');
})
});

