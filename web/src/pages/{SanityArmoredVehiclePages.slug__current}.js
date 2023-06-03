import { graphql } from 'gatsby'
import React from 'react'
import EntryRenderer from '../components/EntryRenderer/EntryRenderer'
import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'

const ArmoredVehiclesTemplate = (props) => {
  return (
    <Layout>
      <EntryRenderer pageBuilderData={props.data.page.pageBuilder} />
    </Layout>
  )
}

export const Head = ({
  data: {
    page: { seoTitle, metaDescription },
  },
}) => <Seo title={seoTitle} description={metaDescription} />

export default ArmoredVehiclesTemplate

export const query = graphql`
  query ArmoredVehiclesQuery($id: String!) {
    page: sanityArmoredVehiclePages(id: { eq: $id }) {
      __typename
      seoTitle
      metaDescription
      pageBuilder {
        ...ProductHeroSection
        ...FeaturedCarsSection
        ...OurClientSection
      }
    }
  }
`
