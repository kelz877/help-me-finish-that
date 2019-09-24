import React from 'react'
import {Footer} from './Footer'
import {Banner} from './Banner'
import Menu from './Menu'

export function BaseLayout(props){
    return (
        <div>
            <Banner />
            <Menu />
            {props.children}
            <Footer />
        </div>
    )
}