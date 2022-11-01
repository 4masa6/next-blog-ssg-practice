import { getPostBySlug } from '../../lib/api'
import { Container } from '../../components/layout/Container'
import { PostHeader } from '../../components/page-parts/PostHeader'
import { PostBody } from '../../components/page-parts/PostBody'
import { ConvertBody } from '../../components/functions/ConvertBody'
import { PostCategories } from '../../components/page-parts/PostCategories'
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from '../../components/layout/TwoColumn'
import Image from 'next/image'

export default function Schedule({
  title,
  publish,
  content,
  eyecatch,
  categories,
}) {
  return (
    <Container>
      <PostHeader title={title} subtitle="Blog Article" publish={publish} />

      <figure>
        <Image
          src={eyecatch.url}
          alt=""
          layout="responsive"
          width={eyecatch.width}
          height={eyecatch.height}
          sizes="(min-width: 1152px) 1152px, 100vw"
          priority
        />
      </figure>

      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
            {/*
            HTMLの文字列をReact要素に変換する方法でシンプルなのは、dangerouslySetInnerHTMLを使う
            ただしdangerouslySetInnerHTMLはinnerHTMLとして扱われるので、階層が深くなりCSSが当たらなくなったりする。
            また、HTMLの文字列をReact要素として表示するだけなので、画像を最適化できない（next/imageが使用できない）
            そのためここでは｢html-react-parser｣を使用する
            */}
            <ConvertBody contentHTML={content} />
          </PostBody>
        </TwoColumnMain>
        <TwoColumnSidebar>
          <PostCategories categories={categories} />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  )
}

export async function getStaticProps() {
  const slug = 'schedule'

  const post = await getPostBySlug(slug)

  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: post.eyecatch,
      categories: post.categories,
    },
  }
}
