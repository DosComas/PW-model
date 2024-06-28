import { test as base } from '@playwright/test';
import { LoginPage } from '../page-objects/login-page';

type MyFixtures = {
  login: LoginPage;
};

export const test = base.extend<MyFixtures>({
  login: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});

export { expect } from '@playwright/test';
