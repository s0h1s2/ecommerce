import { Container } from "react-bootstrap"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { Outlet } from "react-router-dom"
function App() {
  return (
    <>
      <Header />
      <main className="py-3" style={{ minHeight: "80vh" }}>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  )
}
export default App
