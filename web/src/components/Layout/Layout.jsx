import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Loader from '../Loader/Loader'

export const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <main>{children}</main>
          {/* <Footer /> */}
        </>
      )}
    </>
  )
}

export default Layout
