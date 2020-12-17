import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'


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
            <footer>
                <div className="grid colunms-3">
                    <div className="about"></div>
                    <div className="menu"></div>
                    <div className="social"></div>
                </div>
                <div className="copyright"></div>
            </footer>
        </>
    )
}