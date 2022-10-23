import Link from "next/link"

export const Logo = () => {
  // next/linkコンポーネントを使用し、aタグをラップ
  // リンク先は<Link>のhref属性に指定する
  // 外部サイトへのリンクは通常の<a href="">で指定する
  return (
    <Link href="/">
      <a>SSG Blog</a>
    </Link>
  )
}
