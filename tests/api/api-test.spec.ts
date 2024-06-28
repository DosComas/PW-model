import { test, expect } from '../../utils/base-test';

const language = 'en';

test('test csv', async ({ login, baseURL }) => {
  const testText = login.translations.successfulLogin[language];
  console.log(testText);
  console.log(baseURL);
});
