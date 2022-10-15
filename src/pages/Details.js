import React from 'react'

import Header from 'parts/Header'
import Sitemap from 'parts/Sitemap'
import Footer from 'parts/Footer'

import Breadcrumb from 'components/Breadcrumb'
import ProductDetails from 'parts/Details/ProductDetails'
import Suggestion from 'parts/Details/Suggestion'

export default function Details(props) {
  return (
    <div>
        <Header theme="black" position="relative"></Header>
        <Breadcrumb list={[
            { url: "/", name: "Home" },
            { url: "/categories/91231", name: "Office Room" },
            { url: "/categories/91231/products/7888", name: "Details" },
        ]}></Breadcrumb>
        
        <ProductDetails></ProductDetails>
        <Suggestion></Suggestion>
        
        <Sitemap></Sitemap>
        <Footer></Footer>
    </div>
  )
}
