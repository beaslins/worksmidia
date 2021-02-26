import React, {useState, useEffect} from 'react'

import Head from 'next/head'
import Link from 'next/link'
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

                {/** Font */}
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,500&display=swap" rel="stylesheet"/>

                {/** Google */}
                <meta name="description" content="Marketing digital, desenvolvimento de sites, aplicativos, lojas virtuais, e-commerce, sites institucionais, sites para eventos, restaurantes, sociedades médicas e entre outros."/>
                <meta name="keywords" content="redes sociais, marketing digital, midias sociais, anúncio facebook, anúncio instagram, anúncio google adwords, criação de artes, e-mail marketing, desenvolvimento de sites, desenvolvimento de aplicativos, aplicativos para eventos, aplicativos para restaurantes, aplicativos para negócios, aplicativos nativos, lojas virtuais, e-commerce"/>

                {/** Social */}
                <meta property="og:title" content="Works Midia, a sua agência digital"/>
                <meta property="og:description" content=""/>
                <meta property="og:image" content=""/>

                <meta name="p:domain_verify" content="bdf552aa15af8bb26d76338f2c045c3a"/>

                {/** GTAG */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-75575214-1"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html:`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
        
                        gtag('config', 'UA-75575214-1');
                      `,
                    }}
                />
                
                {/** Facebook */}
                <script
                    dangerouslySetInnerHTML={{
                        __html:`
                        !function(f,b,e,v,n,t,s)
                        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                        n.queue=[];t=b.createElement(e);t.async=!0;
                        t.src=v;s=b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t,s)}(window,document,'script',
                        'https://connect.facebook.net/en_US/fbevents.js');
                        fbq('init', '2777167209166235');
                        fbq('track', 'PageView');
                      `,
                    }}
                />
                <noscript>
                    <img height="1" width="1" src="https://www.facebook.com/tr?id=2777167209166235&ev=PageView&noscript=1"/>
                </noscript>

                {/** Linkedin */}
                <script
                    dangerouslySetInnerHTML={{
                        __html:`
                        _linkedin_partner_id = "3216801";
                        window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
                        window._linkedin_data_partner_ids.push(_linkedin_partner_id);
                      `,
                    }}
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html:`
                        (function(){var s = document.getElementsByTagName("script")[0];
                        var b = document.createElement("script");
                        b.type = "text/javascript";b.async = true;
                        b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                        s.parentNode.insertBefore(b, s);})();
                      `,
                    }}
                />
                <noscript>
                    <img height="1" width="1" alt="" src="https://px.ads.linkedin.com/collect/?pid=3216801&fmt=gif" />
                </noscript>

            </Head>
            <header className={scroll ? "bg-white" : ""}>
                <div className="container flex">
                    <Link href="/">
                        <a className="logo">
                            <img src="/images/logo.png" alt="Logo Works Midia"/>
                        
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
                                <img src="/images/logo.png" alt="Logo Works Midia"/>
                                    
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
                    <Instagram/>
                    <div className="grid">
                        <div className="about">
                            <img src="/images/logo.png" alt="Logo Works Midia" />
                        
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
                    <div className="legal-informations">
                        <div>
                            <p>Works Midia Comunicação e Marketing LTDA</p>
                            <p>CNPJ: 12.222.510/0001-92</p>
                        </div>
                        <div className="copyright">
                            Desenvolvido por <span className="blue">Works Midia</span>
                        </div>
                    </div>
                </div>
            </footer>
            {/** Start of Tawk.to Script */}
            <script
                dangerouslySetInnerHTML={{
                    __html:`
                    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                    (function(){
                    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                    s1.async=true;
                    s1.src='https://embed.tawk.to/60365b0f385de407571990e7/1eva57dp0';
                    s1.charset='UTF-8';
                    s1.setAttribute('crossorigin','*');
                    s0.parentNode.insertBefore(s1,s0);
                    })();
                    `,
                }}
            />
            {/** End of Tawk.to Script */}
        </>
    )
}