export function projectEnvironments(env: string) {
  if (env == 'dev') {
    return 'https://www.dev-page.com';
  }
  if (env == 'stg') {
    return 'https://www.stg-page.com';
  }
  if (env == 'prod') {
    return 'https://www.page.com';
  }
}
