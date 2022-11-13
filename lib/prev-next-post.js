// 前後の記事のtitleとslugを取り出す関数
export function prevNextPost(allSlugs, currentSlug) {
  const numberOfPosts = allSlugs.length

  const index = allSlugs.findIndex(({ slug }) => slug === currentSlug)

  // 前の(古い)記事データ。一番最後の場合はtitle,slugを空文字
  const prevPost =
    index + 1 === numberOfPosts ? { title: '', slug: '' } : allSlugs[index + 1]

  // 次の(新しい)記事データ。一番最後の場合はtitle,slugを空文字
  const nextPost = index === 0 ? { title: '', slug: '' } : allSlugs[index - 1]

  return [prevPost, nextPost]
}
