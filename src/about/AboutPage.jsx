import React, { Component } from 'react'
import HeaderBar from "./../master/Header";
import './../../node_modules/bootstrap/dist/css/bootstrap.css' 

class AboutPage extends Component{
     render() {
         return (
           <div>
              <HeaderBar title="About Page" />
               <p>--PLACEHOLDER-- </p>
           </div> 
         );
    }
}

export default AboutPage;