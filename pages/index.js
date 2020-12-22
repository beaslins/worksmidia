import Link from "next/link"
import Image from "next/image"

import Layout from "../components/layout"
import Testmonials from "../components/testmonials"

import { motion } from "framer-motion"


import { FaLightbulb } from 'react-icons/fa';

import Horizontal from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    partialVisibilityGutter: 40
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    partialVisibilityGutter: 40
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 40
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 40
  }
}

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
                            <FaLightbulb className="icon" />
                        </div>
                        <h3 className="title">Meet Friends</h3>
                        <p>Why money's in that office, right? If she start giving means some bullet about ain't there</p>
                    </div>
                    <div className="item flex">
                        <div className="base base-two flex flex-centered">
                            <FaLightbulb className="icon" />
                        </div>
                        <h3 className="title">Private Community</h3>
                        <p>Why money's in that office, right? If she start giving means some bullet about ain't there</p>
                    </div>
                    <div className="item flex">
                        <div className="base base-three flex flex-centered">
                            <FaLightbulb className="icon" />
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
                                <div><FaLightbulb className="icon" /></div>
                                <div>
                                    <h3 className="title">Easy to Manage</h3>
                                    <p>Why money's in that office, right? If she start here giving for means some bullet about ain't there.</p>
                                </div>
                            </div>
                            <div className="item flex">
                                <div><FaLightbulb className="icon" /></div>
                                <div>
                                    <h3 className="title">Easy to Manage</h3>
                                    <p>Why money's in that office, right? If she start here giving for means some bullet about ain't there.</p>
                                </div>
                            </div>
                            <div className="item flex">
                                <div><FaLightbulb className="icon" /></div>
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

            <section className="home-clients container p-box">
                <Horizontal responsive={responsive} arrows={false}>
                    <div className="client flex flex-centered">
                        <Image 
                            src="/images/clientone.png"
                            alt="Cliente 1"
                            width="185"
                            height="72"
                        />
                    </div>
                    <div className="client flex flex-centered">
                        <Image 
                            src="/images/clienttwo.png"
                            alt="Cliente 2"
                            width="185"
                            height="72"
                        />
                    </div>
                    <div className="client flex flex-centered">
                        <Image 
                            src="/images/clientthree.png"
                            alt="Cliente 3"
                            width="185"
                            height="72"
                        />
                    </div>
                    <div className="client flex flex-centered">
                        <Image 
                            src="/images/clientfour.png"
                            alt="Cliente 4"
                            width="185"
                            height="72"
                        />
                    </div>
                    <div className="client flex flex-centered">
                        <Image 
                            src="/images/clientone.png"
                            alt="Cliente 1"
                            width="185"
                            height="72"
                        />
                    </div>
                </Horizontal>
            </section>

            <section className="home-portfolio">
                <div className="port-title flex">
                    <div className="box-title">
                        <h4 className="sub-title">Portfólio</h4>
                        <h2 className="title">Business has only two functions are marketing and innovation</h2>
                    </div>
                </div>
                <div className="works">
                    <Horizontal responsive={responsive} partialVisible renderButtonGroupOutside={true}>
                        <div className="work">
                            <Image 
                                src="/images/port1.jpg"
                                alt="Cliente 1"
                                layout="responsive"
                                width="570"
                                height="420"
                            />
                        </div>
                        <div className="work">
                            <Image 
                                src="/images/port2.jpg"
                                alt="Cliente 2"
                                layout="responsive"
                                width="570"
                                height="420"
                            />
                        </div>
                        <div className="work">
                            <Image 
                                src="/images/port3.jpg"
                                alt="Cliente 3"
                                layout="responsive"
                                width="570"
                                height="420"
                            />
                        </div>
                        <div className="work">
                            <Image 
                                src="/images/port4.jpg"
                                alt="Cliente 4"
                                layout="responsive"
                                width="570"
                                height="420"
                            />
                        </div>
                        <div className="work">
                            <Image 
                                src="/images/port1.jpg"
                                alt="Cliente 1"
                                layout="responsive"
                                width="570"
                                height="420"
                            />
                        </div>
                    </Horizontal>
                </div>
            </section>

            <section className="home-pricing p-box">
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

            <section className="cta">
                <h2 className="title">
                    Algum <span className="yellow">projeto</span> em mente? Vamos bater um papo 
                    e trazer negócio para o 
                    <span className="yellow"> mundo digital!</span>
                </h2>
                <Link href="/contato">
                    <a className="btn btn-blue">Contato</a>
                </Link>
            </section>

            <section className="testimonials p-box flex">
                <div className="testimonial-area">
                    <div className="testmonial-slick-wrapper">
                        <Testmonials></Testmonials>  
                    </div>       
                </div>
                <div className="box-title">
                    <h4 className="sub-title">Depoimentos</h4>
                    <h2 className="title">Authenticity, honesty, and personal voice</h2>
                </div> 
            </section>

            <section className="home-blog container">
                <div className="box-title">
                    <h4 className="sub-title">Blog</h4>
                    <h2 className="title">Dicas para alavancar o <span className="block">seu negócio</span></h2>
                </div>
                <div className="posts grid">
                    <div className="post">
                        <Link href="/">
                            <a>
                                <Image 
                                    src="/images/blog1.jpg"
                                    alt="Título do post"
                                    width="370"
                                    height="280"
                                />
                                <div className="text">
                                    <p className="title">You are free to choose what you want</p>
                                    <p className="meta"><span className="date">25 de Dez, 2020</span> por <span className="author yellow">Works Midia</span></p>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="spotlight">
                        <Link href="/">
                            <a>
                                <Image 
                                    src="/images/blog1.jpg"
                                    alt="Título do post"
                                    width="370"
                                    height="280"
                                />
                                <div className="text">
                                    <p className="title">You are free to choose what you want</p>
                                    <p className="meta"><span className="date">25 de Dez, 2020</span> por <span className="author yellow">Works Midia</span></p>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="post">
                        <Link href="/">
                            <a>
                                <Image 
                                    src="/images/blog1.jpg"
                                    alt="Título do post"
                                    width="370"
                                    height="280"
                                />
                                <div className="text">
                                    <p className="title">You are free to choose what you want</p>
                                    <p className="meta"><span className="date">25 de Dez, 2020</span> por <span className="author yellow">Works Midia</span></p>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Home