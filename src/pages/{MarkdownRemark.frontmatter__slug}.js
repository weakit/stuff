import React from "react"
import { graphql } from "gatsby"
import DefaultPage from '../components/default_page'


export default function Template({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    return (
        <DefaultPage pageTitle={frontmatter.title}>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </DefaultPage>
    )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`
