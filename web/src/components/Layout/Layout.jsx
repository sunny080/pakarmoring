import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Loader from '../Loader/Loader'
import { hideBodyScroll } from '../../utils/helpers'
import { showBodyScroll } from '../../utils/helpers'
import ContactForm from '../ContactForm/ContactForm'
import clsx from 'clsx'
import { graphql, useStaticQuery } from 'gatsby'

export const Layout = ({ children }) => {
  const [toggle, setToggle] = useState('')

  useEffect(() => {
    if (toggle === 'Contact Us') {
      if (toggle) {
        hideBodyScroll()
      } else {
        showBodyScroll()
      }
    }
  }, [setToggle, toggle])

  const toggleFunc = (flag) => {
    setToggle(flag)
  }

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { toggleFunc })
    }
    return child
  })

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const {
    allSanityArmoredVehiclePages: { nodes },
  } = useStaticQuery(graphql`
    query AllLink {
      allSanityArmoredVehiclePages {
        nodes {
          action
          title
          heading
          slug {
            current
          }
        }
      }
    }
  `)

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar toggleCancel={toggleFunc} nodes={nodes} />
          <div
            className={clsx(
              'fixed top-0 z-[100] h-screen text-left flex justify-end',
              toggle === 'Contact Us' ? 'w-full' : 'w-0 overflow-hidden'
            )}
          >
            <button
              aria-label="button"
              onClick={() => toggleFunc('')}
              className="w-full h-full absolute top-0 left-0 bg-[#00000080]"
            ></button>
            <ContactForm
              dropdown={nodes}
              formType="Contact Us"
              otherClasses={clsx(
                toggle === 'Contact Us'
                  ? 'w-full md:w-[720px] overflow-y-auto'
                  : 'w-0 overflow-hidden'
              )}
              toggleCancel={toggleFunc}
              toggleStyle={toggle}
            />
          </div>

          <main>{childrenWithProps}</main>
          <Footer />
        </>
      )}
    </>
  )
}

export default Layout
