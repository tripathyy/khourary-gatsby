import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image"

import * as styles from "./single.module.css"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Catlist from "../components/Catlist"
import PostNav from "../components/PostNav"


const Service = ({ data }) => {
  const service = data.currentPost
  const seoImageSrc = service.featuredImage
    ? getSrc(service.featuredImage.node.localFile)
    : `/logo.png`
  return (
    <Layout>
      <Seo
        title={service.title}
        image={seoImageSrc}
        pathname={service.uri}
        // Boolean indicating whether this is an article:
        article
      />
      <article className={styles.article}>
        {service.featuredImage && (
          <figure className={styles.featimg}>
            <GatsbyImage
              image={getImage(service.featuredImage.node.localFile)}
              alt={service.featuredImage.node.altText}
            />
          </figure>
        )}
        <Catlist postObject={service} />
        <h1 className={styles.article__title}>{service.title}</h1>
        <div className={styles.article__meta}>
           Published on{" "}
          {new Date(service.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </div>
        <div
          className={styles.article__content}
          dangerouslySetInnerHTML={{ __html: service.content }}
        />
        <div>
          
          
        </div>
      </article>
      <PostNav prevPost={data.prevPost} nextPost={data.nextPost} />
    </Layout>
  )
}

export default Service

export const query = graphql`
  query ($databaseId: Int!, $nextId: Int, $prevId: Int) {
    currentPost: wpService(databaseId: { eq: $databaseId }) {
      date
      databaseId
      title
      content
      uri
      
      categories {
        nodes {
          link
          name
        }
      }
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 1360
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
    nextPost: wpPost(databaseId: { eq: $nextId }) {
      title
      uri
    }
    prevPost: wpPost(databaseId: { eq: $prevId }) {
      title
      uri
    }
  }
`