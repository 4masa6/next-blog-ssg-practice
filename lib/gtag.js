export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID

// ページの遷移を認識させる関数
export const pageview = (url) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  })
}
