import React, {useState, useEffect} from 'react'

import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Instagram from './instagram'

import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Layout({children, title = 'Home | Works Midia'}) {

    // Menu
    const [showMe, setShowMe] = useState(false)
    function toggle(){
      console.log('aqui')
      setShowMe(!showMe)
    }

    // Menu Scroll
    const [scroll, setScroll] = useState(false)
        useEffect(() => {
            window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50)
        })
    }, [])

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="author" content="Works Midia"/>

                /** Font */
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,500&display=swap" rel="stylesheet"/>

                /** Google */
                <meta name="description" content="Marketing digital, desenvolvimento de sites, aplicativos, lojas virtuais, e-commerce, sites institucionais, sites para eventos, restaurantes, sociedades médicas e entre outros."/>
                <meta name="keywords" content="redes sociais, marketing digital, midias sociais, anúncio facebook, anúncio instagram, anúncio google adwords, criação de artes, e-mail marketing, desenvolvimento de sites, desenvolvimento de aplicativos, aplicativos para eventos, aplicativos para restaurantes, aplicativos para negócios, aplicativos nativos, lojas virtuais, e-commerce"/>

                /** Social */
                <meta property="og:title" content="Works Midia, a sua agência digital"/>
                <meta property="og:description" content=""/>
                <meta property="og:image" content=""/>
            </Head>
            <header className={scroll ? "bg-white" : ""}>
                <div className="container flex">
                    <Link href="/">
                        <a className="logo">
                            <Image
                                src="/images/logo.png"
                                alt="Logo Works Midia"
                                width="150"
                                height="50"
                            />
                        </a>
                    </Link>
                    <div className={showMe ? "menu-section on" : "menu-section"}>
                        <div className="menu-toggle" onClick={toggle}>
                            <div className="one"></div>
                            <div className="two"></div>
                            <div className="three"></div>
                        </div>
                        <nav className="menu">
                            <Link href="/">
                                <a className="logo-mobile">
                                    <Image
                                        src="/images/logo.png"
                                        alt="Logo Works Midia"
                                        width="150"
                                        height="50"
                                    />
                                </a>
                            </Link>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                            <Link href="/sobre">
                                <a>Sobre</a>
                            </Link>                        
                            <Link href="/portfolio">
                                <a>Portfólio</a>
                            </Link>                        
                            <Link href="/servicos">
                                <a>Serviços</a>
                            </Link>                        
                            <Link href="/blog">
                                <a>Blog</a>
                            </Link>                        
                            <Link href="https://api.whatsapp.com/send?phone=551140406422">
                                <a className="btn btn-blue">Contato</a>
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>
            {children}
            <footer>
                <div className="container">
                    <div className="grid">
                        <div className="about">
                            <Image
                                src="/images/logo.png"
                                alt="Logo Works Midia"
                                width="150"
                                height="50"
                            />
                            <p>A Works Mídia é uma empresa de tecnologia e marketing que tem como objetivo conectar pessoas através da tecnologia!</p>
                        </div>
                        <div className="social">
                            <p className="title">Redes Sociais</p>
                            <p>Acompanhe nossas redes sociais e fique por dentro das novidades</p>
                            <div className="flex">
                                <Link href="" target="_blank">
                                    <a><FaFacebookF className="icon" /></a>
                                </Link>
                                <Link href="" target="_blank">
                                    <a><FaInstagram className="icon" /></a>
                                </Link>
                                <Link href="" target="_blank">
                                    <a><FaLinkedinIn className="icon" /></a>
                                </Link> 
                            </div>                   
                        </div>
                        <div className="contact">
                            <p className="title">Algum projeto em mente?</p>
                            <p>Vamos conversar sobre inovações para a sua empresa?</p>
                            <Link href="https://api.whatsapp.com/send?phone=551140406422">
                                <a className="btn btn-blue">Whatsapp</a>
                            </Link>
                        </div>
                    </div>
                    <Instagram/>
                    <div className="copyright">
                        Desenvolvido por <span className="blue">Works Midia</span>
                    </div>
                </div>
            </footer>
        </>
    )
}