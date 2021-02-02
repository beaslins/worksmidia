import Layout from "../../components/layout"
import { FaArrowLeft } from 'react-icons/fa';
import Link from "next/link"

function Details() {
    return (
        <Layout title="Portfólio | Works Midia">
            <section className="port-details container">
                <div className="flex">
                    <div className="images">
                        <img src="/images/aplicativo-levitatur.png"/>
                    </div>
                    <div className="description">
                        <h2>Levitatur Viagens</h2>
                        <p>A Levitatur é uma agência que conta com profissionais com mais de 25 anos de experiência em turismo e atua no segmento Viagens Corporativas, Eventos e Lazer. Ganhadora de 14 troféus do Prêmio Caio (Oscar dos Eventos).</p>
                        <p>Com o aplicativo desenvolvido pela Works Midia os usuários tem acessoa à:</p>
                        <ul>
                            <li>História da agência</li>
                            <li>Pacotes de viagem</li>
                            <li>Agenda de Eventos</li>
                            <li>Redes Sociais</li>
                            <li>Avisos e Notícias através de mensagens de push</li>
                            <li>Blog com dicas</li>
                            <li>Contatos</li>
                            <li>Leitor de Qr Code</li>
                        </ul>
                        <p>Entre outros.</p>

                        <p className="sub-title">Cliente</p>
                        <p className="sub-text">Levitatur</p>

                        <p className="sub-title">Categoria</p>
                        <p className="sub-text">Desenvolvimento de aplicativo</p>
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