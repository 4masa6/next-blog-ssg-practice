import { parseISO, format } from 'date-fns'
import ja from 'date-fns/locale/ja'

export const ConvertDate = ({ dateISO }) => {
  return (
    <time dateTime={dateISO} >
      {format(parseISO(dateISO), 'yyyy年MM月dd日', {
        locale: ja
      })}
    </time>
  )
}

// === date-fns の使い方 ===
// import { parseISO, format } from 'date-fns'
// import ja from 'date-fns/locale/ja'

// const date = format(parseISO('2022-05-07T01:00:00.000Z'), 'yyyy年MM月dd日', {locale: ja})
