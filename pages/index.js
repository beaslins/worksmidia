import Link from "next/link"
import Image from "next/image"
import Layout from "../components/layout"
import { motion } from "framer-motion"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faLightbulb } from '@fortawesome/free-solid-svg-icons'

function Home() {
    return (
        <Layout>
            <section className="home-banner flex">
                <div className="content">
                    <div className="box-title">
                        <h1 className="title">Conectando <span className="yellow">pessoas</span> <span className="block">através da <span className="yellow">tecnologia!</span></span></h1>
                        <Link href="#contato">
                            <a className="btn btn-blue">Saiba mais</a>
                        </Link>
                    </div>
                </div>
                <div className="image">
                    <motion.img src="/images/tophome.png" animate={{ z: 100 }} transition={{ type: "spring", fade: 0.5}}/>
                </div>
            </section>

            <section className="home-whyus p-box">
                <div className="container flex">
                    <div className="item flex">
                        <div className="base base-one flex flex-centered">
                            <FontAwesomeIcon icon={faLightbulb} className="icon" />
                        </div>
                        <h3 className="title">Meet Friends</h3>
                        <p>Why money's in that office, right? If she start giving means some bullet about ain't there</p>
                    </div>
                    <div className="item flex">
                        <div className="base base-two flex flex-centered">
                            <FontAwesomeIcon icon={faLightbulb} className="icon" />
                        </div>
                        <h3 className="title">Private Community</h3>
                        <p>Why money's in that office, right? If she start giving means some bullet about ain't there</p>
                    </div>
                    <div className="item flex">
                        <div className="base base-three flex flex-centered">
                            <FontAwesomeIcon icon={faLightbulb} className="icon" />
                        </div>
                        <h3 className="title">Free Membership</h3>
                        <p>Why money's in that office, right? If she start giving means some bullet about ain't there</p>
                    </div>
                </div>
            </section>

            <section className="home-services flex">
                <div className="content">
                    <div className="box">
                        <div className="box-title">
                            <h4 className="sub-title">Serviços</h4>
                            <h2 className="title">Easy management for your business</h2>
                            <p>Why money's in that office, right? If she start giving means some bullet about ain't there, and we got to go placing else and get it.</p>
                        </div>

                        <div className="services-list">
                            <div className="item flex">
                                <div><FontAwesomeIcon icon={faLightbulb} className="icon" /></div>
                                <div>
                                    <h3 className="title">Easy to Manage</h3>
                                    <p>Why money's in that office, right? If she start here giving for means some bullet about ain't there.</p>
                                </div>
                            </div>
                            <div className="item flex">
                                <div><FontAwesomeIcon icon={faLightbulb} className="icon" /></div>
                                <div>
                                    <h3 className="title">Easy to Manage</h3>
                                    <p>Why money's in that office, right? If she start here giving for means some bullet about ain't there.</p>
                                </div>
                            </div>
                            <div className="item flex">
                                <div><FontAwesomeIcon icon={faLightbulb} className="icon" /></div>
                                <div>
                                    <h3 className="title">Easy to Manage</h3>
                                    <p>Why money's in that office, right? If she start here giving for means some bullet about ain't there.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="image">
                    <motion.img src="/images/services.png" animate={{ z: 100 }} transition={{ type: "spring", fade: 0.5}}/>
                </div>
            </section>

            <section className="clients"></section>

            <section className="home-portfolio p-box">
                <div className="port-title flex">
                    <div className="box-title">
                        <h4 className="sub-title">Portfólio</h4>
                        <h2 className="title">Business has only two functions are marketing and innovation</h2>
                    </div>
                </div>
                <div className="works grid">
                    <div>
                        <Image 
                            src="/images/port1.jpg"
                            alt="Cliente 1"
                            layout="responsive"
                            width="570"
                            height="420"
                        />
                    </div>
                    <div>
                        <Image 
                            src="/images/port2.jpg"
                            alt="Cliente 1"
                            layout="responsive"
                            width="570"
                            height="420"
                        />
                    </div>
                    <div>
                        <Image 
                            src="/images/port3.jpg"
                            alt="Cliente 1"
                            layout="responsive"
                            width="570"
                            height="420"
                        />
                    </div>
                    <div>
                        <Image 
                            src="/images/port4.jpg"
                            alt="Cliente 1"
                            layout="responsive"
                            width="570"
                            height="420"
                        />
                    </div>
                </div>
            </section>

            <section className="home-pricing">
                <div className="pri-title flex">
                    <div className="box-title">
                        <h4 className="sub-title">Pacotes</h4>
                        <h2 className="title">Stop selling. Start helping.</h2>
                    </div>
                </div>
                <div className="list grid">
                    <div className="item">
                        <div className="header">Pacote X</div>
                        <ul>
                            <li className="service">Strategic Alliance</li>
                            <li className="service">Growth Expansion</li>
                            <li className="service">Business Planning</li>
                            <li className="service">Contract Negotiation</li>
                            <li className="service">Market Positioning</li>
                        </ul>
                    </div>
                    <div className="item active">
                        <div className="header">Pacote X</div>
                        <ul>
                            <li className="service">Strategic Alliance</li>
                            <li className="service">Growth Expansion</li>
                            <li className="service">Business Planning</li>
                            <li className="service">Contract Negotiation</li>
                            <li className="service">Market Positioning</li>
                        </ul>
                    </div>
                    <div className="item">
                        <div className="header">Pacote X</div>
                        <ul>
                            <li className="service">Strategic Alliance</li>
                            <li className="service">Growth Expansion</li>
                            <li className="service">Business Planning</li>
                            <li className="service">Contract Negotiation</li>
                            <li className="service">Market Positioning</li>
                        </ul>
                    </div>
                    <div className="item">
                        <div className="header">Pacote X</div>
                        <ul>
                            <li className="service">Strategic Alliance</li>
                            <li className="service">Growth Expansion</li>
                            <li className="service">Business Planning</li>
                            <li className="service">Contract Negotiation</li>
                            <li className="service">Market Positioning</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="testimonials p-box"></section>
        </Layout>
    )
}

export default Home