import parse from 'html-react-parser'
import Image from 'next/image'

export const ConvertBody = ({ contentHTML }) => {
  const contentReact = parse(contentHTML,  {
    replace: (node) => {
      if (node.name === 'img') {
        const { src, alt, width, height } = node.attribs
        return (
          <Image
            src={src}
            width={width}
            height={height}
            layout="responsive"
            alt={alt}
            sizes="(min-width: 768px) 768px, 100vw"
          />
        )
      }
    }
  })
  return <>{contentReact}</>
}

// === html-react-parser 使い方 ===
// import parse from 'html-react-parser'
// const contentReact = parse('<h1>タイトル</h1>')

// // 変換したものはjsxの中で使用する
// <div>{contentReact}</div>

// // tml-react-parserで画像（imgタグ）をnext/imageに置き換えるにはreplaceオプションを使用する
// const contentReact = parse(
//   '<h1>タイトル</h1><img src="" width="" height="" alt="" >',
//   {
//     replace: (node) => {
//       if (node.name === 'img') {
//         const { src, alt, width, height } = node.attribs
//         return (
//           <Image src={src} width={width}  height={height} alt={alt} layout="responsive" sizes="(min-width: 768px) 768px, 100vw" />
//         )
//       }
//     }
//   }
// )
