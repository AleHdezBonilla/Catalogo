import React from 'react'
import { Link } from 'react-router-dom';

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
  return <div> 
    {links.map(x =>  (
            <Link to= {x.href} > {x.name}</Link>
        ))}
    </div>;
};

export default NavBar