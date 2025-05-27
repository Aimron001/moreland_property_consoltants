import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from './pages/Home'
import Listings from './pages/Listings'
import Services from './pages/Services'
import Blog from './pages/Blog'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import Layout from './components/Layout'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logo from "./assets/logo-white.png"

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="listings" element={<Listings />} />
        {/* <Route path="services" element={<Services />} /> */}
        <Route path="blog" element={<Blog />} />
        <Route path="about" element={<About />} />
        <Route path="contact-us" element={<ContactUs />} />
    </Route>
  ))
  return (
    <>
      <RouterProvider router={router} />
      <FloatingWhatsApp phoneNumber={"254720321100"} accountName="Moreland" avatar={logo} allowClickAway={true} allowEsc={true}/>
    </>
  )
}

export default App
