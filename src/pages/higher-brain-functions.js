import * as React from 'react'
import {Helmet} from 'react-helmet'
import { centre } from '../styles/hbf.module.css'
import '../fonts/fira-code/fira_code_default.css'

class Redirecter extends React.Component {
    render() {
        return <span></span>
    }

    componentDidMount() {
        this.timeout = setTimeout(
            function() {
                window.location.href = "https://youtu.be/dQw4w9WgXcQ"
            }, 2000
        );
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }
}

const IndexPage = () => {
    return (
        <div className={centre}>
            <Helmet>
                <title>Higher Brain Functions</title>
                <meta name="theme-color" content="#121212"/>
                <link rel="icon" href="data:image/gif;base64,R0lGODdhAQABAIAAAO3t7e3t7SwAAAAAAQABAAACAkQBADs="/>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Helmet>
            <h1>PLEASE WAIT</h1><Redirecter></Redirecter>
        </div>
    )
}

export default IndexPage
