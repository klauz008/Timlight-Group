import React, { useState } from 'react';
import "./navbar.css";
import {RiMenu3Line, RiCloseLine} from "react-icons/ri";
import logo from "../../assets/logo.jpg";

const Navbar = () => {
  const [toggleMenu, settoggleMenu] = useState(false)

  const Menu = () => {
    return(
      <>
        <p><a href="#home">Home</a></p>
        <p><a href="#aboutUs">About Us</a></p>
        <p><a href="#features">Profile</a></p>
        <p><a href="#contact">Contact Us</a></p>
        <p><a href="#possibility">Case Studies</a></p>
        <div className="navbar-subsidiaries"> 
                        
          <p> Subsidiaries <i class="fas fa-chevron-down"></i></p> 
          {/* <Subsidiaries /> */}
                           
        </div>
      </>
    )
  }

  return (
    <div className='__navbar'>
      <div className="__navbar-links">
        <div className="__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="__navbar-links_container">
          <Menu/>
        </div>
        <div className="__navbar-sign">
          <p>Sign In</p>
          <button type="button">Sign Up</button>
        </div>
        <div className="__navbar-menu">
          {toggleMenu
            ?<RiCloseLine color='#fff' size={27} onClick={()=> settoggleMenu(false)}/>
            :<RiMenu3Line color='#fff' size={27} onClick={()=> settoggleMenu(true)}/>
          }
          {
            toggleMenu && (
              <div className="__navbar-menu_container scale-up-center">
                <div className="__navbar-menu_container-links">
                  <Menu/>
                  <div className="__navbar-menu_container-links-sign">
                    <p>Sign In</p>
                    <button type="button">Sign Up</button>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar

const Subsidiaries = (props) => {
  var data = [
      {
        // image:vcards,
        title : 'Timdi Nkat Co',
        subtitle :'Fertilizers you can bank on.',
        // url:'/vesticard'
      },
      {
        // image:japa,
        title : 'Josapp',
        subtitle :'Real estate at its best.',
        // url:'/pathways'
          
      },
      {
        // image:vwallet,
        title : 'Timlight Arena',
        subtitle :'Best arena for authentic leisure.',
        // url:'/bank'
          
      }

  ]

  return (
      <div className={`Subsidiaries active ${props.value ? ' mactive':''}`}>
          {
              data.map((item,index)=> (
                  <div className={`Subsidiaries__item`} key={index}>
                      <img src={item.image} alt="Sunsidiary"/>
                      <div className="Subsidiaries__item__content">
                        {!item.url? <p>{item.title}</p>:<a className="product-link" href={item.url} >{item.title}</a>}
                        <p className="Subsidiaries__item__content__subt">{item.subtitle}</p>
                      </div>
                  </div>
              ))
          }

      </div>
  )
}