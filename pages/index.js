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
                        <h1 className="title">
                            Conectando <span className="yellow">pessoas</span> 
                            <span className="block">através da <span className="yellow">tecnologia!</span></span>
                        </h1>
                        <p>Hoje a internet figura como um dos principais meios de comunicação do mundo e sua empresa não pode ficar de fora deste poderoso mecanismo de informação.</p>
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
                                    <div><FaShareAlt className="icon" /></div>
                                    <div>
                                        <h3 className="title">Marketing Digital</h3>
                                        <p>Planejamento de marketing, gestão de redes sociais, criação de e-mail marketing, artes para mídias sociais, anúncios (Facebook, Instagram e Google Adwords)</p>
                                    </div>
                                </div>
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
                                        <p>Aplicativos mobile personalizados, não importa o tipo de negócio, nós temos a melhor solução.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="image">
                        <motion.img src="/images/services-pampus.png" animate={{ z: 100 }} transition={{ type: "spring", fade: 0.5}}/>
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
                    <Horizontal responsive={responsive} partialVisible renderButtonGroupOutside={true}>
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
                                    <p className="title">Como aplicar o Marketing 4.0 na prática</p>
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
                                    <p className="title">Como o tempo de carregamento impacta nas vendas online?</p>
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
                                    <p className="title">Se relacionamento com seu cliente na atualidade</p>
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