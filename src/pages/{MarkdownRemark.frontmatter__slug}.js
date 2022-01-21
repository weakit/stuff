import React from "react"
import {graphql} from "gatsby"
import DefaultPage from '../components/default_page'


export default function Template({data}) {
    const {markdownRemark} = data
    const {frontmatter, html} = markdownRemark
    return (<DefaultPage pageTitle={frontmatter.title}>
        <div dangerouslySetInnerHTML={{__html: html}}></div>
    </DefaultPage>)
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
