import Link from "next/link"
import Image from "next/image"
import Layout from "../components/layout"
import { motion } from "framer-motion"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faLightbulb } from '@fortawesome/free-solid-svg-icons'

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
                        <motion.img src="/images/tophome.png" animate={{ x: 100 }} transition={{ type: "spring", fade: 0.5}}/>
                    </div>
                </div>
            </section>

            <section id="whyUs">
                <div className="container flex">
                    <div className="item">
                        <FontAwesomeIcon icon={faLightbulb} className="icon" />
                        <h3>Lorem Ipsum</h3>
                        <p>Why money's in that office, right? If she start giving means some bullet about ain't there</p>
                    </div>
                    <div className="item">
                        <FontAwesomeIcon icon={faLightbulb} className="icon" />
                        <h3>Lorem Ipsum</h3>
                        <p>Why money's in that office, right? If she start giving means some bullet about ain't there</p>
                    </div>
                    <div className="item">
                        <FontAwesomeIcon icon={faLightbulb} className="icon" />
                        <h3>Lorem Ipsum</h3>
                        <p>Why money's in that office, right? If she start giving means some bullet about ain't there</p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Home