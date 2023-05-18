import * as React from 'react'
import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'

const NotFoundPage = () => (
  <Layout>
      <div className="w-full h-[70vh] flex justify-center items-center flex-col ">
      <h1 className='text-gray-900 mb-8 font-semibold'>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist...</p>
    </div>
    </Layout>
)

export const Head = () => <Seo title="404: Not Found | Day Dreammd" />

export default NotFoundPage