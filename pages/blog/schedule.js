import { client } from '../../lib/api'

export default function Schedule() {
  return <h1>記事のタイトル</h1>
}

export async function getStaticProps() {
  try {
    const res = await client.get({
      endpoint: 'blogs',
    })
    console.log(res)
  } catch (err) {
    console.log(err)
  }

  return {
    props: {},
  }
}
