import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./NavBar.module.css"


const links = [
    {
        name: 'Principal', 
        href: '/Principal',
    }, 
    {
        name: 'Formulario', 
        href: '/Formulario',
    }, 
    {
        name: 'Catalogo', 
        href: '/Catalogo',
    }, 
    {
        name: 'Item', 
        href: '/Item',
    }, 
    {
        name: 'Usuario', 
        href: '/Usuario',
    }, 
    {
        name: 'Carrito', 
        href: '/Carrito',
    }
   
];

const NavBar = () => {
  return <div  className={styles.NavBar} > 
    <ul>
    {links.map(x =>  (
            <Link to= {x.href} > {x.name}</Link>
        ))}
    </ul>
</div>;
};

export default NavBar