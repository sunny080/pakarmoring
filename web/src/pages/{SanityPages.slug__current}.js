import { graphql } from 'gatsby'
import React from 'react'
import EntryRenderer from '../components/EntryRenderer/EntryRenderer'
import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'

const IndexPage = (props) => {
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

export default IndexPage

export const query = graphql`
  query PageQuery($id: String!) {
    page: sanityPages(id: { eq: $id }) {
      __typename
      seoTitle
      metaDescription
      pageBuilder {
        ...HeroSection
        ...SpecialCardsIntroSection
        ...IntroSection
        ...FeaturedCarsSection
        ...OurClientSection
        ...MiniHeroSection
        ...FaqSection
        ...TechnologySection
        ...AboutUsHeroSection
        ...CeoSection
        ...OurMissionSection
        ...AllPorductSection
        ...BallisticProtectionSection
      }
    }
  }
`
