import Layout from "../../components/layout"
import { FaArrowLeft } from 'react-icons/fa';
import Link from "next/link"

function Details() {
    return (
        <Layout title="Portfólio | Works Midia">
            <section className="port-details container">
                <div className="flex">
                    <div className="images">
                        <img src="/images/site-cirurgia.png"/>
                    </div>
                    <div className="description">
                        <h2>Curso Hands On em cadáveres</h2>
                        <p>Com o website desenvolvido pela Works Midia os usuários tem acessoa à:</p>
                        <ul>
                            <li>Site Multilingue</li>
                            <li>Programação do evento</li>
                            <li>Sobre o Evento</li>
                            <li>Local do evento</li>
                            <li>Integração com Whatsapp</li>
                        </ul>
                        <p>Entre outros.</p>

                        <p className="sub-title">Cliente</p>
                        <p className="sub-text">Curso Hands On em cadáveres</p>

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