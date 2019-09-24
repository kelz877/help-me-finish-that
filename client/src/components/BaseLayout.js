import React from 'react'
import {Footer} from './Footer'
import {Banner} from './Banner'

export function BaseLayout(props){
    return (
        <div>
            <Banner />
            {props.children}
            <Footer />
        </div>
    )
}