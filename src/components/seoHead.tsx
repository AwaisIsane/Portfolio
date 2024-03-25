import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

interface SeoHeadProps {
  title?: string;
  description?: string;
  pathname?: string;
  children?: React.ReactNode;
}

const SeoHead: React.FC<SeoHeadProps> = ({ title, description, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, siteUrl, twitterUsername } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>" />
      {children}
    </>
  )
}
export default SeoHead;