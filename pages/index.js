import Link from "next/link"
import Image from "next/image"

import Layout from "../components/layout"
import Testmonials from "../components/testmonials"
import Contact from "../components/contact"

import { motion } from "framer-motion"

import { FaLightbulb, FaLaptop, FaMobile, FaShareAlt, FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

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
            <section className="home-banner">
                <div className="box-title">
                    <div>
                        <p className="home-title">
                            Conectando <span className="yellow">pessoas</span> 
                            <span className="block">através da <span className="yellow">tecnologia!</span></span>
                        </p>
                        <p>A tecnologia inovou a forma de conectar pessoas, criando novas formas de comunicação, diminuindo o distanciamento e agregando valor a todos!</p>
                        <h1 className="home-h1">Uma boa estratégia de marketing digital com um planejamento, desenvolvimento e criação de website e aplicativos mobile, irão colocar a sua empresa à frente no mercado.</h1>
                        <div className="flex ctas">
                            <Link href="https://api.whatsapp.com/send?phone=551140406422">
                                <a className="btn btn-blue flex"><FaWhatsapp /> <span>Fale conosco</span></a>
                            </Link>
                            <Link href="#portfolio">
                                <a className="btn btn-yellow ml-2">Portfólio</a>
                            </Link>
                        </div>
                        <div className="home-social">
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
                </div>
                <div className="home-image">
                    <img className="image" src="/images/homequadrada.jpg"/>
                </div>
            </section>

            {/**<section className="home-whyus">
                <div className="container flex">
                    <div className="item flex">
                        <div className="base base-one flex flex-centered">
                            <FaLightbulb className="icon" />
                        </div>
                        <h3 className="title">Missão</h3>
                        <p>Proporcionar aos clientes o que tem de mais moderno em Tecnologia e Marketing, com excelência em inovação.</p>
                    </div>
                    <div className="item flex">
                        <div className="base base-two flex flex-centered">
                            <FaLightbulb className="icon" />
                        </div>
                        <h3 className="title">Visão</h3>
                        <p>Ser empresa referência em tecnologia e soluções de marketing digital aos nossos clientes até 2023.</p>
                    </div>
                    <div className="item flex">
                        <div className="base base-three flex flex-centered">
                            <FaLightbulb className="icon" />
                        </div>
                        <h3 className="title">Valores</h3>
                        <p>Desenvolver soluções arrojadas, de alto padrão e fácil acesso.</p>
                    </div>
                </div>
            </section>*/}

            <section className="home-services">
                <div className="box-title">
                    <h4 className="sub-title">Serviços</h4>
                    <h2 className="title">Soluções arrojadas, <span className="block">de alto padrão e fácil acesso</span></h2>
                </div>
                <div className="flex">
                    <div className="content">
                        <div className="box">
                            <div className="services-list">
                                <div className="item flex">
                                    <div><FaLaptop className="icon" /></div>
                                    <div>
                                        <h3 className="title">Desenvolvimento de Site</h3>
                                        <p>Desenvolvimento de sites para todos os tipos de negócios, entendendo desde o publico alvo até a alma do negocio.</p>
                                    </div>
                                </div>
                                <div className="item flex">
                                    <div><FaMobile className="icon" /></div>
                                    <div>
                                        <h3 className="title">Desenvolvimento de aplicativos mobile</h3>
                                        <p>Aplicativos para celular personalizados, para todos os tipos de negócio. Nós temos a melhor solução para você estar na palma do seu cliente.</p>
                                    </div>
                                </div>
                                <div className="item flex">
                                    <div><FaShareAlt className="icon" /></div>
                                    <div>
                                        <h3 className="title">Marketing Digital</h3>
                                        <p>Planejamento de marketing, gestão de redes sociais, criação de e-mail marketing, artes para mídias sociais, anúncios (Facebook, Instagram e Google Adwords).</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="image">
                        <img src="/images/services-pampus.png"/>
                    </div>
                </div>
            </section>

            <section id="portfolio" className="home-portfolio">
                <div className="port-title">
                    <div className="box-title">
                        <h4 className="sub-title">Portfólio</h4>
                        <h2 className="title">Empresas que confiam <span className="block">no trabalho da Works Midia</span></h2>
                    </div>
                </div>
                <div className="works">
                    <Horizontal responsive={responsive} infinite={true} partialVisible renderButtonGroupOutside={true}>
                        <div className="work">
                            <Link href="portfolio/desenvolvimento-de-site-aua-news">
                               <a>
                                    <Image 
                                        src="/images/port1.jpg"
                                        alt="AUA News"
                                        layout="responsive"
                                        width="570"
                                        height="420"
                                    />
                                </a>
                            </Link>
                        </div>
                        <div className="work">
                            <Link href="portfolio/desenvolvimento-de-aplicativo-levitatur">
                               <a>
                                <Image 
                                    src="/images/port2.jpg"
                                    alt="Levitatur"
                                    layout="responsive"
                                    width="570"
                                    height="420"
                                />
                                </a>
                            </Link>
                        </div>
                        <div className="work">
                            <Link href="portfolio/desenvolvimento-de-site-nohar">
                               <a>
                                <Image 
                                    src="/images/port3.jpg"
                                    alt="Nohar Steak Bar"
                                    layout="responsive"
                                    width="570"
                                    height="420"
                                />
                                </a>
                            </Link>
                        </div>
                        <div className="work">
                            <Link href="portfolio/desenvolvimento-de-aplicativo-sbacv">
                               <a>
                                <Image 
                                    src="/images/port4.jpg"
                                    alt="SBACV"
                                    layout="responsive"
                                    width="570"
                                    height="420"
                                />
                                </a>
                            </Link>
                        </div>
                        <div className="work">
                            <Link href="portfolio/desenvolvimento-de-site-cirurgia">
                               <a>
                                <Image 
                                    src="/images/port5.jpg"
                                    alt="Curso Hands On em cadáveres"
                                    layout="responsive"
                                    width="570"
                                    height="420"
                                />
                                </a>
                            </Link>
                        </div>                        
                        <div className="work">
                            <Link href="portfolio/desenvolvimento-de-site-pampus">
                               <a>
                                <Image 
                                    src="/images/port6.jpg"
                                    alt="Pampus"
                                    layout="responsive"
                                    width="570"
                                    height="420"
                                />
                                </a>
                            </Link>
                        </div>
                        <div className="work">
                            <Link href="portfolio/desenvolvimento-de-aplicativo-cbmi">
                               <a>
                                <Image 
                                    src="/images/port7.jpg"
                                    alt="CBMI"
                                    layout="responsive"
                                    width="570"
                                    height="420"
                                />
                                </a>
                            </Link>
                        </div>
                    </Horizontal>
                </div>
            </section>

            <section className="home-clients container p-box">
                <Horizontal responsive={responsive} arrows={true}>
                    <div className="client flex flex-centered">
                        <Image 
                            src="/images/pampus.png"
                            alt="Pampus"
                            width="105"
                            height="41"
                        />
                    </div>
                    <div className="client flex flex-centered">
                        <Image 
                            src="/images/nohar.png"
                            alt="Nohar Steak Bar"
                            width="105"
                            height="41"
                        />
                    </div>
                    <div className="client flex flex-centered">
                        <Image 
                            src="/images/levitatur.png"
                            alt="Levitatur"
                            width="105"
                            height="41"
                        />
                    </div>
                    <div className="client flex flex-centered">
                        <Image 
                            src="/images/amib.png"
                            alt="AMIB"
                            width="105"
                            height="41"
                        />
                    </div>
                    <div className="client flex flex-centered">
                        <Image 
                            src="/images/aua.png"
                            alt="AUA News"
                            width="105"
                            height="41"
                        />
                    </div>
                </Horizontal>
            </section>

            <section className="cta">
                <h2 className="title">
                    Algum <span className="yellow">projeto</span> em mente?
                </h2>
                <Link href="https://api.whatsapp.com/send?phone=551140406422">
                    <a className="btn btn-blue flex"><FaWhatsapp className="icon" /> <span>Fale conosco via whatsapp</span></a>
                </Link>

                {/**<div className="home-cont-form">
                    <form>
                        <div className="home-input-group">
                            <input 
                                type="text" 
                                value="" 
                                placeholder="Nome" 
                            />
                            <input 
                                type="text" 
                                value="" 
                                placeholder="E-mail" 
                            />
                        
                            <input 
                                type="text" 
                                value="" 
                                placeholder="Whatsapp" 
                            />
                        </div>
                        <div className="home-input-group">
                            <textarea placeholder="Mensagem"></textarea>
                        </div>
                        <button className="btn btn-blue" type="submit">Enviar</button>
                    </form>
                </div>*/}
            </section>

            <section className="home-blog container">
                <div className="box-title">
                    <h4 className="sub-title">Blog</h4>
                    <h2 className="title">Tecnologia, Inovação <span className="block">e tendências para o seu negócio!</span></h2>
                </div>
                <div className="posts grid">
                    <div className="post">
                        <Link href="blog/qual-a-melhor-estrategia-de-vendas">
                            <a>
                                <img src="/images/blog1.jpg" alt="" title="Qual a melhor estratégia de vendas?"/>
                                <div className="text">
                                    <p className="title">Qual a melhor estratégia de vendas?</p>
                                    <p className="meta"><span className="date">02 FEV, 2021</span> por <span className="author yellow">Works Midia</span></p>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="spotlight">
                        <Link href="blog/com-estar-proximo-ao-seu-cliente">
                            <a>
                                <img src="/images/blog1.jpg" alt="" title="Como estar proximo ao seu cliente!"/>
                                <div className="text">
                                    <p className="title">Como estar proximo ao seu cliente!</p>
                                    <p className="meta"><span className="date">02 FEV, 2021</span> por <span className="author yellow">Works Midia</span></p>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="post">
                        <Link href="blog/esta-perdendo-vendas-e-nao-sabe-por-que">
                            <a>
                                <img src="/images/blog1.jpg" alt="" title="Está perdendo vendas e não sabe por quê?"/>
                                <div className="text">
                                    <p className="title">Está perdendo vendas e não sabe por quê?</p>
                                    <p className="meta"><span className="date">02 FEV, 2021</span> por <span className="author yellow">Works Midia</span></p>
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