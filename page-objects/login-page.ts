import { type Locator, type Page } from '@playwright/test';
import { Language } from '../utils/data-types';
import { BasePage } from './base-page';

export class LoginPage extends BasePage {
  readonly inputEnterUser: (language: Language) => Locator;
  readonly inputEnterPassword: (language: Language) => Locator;
  readonly btnLogin: (language: Language) => Locator;
  readonly textSuccessfulLogin: (language: Language) => Locator;

  constructor(page: Page) {
    super(page);

    this.inputEnterUser = (language) =>
      page
        .getByTestId('loginModal')
        .getByPlaceholder(this.translations.enterUser[language]);
    this.inputEnterPassword = (language) =>
      page
        .getByTestId('loginModal')
        .getByPlaceholder(this.translations.enterPassword[language]);
    this.btnLogin = (language) =>
      page
        .getByTestId('loginModal')
        .getByRole('button', { name: this.translations.login[language] });
    this.textSuccessfulLogin = (language) =>
      page
        .getByTestId('success')
        .and(
          page.getByText(this.translations.successfulLogin[language], { exact: true })
        );
  }

  async doLogin(language: Language, input: { user: string; password: string }) {
    this.inputEnterUser(language).fill(input.user);
    this.inputEnterPassword(language).fill(input.password);
    this.btnLogin(language).click();
  }
}
