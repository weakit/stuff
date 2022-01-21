import * as React from 'react'
import {Helmet} from 'react-helmet'
import * as Styles from '../styles/hbf.module.css'
import '../fonts/fira-code/fira_code_default.css'
import {useEffect, useState} from "react"
import Youtube from 'react-youtube'


const Sneaky = () => {
    const [showLoading, setLoading] = useState(true)
    const [showVideo, setVideo] = useState(false)
    const [target, setTarget] = useState(undefined)
    const [screen, setScreen] = useState(true)
    const [pity, setPity] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, Math.random() * 750 + 500)
    }, [])

    useEffect(() => {
        if (target !== undefined) {
            target.playVideo()
            setScreen(false)
        }
    }, [target])

    if (showVideo)
        return <div className={Styles.scrContainer}>
            <div className={Styles.scr} style={{opacity: screen ? 1 : 0}} onClick={_ => setPity(true)}/>
            {pity &&
                <div className={Styles.pity}>
                    <div><span>It won't stop playing. Tired?&nbsp;Go&nbsp;back&nbsp;<a href="/">home</a>.</span></div>
                </div>
            }
            <Youtube
                className={Styles.video}
                videoId='dQw4w9WgXcQ'
                opts={{playerVars: {controls: 0, disablekb: 1, fs: 0, loop: 1, modestbranding: 1}}}
                onReady={event => setTarget(event.target)}
            />
        </div>
    if (showLoading)
        return <h1>PLEASE WAIT</h1>

    return <button className={Styles.button} onClick={() => {
        setVideo(true)
    }}>START</button>
}

const IndexPage = () => {
    return (
        <div>
            <Helmet>
                <title>Higher Brain Functions</title>
                <meta name="theme-color" content="#121212"/>
                <link rel="icon" href="data:image/gif;base64,R0lGODdhAQABAIAAAO3t7e3t7SwAAAAAAQABAAACAkQBADs="/>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Helmet>
            <body style={{maxWidth: 'none', height: '100vh', width: '100vw', left: 0, position: 'fixed'}}>
            <div className={Styles.centreContainer}>
                <Sneaky/>
            </div>
            </body>
        </div>

    )
}

export default IndexPage
