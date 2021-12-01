/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import LogoTopo from '../../../assets/logo512.png';
import './Header.css';

const Header = () => {
    return(
        <>
            <div className='tudo-header'>
               
                <img className='logo' src={ LogoTopo }/>
                <a target="_blank" href="https://flipbr.com.br/"className='menus'> O que fazemos </a>
                <a target="_blank" href="https://flipbr.com.br/company/"className='menus'> Quem Somos </a>
                <a target="_blank" href="https://flipbr.com.br/contact/"className='menus'> Contato </a>
                <a target="_blank" href="https://flipbr.com.br/cadastre-seu-imovel/"><button className='btn-topo'>Quero Cadastrar Meu Imóvel</button></a>
                
            </div>
        </>
    )
}
export default Header;