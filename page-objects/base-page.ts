import { type Locator, type Page } from '@playwright/test';
import { type Language, type TranslationsObject } from '../utils/data-types';
import { translationsReader } from '../utils/csv-readers';

export class BasePage {
  readonly page: Page;
  readonly translations: TranslationsObject;

  constructor(page: Page) {
    this.page = page;
    this.translations = translationsReader('../test-data/translations.csv');
  }
}
