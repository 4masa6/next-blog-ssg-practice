import { createClient } from 'microcms-js-sdk'

// process.env.環境変数のキー で.envファイルの値を参照
export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
})

export async function getPostBySlug(slug) {
  try {
    const post = await client.get({
      endpoint: 'blogs',
      queries: { filters: `slug[equals]${slug}` },
    })
    return post.contents[0] // 取得したデータのcontentsに関わる部分をreturn
  } catch (err) {
    console.log('-- getPostBySlug --')
    console.log(err)
  }
}
