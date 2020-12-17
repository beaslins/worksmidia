import Link from "next/link"
import Image from "next/image"
import Layout from "../components/layout"

function Home() {
    return (
        <Layout>
            <section id="banner">
                <div className="container flex">
                    <div className="boxTitle">
                        <h1 className="title">Conectando <span className="yellow">pessoas</span> <span className="block">através da <span className="yellow">tecnologia!</span></span></h1>
                        <Link href="#contato">
                            <a className="btn btn-blue">Saiba mais</a>
                        </Link>
                    </div>
                    <div>
                        <Image
                            src="/images/tophome.png"
                            alt="Logo Works Midia"
                            width="647"
                            height="665"
                        />
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Home