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
                        <p>Há mais de 10 anos a Works Midia conecta pessoas através da tecnologia!</p> 
                        <p>Nosso objetivo é gerar transformação em nossos clientes com planejamento de marketing e inovação em tecnologia.</p>
                        <p>Nossos projetos são pautados em sempre respeitar a alma do negócio de nossos clientes e agregar conhecimento com o que temos de melhor.</p>
                        <p>Atuamos na criação de sites, desenvolvimento de aplicativos e gestão de marketing digital.</p>
                        <p>Nosso time é formado por especialistas em programação, designers e gestores de conteúdo.</p>
                        <p>Atuamos na criação de sites, desenvolvimento de aplicativos e gestão de marketing digital.</p>
                        
                        <p>Algum projeto em mente? Agende agora uma reunião com a nossa equipe e vamos levar o seu negócio para o mundo digital!</p>

                        <div className="flex ctas">
                            <Link href="https://api.whatsapp.com/send?phone=551140406422">
                                <a className="btn btn-blue flex"><FaWhatsapp /> <span>Agendar reunião</span></a>
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
            <section className="mvv container">
                <div>
                    <h2 className="title">Missão</h2>
                    <p>Nossa missão é cuidar de cada projeto de forma única, agregando valor através de nosso conhecimento e experiência, proporcionando aos nossos clientes um serviço de qualidade e aos nossos colaboradores um ambiente jovem com expressão.</p>
                </div>
                <div>
                    <h2 className="title">Visão</h2>
                    <p>Ser reconhecido pelos nossos clientes como um parceiro que gera transformação positiva ao negócio até 2025.</p>
                </div>
                <div>
                    <h2 className="title">Valores</h2>
                    <p></p>
                </div>
            </section>
        </Layout>
    )
}

export default Sobre