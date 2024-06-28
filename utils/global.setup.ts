import { test as setup, expect } from './base-test.ts';
import dotenv from 'dotenv';

dotenv.config();

const user = process.env.USER_NAME!;
const password = process.env.PASSWORD!;

const language = 'en';

setup('Do login', async ({ page, login }) => {
  await setup.step('Navigate to page', async () => {
    page.goto('/');
  });
  await setup.step('Log into user account', async () => {
    login.doLogin(language, { user: user, password: password });
  });
  await setup.step('Verified user is logged in', async () => {
    await expect(
      login.textSuccessfulLogin(language),
      'user was not logged in'
    ).toBeVisible();

    // Save the browser state
    const storageState = await page.context().storageState();
    process.env.STATE = JSON.stringify(storageState);
  });
});
