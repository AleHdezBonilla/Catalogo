import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./NavBar.module.css"
import { Formulario } from './Formulario/Formulario';

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