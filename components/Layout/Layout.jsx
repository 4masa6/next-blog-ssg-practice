import { Footer } from "./Footer"
import { Header } from "./Header"

export const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>

      <main>
        {children}
      </main>

      <Footer></Footer>
    </>
  )
}
