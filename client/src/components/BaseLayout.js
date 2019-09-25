import React from 'react'
import {Footer} from './Footer'
import {Banner} from './Banner'
import Menu from './Menu'
import Navigation from './Navigation'

export function BaseLayout(props){
    return (
        <div>
            <Navigation />
            <Banner />
            <Menu />
            {props.children}
            <Footer />
        </div>
    )
}