import React from 'react'

import Header from 'parts/Header'
// import Hero from 'parts/Hero'
// import BrowseRoom from 'parts/HomePage/BrowseRoom'
// import JustArrived from 'parts/HomePage/JustArrived'
import Clients from 'parts/Clients'
import Sitemap from 'parts/Sitemap'
import Footer from 'parts/Footer'

import Breadcrumb from 'components/Breadcrumb'

export default function Details(props) {
  return (
    <div>
        <Header theme="black" position="relative"></Header>
        <Breadcrumb list={[
            { url: "/", name: "Home" },
            { url: "/categories/91231", name: "Office Room" },
            { url: "/categories/91231/products/7888", name: "Details" },
        ]}></Breadcrumb>
        
        <Clients></Clients>
        <Sitemap></Sitemap>
        <Footer></Footer>
    </div>
  )
}
