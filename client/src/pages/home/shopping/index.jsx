import React from 'react'
import ShoppingCard from '../../../components/Cards/shopping-card'

const ShoppingSection = () => {
  return (
    <section style={{height:'100vh', background:'red', display:'flex', alignItems:'center', overflow:'hidden',flexWrap:'wrap', gap:'10px'}}>
        <ShoppingCard/>
        <ShoppingCard/>
        <ShoppingCard/>
    </section>
  )
}

export default ShoppingSection