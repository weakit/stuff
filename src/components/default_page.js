import * as React from 'react'
import {Helmet} from 'react-helmet'
import {Link} from 'gatsby'
import Clock from './clock.js'
import * as Style from '../styles/default_page.module.css'
import '../fonts/fira-code/fira_code_default.css'
import PropTypes from 'prop-types'

const DefaultPage = (props) => {
    return (
        <div className={Style.container}>
            <Helmet>
                <title>{props.pageTitle}</title>
                <meta name="theme-color" content="#121212"/>
                <link rel="icon" href="data:image/gif;base64,R0lGODdhAQABAIAAAO3t7e3t7SwAAAAAAQABAAACAkQBADs="/>
                <meta name="google-site-verification" content="nBxx9LshwaKL4g5uiZ1Tt-eKXgfo4gbafm-gl8lwRC4"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Helmet>
            <div className={Style.body}>
                <div className={Style.header}>
                    <p className={Style.floatLeft}><Link href=".">{props.pageTitle}</Link></p>
                    <p className={Style.floatRight + " " + Style.progress}><Clock></Clock></p>
                </div>
                <div className={Style.content}>
                    {props.children}
                </div>
                <div className={Style.footer}>
                    <p className={Style.floatLeft}><a href={"mailto:" + props.mailAddress}>{props.mailText}</a></p>
                    <p className={Style.floatRight}><a href={props.footerLink}>{props.footerText}</a></p>
                </div>
            </div>
        </div>
    )
}

DefaultPage.propTypes = {
    pageTitle: PropTypes.string,
    mailAddress: PropTypes.string,
    mailText: PropTypes.string,
    footerLink: PropTypes.string,
    footerText: PropTypes.string,
    children: PropTypes.node,
}

DefaultPage.defaultProps = {
    pageTitle: "Page Title",
    mailAddress: "wea.kit@outlook.com",
    mailText: "wea.kit (at) outlook.com",
    footerLink: "https://github.com/weakit",
    footerText: "github (@weakit)",
    children: (
        <p>Wait a sec.<br/><br/><br/>If that didn't work, try refreshing the page, or check back later.</p>
    ),
}

function CreateList() {
    return <ul>
        {Array.from(arguments).map((val) => <li>{val}</li>)}
    </ul>
}

export {CreateList}
export default DefaultPage
