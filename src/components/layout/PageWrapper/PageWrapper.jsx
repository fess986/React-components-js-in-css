import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import { Outlet } from 'react-router-dom'

export default function PageWrapper() {

  console.log('ass')

  return (
    <>
      <Header />
      {/* <MainPage features={features}/> */}
      {/* <Order products={products}/> */}

        {/* тут будут отображаться вложенные элементы, а сам PageWrapper будет layout для них */}
      <Outlet />  

      <Footer />
    </>
  )
}