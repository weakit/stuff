import * as React from 'react'
import {Helmet} from 'react-helmet'
import { centre } from '../styles/hbf.module.css'

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
                <script type="text/javascript">
                setTimeout(
                        function() {
                            window.location.href = "https://youtu.be/dQw4w9WgXcQ"
                        }, 3000
                    );
                </script>
            </Helmet>
            <h1>PLEASE WAIT</h1>
        </div>
    )
}

export default IndexPage
