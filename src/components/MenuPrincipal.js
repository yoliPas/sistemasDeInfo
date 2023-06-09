import React from "react";
import Home from "../assets/proyecto.png"
import {Menu} from './Menu';

export const MenuPrincipal =()=>{
    return(
        
        <div className=" d-flex  vh-100"  style={{ display: 'flex', flexDirection: 'column' }}>
            <section style={{background: 'linear-gradient(to bottom, transparent, #333333)', width:"100%", height: "75%", margin:0, padding:0}} >
            <div className="container">
                <h1 style={{ fontSize: '90px', color:'white', fontWeight: 'bold', marginTop:"180px"}}>SEGULIM</h1>
                <p style={{ fontSize: '30px', display: 'block', color:'white', fontWeight: 'bold'}}>"Encuentra tu lugar en el mundo"</p>
              
            </div>
            <div>  
                <img src={Home} style={{ position: 'absolute',  right:100, marginTop: "-350px", height:"450px"}} alt="Imagen"></img>
            </div>

            </section>
            <section style={{ width: '100%', justifyContent:"center" }}>
                <h4 style={{textAlign:"center", color:"white",  fontWeight: 'bold'}}>Acerca de Nosotros</h4>
                <div className="container d-flex justify-content-center align-items-center ">
                    <div>
                        <i className="bi bi-globe " style={{ fontSize: '4rem', marginRight: '90px' }}></i> 
                        <h6 style={{color:"white", marginRight: '90px' }}>Comunidad</h6>
                        </div>

                    <div>
                    <i class="bi bi-person-workspace " style={{fontSize: '4rem', marginRight: '90px'  }}></i>
                    <h6 style={{color:"white", marginRight: '90px'  }}>¿Quiénes Somos?</h6>
                    </div>
                    <div>
                    <i class="bi bi-bag" style={{ fontSize: '4rem', marginRight: '90px' }}></i>
                    <h6 style={{color:"white", marginRight: '90px' }}>Acciones</h6>
                    </div>
                    <div>
                    <i class="bi bi-steam " style={{ fontSize: '4rem', marginRight: '90px' }}></i>
                    <h6 style={{color:"white"}}>Soporte</h6>
                    </div>

                </div>
            </section>
            
        </div>
    )
}