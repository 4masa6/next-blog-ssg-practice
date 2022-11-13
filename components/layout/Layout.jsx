import { Footer } from "../page-parts/Footer"
import { Header } from "../page-parts/Header"

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
