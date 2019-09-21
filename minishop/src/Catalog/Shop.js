import React from 'react'
import Header from '../Common/Header'
import Navbar from '../Common/Navbar'
import CatalogHome from './CatalogHome'
import Footer from '../Common/Footer'
import CatalogProduct from './CatalogProduct'
const ProductDetails=[
    {
        productImage:'./images/product-1.png',
        productTitle:'NIKE FREE RN 2019 ID',
        productPrize:"1200rs"
    },
    {
        productImage:'./images/product-2.png',
        productTitle:'NIKE FREE RN 2019 ID',
        productPrize:"1300rs"
    },
    {
        productImage:'./images/product-3.png',
        productTitle:'NIKE FREE RN 2019 ID',
        productPrize:"1400rs"
    },
    {
        productImage:'./images/product-4.png',
        productTitle:'NIKE FREE RN 2019 ID',
        productPrize:"1500rs"
    },
    {
        productImage:'./images/product-5.png',
        productTitle:'NIKE FREE RN 2019 ID',
        productPrize:"1600rs"
    },
    {
        productImage:'./images/product-6.png',
        productTitle:'NIKE FREE RN 2019 ID',
        productPrize:"1700rs"
    },
    {
        productImage:'./images/product-7.png',
        productTitle:'NIKE FREE RN 2019 ID',
        productPrize:"1800rs"
    },
    {
        productImage:'./images/product-8.png',
        productTitle:'NIKE FREE RN 2019 ID',
        productPrize:"1900rs"
    }
];
export default class Shop extends React.Component{
    render()
    {
    return(
    <div>
    <Header/>
    <Navbar/>
    <CatalogHome/>
    <div>
    <CatalogProduct data={ProductDetails}/>
    </div>
    <Footer/>
    </div>
        )
    }
}