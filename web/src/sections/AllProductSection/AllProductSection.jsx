import React from 'react'
import clsx from 'clsx'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Heading from '../../components/Heading/Heading'
import Image from '../../components/Image/Image'

export const AllProductSection = ({ otherClasses }) => {
  const allProductSectionClasses = clsx(
    otherClasses,
    'max-w-[1512px] w-full mx-auto my-[60px] lg:my-[120px] px-4 lg:px-[60px] xl:px-[156px] grid sm:grid-cols-2 md:grid-cols-3 gap-10'
  )

  const {
    allSanityArmoredVehiclePages: { nodes },
  } = useStaticQuery(graphql`
    query AllProducts {
      allSanityArmoredVehiclePages(filter: { action: { eq: "vip" } }) {
        nodes {
          heading
          image {
            ...CustomImage
          }
          slug {
            current
          }
        }
      }
    }
  `)

  return (
    <section
      className={allProductSectionClasses}
      data-testid="all-product-section"
    >
      {nodes.map(({ image, heading, slug: { current } }, index) => {
        return (
          <Link
            key={index}
            to={`/${current}`}
            className="flex w-full flex-col gap-4 items-start group cur"
          >
            <div className="relative overflow-hidden h-[250px] rounded-[12px]">
              <Image
                imgClassName="rounded-[12px]"
                imageData={image}
                otherClasses="rounded-[12px] h-full !abbsolute left-0 top-0 transition duration-500 group-hover:rotate-[3deg] group-hover:scale-[1.05]"
              />
            </div>
            <Heading
              type="h6"
              otherClasses="font-Exo2 text-black font-semibold transition group-hover:text-primary_green_600"
            >
              {heading}
            </Heading>
          </Link>
        )
      })}
    </section>
  )
}

export default AllProductSection

export const query = graphql`
  fragment AllPorductSection on SanityAllProductsReference {
    __typename
    identifier
  }
`
