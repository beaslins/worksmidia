import Layout from "../../components/layout"

import { FaArrowLeft } from 'react-icons/fa';
import Link from "next/link"


function Details() {
    return (
        <Layout title="Portfólio | Works Midia">
            <section className="port-details container">
                <div className="flex">
                    <div className="images">
                        <img src="/images/site-nohar.png"/>
                    </div>
                    <div className="description">
                        <h2>Nohar Steak Bar</h2>
                        <p>Localizado no coração de um dos bairros mais nobres de São Paulo, o Nohar Steak Bar traz sofisticação e atendimento personalizado.</p>
                        <p>Com o website desenvolvido pela Works Midia os usuários tem acessoa à:</p>
                        <ul>
                            <li>História do Restaurtante</li>
                            <li>Reservas</li>
                            <li>Blog</li>
                            <li>Integração com Whatsapp</li>
                            <li>Contato</li>
                        </ul>
                        <p>Entre outros.</p>

                        <p className="sub-title">Cliente</p>
                        <p className="sub-text">Nohar Steak Bar</p>

                        <p className="sub-title">Categoria</p>
                        <p className="sub-text">Desenvolvimento de site</p>
                    </div>
                </div>
                <Link href="/portfolio">
                    <a className="link">
                        <FaArrowLeft></FaArrowLeft>
                        <span>Voltar</span>
                    </a>
                </Link>
            </section>
        </Layout>
    )
}

export default Details