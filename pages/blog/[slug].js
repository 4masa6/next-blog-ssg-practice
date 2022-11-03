import { Meta } from '../../components/layout/Meta'
import { getPostBySlug, getAllSlugs } from '../../lib/api'

import { extractText } from '../../lib/extractText'
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
import { getPlaiceholder } from 'plaiceholder'
import { eyecatchLocal } from '../../lib/constants'

export default function Post({
  post,
  title,
  publish,
  content,
  eyecatch,
  categories,
  description,
}) {
  return (
    <Container>
      <Meta
        pageTitle={title}
        pageDesc={description}
        pageImg={eyecatch.url}
        pageImgWidth={eyecatch.width}
        pageImgHeight={eyecatch.height}
      />

      <article>
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
            placeholder="blur"
            blurDataURL={eyecatch.blurDataURL}
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
      </article>
    </Container>
  )
}

export async function getStaticPaths() {
  const allSlugs = await getAllSlugs()

  return {
    paths: allSlugs.map(({ slug }) => `/blog/${slug}`),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const slug = context.params.slug

  const post = await getPostBySlug(slug)
  const description = extractText(post.content)
  const eyecatch = post.eyecatch ?? eyecatchLocal

  const { base64 } = await getPlaiceholder(eyecatch.url)
  eyecatch.blurDataURL = base64

  return {
    props: {
      post: post,
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: eyecatch,
      categories: post.categories,
      description: description,
    },
  }
}
