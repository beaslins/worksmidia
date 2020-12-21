import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Instagram from './instagram'

export default function Layout({children, title = 'Home | Works Midia'}) {
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
                <meta name="description" content=""/>
                <meta name="keywords" content=""/>

                /** Social */
                <meta property="og:title" content="Works Midia, a sua agência digital"/>
                <meta property="og:description" content=""/>
                <meta property="og:image" content=""/>
            </Head>
            <header>
                <div className="container flex">
                    <Link href="/">
                        <a>
                            <Image
                                src="/images/logo.png"
                                alt="Logo Works Midia"
                                width="150"
                                height="50"
                            />
                        </a>
                    </Link>
                    <nav className="menu">
                        <Link href="/sobre">
                            <a>Sobre</a>
                        </Link>                        
                        <Link href="/portfolio">
                            <a>Portfólio</a>
                        </Link>                        
                        <Link href="/servicos">
                            <a>Serviços</a>
                        </Link>                        
                        <Link href="/pacotes">
                            <a>Pacotes</a>
                        </Link>
                        <Link href="/contato">
                            <a className="btn btn-blue">Contato</a>
                        </Link>                        
                    </nav>
                </div>
            </header>
            {children}
            <footer className="p-box container">
                <div className="grid">
                    <div className="about">
                        <Image
                            src="/images/logo.png"
                            alt="Logo Works Midia"
                            width="150"
                            height="50"
                        />
                        <p>Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason.</p>
                    </div>
                    <div className="menu">
                        <Link href="/sobre">
                            <a>Sobre</a>
                        </Link>                        
                        <Link href="/portfolio">
                            <a>Portfólio</a>
                        </Link>                        
                        <Link href="/servicos">
                            <a>Serviços</a>
                        </Link>                        
                        <Link href="/pacotes">
                            <a>Pacotes</a>
                        </Link>
                        <Link href="/contato">
                            <a>Contato</a>
                        </Link>                        
                    </div>
                    <div className="social">
                        <Link href="/contato">
                            <a>

                            </a>
                        </Link>
                    </div>
                </div>
                <Instagram/>
                <div className="copyright">
                    Feito por <span className="yellow">Works Midia</span>
                </div>
            </footer>
        </>
    )
}