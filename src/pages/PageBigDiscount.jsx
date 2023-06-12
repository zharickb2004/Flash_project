import React from 'react'
import CardOffer from '../components/CardOffer/CardOffer'
import '../components/CardOffer/cardOffer.css'
import Header from '../common/header/Header'
import Footer from '../common/footer/Footer'

function PageBigDiscount({productItems, addToCart,CartItem}) {
  return (
    <>
    
    <div className="flash">
    <Header CartItem={CartItem} /> 
    <h1>Grandes Descuentos</h1>
    <p>Bienvenido a nuesteros grandes descuentos.</p>
   <div className="container-page-offers">
     <CardOffer productItems={productItems} addToCart={addToCart} /> 
   </div>
    <Footer/>
    </div>
    
    </>
  )
}

export default PageBigDiscount