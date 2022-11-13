import { Meta } from '../components/layout/Meta'
import { Contact } from '../components/page-parts/Contact'
import { Container } from '../components/Layout/Container'
import { Hero } from '../components/page-parts/Hero'
import { PostBody } from '../components/page-parts/PostBody'
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from '../components/layout/TwoColumn'
import Image from 'next/image'
// import eyecatch from '../img/about.jpg'
import { Accordion } from '../components/page-parts/Accordion'

const eyecatch = {
  src: 'https://images.microcms-assets.io/assets/b7f0191ed70a4637b8c20570346ae5e4/8a431e683eb140e39d982e09e5e2776f/about.jpg',
  height: 960,
  width: 1920,
  blurDataURL:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGMofPL/yv//8x+9y7r/m6Hu638GvwQmDobCa+8B4vwPOhdiFzEAAAAASUVORK5CYII=',
}

export default function About() {
  return (
    <Container>
      <Meta
        pageTitle="about"
        pageDesc="practice next.js ssg"
        // アイキャッチから画像のURL、高さ、幅を取得して指定
        pageImg={eyecatch.src}
        pageImgWidth={eyecatch.width}
        pageImgHeight={eyecatch.height}
      />
      <Hero title="About" subtitle="About develop activities" />

      <figure>
        <Image
          src={eyecatch}
          alt=""
          layout="responsive"
          size="{min-width: 1152px;} 1152px, 100vw" // 画面幅が1152px以上では1152px、それ以下では100vwが適用される
          priority // LCP対策で優先的に読ませる
          placeholder="blur" // ブラー画像を表示する
        />
      </figure>

      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
            <p>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
            <h2>タイトルタイトルタイトル</h2>
            <p>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
            <p>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
            <h3>タイトルタイトル</h3>
            <p>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
            <h3>タイトルタイトル</h3>
            <p>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
            <h3>タイトルタイトル</h3>
            <p>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
            <h3>タイトルタイトル</h3>
            <p>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
            <h3>タイトルタイトル</h3>
            <p>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>

            <h2>FAQ</h2>
            <Accordion heading="アコーディオン１">
              <p>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </Accordion>
            <Accordion heading="アコーディオン２">
              <p>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </Accordion>
            <Accordion heading="アコーディオン３">
              <p>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </Accordion>
          </PostBody>
        </TwoColumnMain>

        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  )
}
