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

                /** Google */
                <meta name="description" content=""/>
                <meta name="keywords" content=""/>

                /** Social */
                <meta property="og:title" content="Works Midia, a sua agência digital"/>
                <meta property="og:description" content=""/>
                <meta property="og:image" content=""/>
            </Head>
            <header>
                <div className="container">
                    <Image
                        src="/images/logo.png"
                        alt="Logo Works Midia"
                        width="150"
                        height="50"
                    />
                    <nav>
                        <Link href="">
                            <a>Sobre</a>
                        </Link>                        
                        <Link href="">
                            <a>Portfólio</a>
                        </Link>                        
                        <Link href="">
                            <a>Serviços</a>
                        </Link>                        
                        <Link href="">
                            <a>Pacotes</a>
                        </Link>
                        <Link href="">
                            <a className="btn">Contato</a>
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