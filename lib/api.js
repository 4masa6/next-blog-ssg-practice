import { createClient } from 'microcms-js-sdk';

// process.env.環境変数のキー で.envファイルの値を参照
export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
});
