import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const SeoHead = ({ title }: { title: string }) => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    return (
        <title>{title === "" ? "" : `${title} |`} {data.site.siteMetadata.title}</title>
    )
}

export default SeoHead;