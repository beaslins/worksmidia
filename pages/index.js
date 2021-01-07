import Link from "next/link"
import Image from "next/image"

import Layout from "../components/layout"
import Testmonials from "../components/testmonials"

import { motion } from "framer-motion"

import { FaLightbulb, FaLaptop, FaMobile, FaShareAlt } from 'react-icons/fa';

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
            </section>

            <section className="home-whyus">
                <div className="container flex">
                    <div className="item flex">
                        {/** <div className="base base-one flex flex-centered">
                            <FaLightbulb className="icon" />
                        </div> */}
                        <h3 className="title">Missão</h3>
                        <p>Proporcionar aos clientes o que tem de mais moderno em Tecnologia e Marketing, com excelência em inovação.</p>
                    </div>
                    <div className="item flex">
                        {/** <div className="base base-two flex flex-centered">
                            <FaLightbulb className="icon" />
                        </div> */}
                        <h3 className="title">Visão</h3>
                        <p>Ser empresa referência em tecnologia e soluções de marketing digital aos nossos clientes até 2023.</p>
                    </div>
                    <div className="item flex">
                        {/** <div className="base base-three flex flex-centered">
                            <FaLightbulb className="icon" />
                        </div> */}
                        <h3 className="title">Valores</h3>
                        <p>Desenvolver soluções arrojadas, de alto padrão e fácil acesso.</p>
                    </div>
                </div>
            </section>

            <section className="home-services flex p-box">
                <div className="content">
                    <div className="box">
                        <div className="box-title">
                            <h4 className="sub-title">Serviços</h4>
                            <h2 className="title">Soluções arrojadas, de alto padrão e fácil acesso</h2>
                            <p>Nossa paixão é por ajudar empresas a divulgarem os seus negócios e com isso ajudarem mais pessoas com os seus produtos, serviços e conteúdos.</p>
                        </div>

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
                                    <p>Aplicativos mobile personalizados para qualquer tipo de negócio, sistema simples e intuitivo para gerenciamento através de um único clique.</p>
                                </div>
                            </div>
                            <div className="item flex">
                                <div><FaShareAlt className="icon" /></div>
                                <div>
                                    <h3 className="title">Gestão de mídias sociais</h3>
                                    <p>Criação, conteúdo, analise e planejamendo das suas páginas nas redes sociais (Facebook e Instagram).</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="image">
                    <motion.img src="/images/services.png" animate={{ z: 100 }} transition={{ type: "spring", fade: 0.5}}/>
                </div>
            </section>

            <section className="home-clients container">
                <Horizontal responsive={responsive} arrows={false}>
                    <div className="client flex flex-centered">
                        <Image 
                            src="/images/clientfive.png"
                            alt="Pampus"
                            width="87"
                            height="50"
                        />
                    </div>
                    <div className="client flex flex-centered">
                        <Image 
                            src="/images/clienttwo.png"
                            alt="Nohar Steak Bar"
                            width="133"
                            height="50"
                        />
                    </div>
                    <div className="client flex flex-centered">
                        <Image 
                            src="/images/clientthree.png"
                            alt="Levitatur"
                            width="96"
                            height="50"
                        />
                    </div>
                    <div className="client flex flex-centered">
                        <Image 
                            src="/images/clientfour.png"
                            alt="AMIB"
                            width="168"
                            height="50"
                        />
                    </div>
                    <div className="client flex flex-centered">
                        <Image 
                            src="/images/clientone.png"
                            alt="AUA News"
                            width="325"
                            height="50"
                        />
                    </div>
                </Horizontal>
            </section>

            <section className="home-portfolio p-box">
                <div className="port-title flex">
                    <div className="box-title">
                        <h4 className="sub-title">Portfólio</h4>
                        <h2 className="title">Usamos a tecnologia para aproximar negócios à pessoas.</h2>
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
                                src="/images/port5.jpg"
                                alt="Cliente 1"
                                layout="responsive"
                                width="570"
                                height="420"
                            />
                        </div>
                        
                        <div className="work">
                            <Image 
                                src="/images/port6.jpg"
                                alt="Cliente 1"
                                layout="responsive"
                                width="570"
                                height="420"
                            />
                        </div>
                        <div className="work">
                            <Image 
                                src="/images/port7.jpg"
                                alt="Cliente 1"
                                layout="responsive"
                                width="570"
                                height="420"
                            />
                        </div>
                    </Horizontal>
                </div>
            </section>

            <section className="home-pricing">
                <div className="pri-title flex">
                    <div className="box-title">
                        <h4 className="sub-title">Pacotes</h4>
                        <h2 className="title">Nós conectamos pessoas!</h2>
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

            <section className="cta p-box">
                <h2 className="title">
                    Algum <span className="yellow">projeto</span> em mente? Vamos bater um papo 
                    e trazer negócio para o 
                    <span className="yellow"> mundo digital!</span>
                </h2>
                <Link href="https://api.whatsapp.com/send?phone=551140406422">
                    <a className="btn btn-blue">Contato</a>
                </Link>
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