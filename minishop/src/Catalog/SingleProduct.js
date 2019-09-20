import React from 'react'
import Header from '../Common/Header'
import Navbar from '../Common/Navbar'
import Footer from '../Common/Footer'
import CatalogHome from './CatalogHome'

export default class SingleProduct extends React.Component{
    render()
    {
        return(
            <div>
             <Header/>
            <Navbar/>
            <CatalogHome/>
            <Footer/>
            </div>
           
        
        )
    }
}
