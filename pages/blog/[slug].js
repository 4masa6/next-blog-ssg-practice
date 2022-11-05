import { Meta } from '../../components/layout/Meta'
import { getPostBySlug, getAllSlugs } from '../../lib/api'
import { extractText } from '../../lib/extractText'
import { prevNextPost } from '../../lib/prev-next-post'
import { eyecatchLocal } from '../../lib/constants'

import { ConvertBody } from '../../components/functions/ConvertBody'

import { PostHeader } from '../../components/page-parts/PostHeader'
import { PostBody } from '../../components/page-parts/PostBody'
import { PostCategories } from '../../components/page-parts/PostCategories'
import { Pagination } from '../../components/page-parts/Pagination'
import { Container } from '../../components/layout/Container'
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from '../../components/layout/TwoColumn'

import Image from 'next/image'
import { getPlaiceholder } from 'plaiceholder'

export default function Post({
  post,
  title,
  publish,
  content,
  eyecatch,
  categories,
  description,
  prevPost,
  nextPost,
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

        <Pagination
          prevText={prevPost.title}
          prevUrl={`/blog/${prevPost.slug}`}
          nextText={nextPost.title}
          nextUrl={`/blog/${nextPost.slug}`}
        />
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

  const allSlugs = await getAllSlugs()
  const [prevPost, nextPost] = prevNextPost(allSlugs, slug)

  return {
    props: {
      post: post,
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: eyecatch,
      categories: post.categories,
      description: description,
      prevPost: prevPost,
      nextPost: nextPost,
    },
  }
}
