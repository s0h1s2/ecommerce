import { Container } from "react-bootstrap"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <Header />
      <main className="py-3" style={{ minHeight: "80vh" }}>
        <Container>
          <ToastContainer theme="colored" />
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  )
}
export default App
