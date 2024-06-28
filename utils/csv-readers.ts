import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
import { TranslationsObject } from './data-types';

export function translationsReader(file: string) {
  const records = parse(fs.readFileSync(path.join(__dirname, file)), {
    columns: true,
    skip_empty_lines: true,
    encoding: 'utf-8',
    bom: true,
  });

  const translations: TranslationsObject = {};
  for (const row of records) {
    const text = row.text;
    delete row.text;

    translations[text] = row;
  }

  return translations;
}
