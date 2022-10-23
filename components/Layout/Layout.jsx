import { Footer } from "../Footer"
import { Header } from "../header"

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
