import * as React from "react"
import DefaultPage from '../components/default_page'

const IndexPage = () => {
    return (
        <DefaultPage pageTitle="404">
          <p>You seem lost. <br/><br/>     
            That's not necessarily a bad thing, <br/>
            but just in case here's a <a href="/">link</a> to the main page.</p>
        </DefaultPage>
    )
}

export default IndexPage
