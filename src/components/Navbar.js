import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShareNodes } from '@fortawesome/free-solid-svg-icons'
import opshoplogo from './opshoplogo.png'
import share from './share.png'
export default function Navbar(props) {
  return (
    <div className="navbar flex justify-between  " style={{ width:"98vw",height:"100px",backgroundColor:"#080135",color:"white",textAlign:'center',fontSize:"40px",fontFamily:"cursive",borderBottom:"4px solid white",marginbottom:"30px",padding:"20px"}}>
     {/* <img src={opshoplogo} alt="ophoplogo" className='h-[80px] w-[10%]' /> */}
      <div><h2 className='mx-[60px]'>OPshop</h2> </div>
     <button> <div><FontAwesomeIcon icon={faShareNodes} size="2xl" style={{color: "#fffff",}} /></div></button>
    </div>
  )
}

