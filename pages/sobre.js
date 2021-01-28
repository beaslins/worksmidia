import Link from 'next/link'
import Layout from "../components/layout"
import Testmonials from "../components/testmonials"

import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


function Sobre() {
    return (
        <Layout title="Sobre | Works Midia">
            <section className="about flex">
                <div className="video">
                    <img src="/images/home-image.png" />
                </div>
                <div className="information">
                    <div className="box-title">
                        <h4 className="sub-title">Sobre</h4>
                        <h1 className="title">Works Midia <span className="block yellow">Conectando pessoas através de tecnologia</span></h1>
                        <p>A Works Mídia é uma empresa de tecnologia e marketing que tem como objetivo principal levar os nossos clientes para o mundo digital.</p> 
                        <p>Conectar tecnologia de ponta a pessoas de forma intuitiva e dinâmica, criando experiência e engajamento do público-alvo com a sua marca.</p>
                        <p>Nosso time é formado por especialistas em programação, designers e gestores de conteúdo.</p>
                        <p>Atuamos na criação de sites, desenvolvimento de aplicativos e gestão de marketing digital.</p>
                        
                        <p>Algum projeto em mente? Agende agora uma reunião com a nossa equipe e vamos levar o seu negócio para o mundo digital!</p>

                        <div className="flex ctas">
                            <Link href="https://api.whatsapp.com/send?phone=551140406422">
                                <a className="btn btn-blue flex"><FaWhatsapp /> <span>Agendar uma reunião</span></a>
                            </Link>
                            <Link href="/servicos">
                                <a className="btn btn-yellow ml-2">Serviços</a>
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
            </section>
        </Layout>
    )
}

export default Sobre