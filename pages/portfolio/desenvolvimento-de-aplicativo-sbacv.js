import Layout from "../../components/layout"
import { FaArrowLeft } from 'react-icons/fa';
import Link from "next/link"

function Details() {
    return (
        <Layout title="Portfólio | Works Midia">
            <section className="port-details container">
                <div className="flex">
                    <div className="images">
                        <img src="/images/aplicativo-sbacv.png"/>
                    </div>
                    <div className="description">
                        <h2>SBACV na sua mão</h2>
                        <p>A SBACV ( Sociedade Brasileira de Angiologia e de Cirurgia Vascular) é uma associação de sociedades regionais, sem fins lucrativos, representativa de médicos que atuam na área da angiologia, cirurgia vascular, procedimento endovascular e ecografia vascular.</p>
                        <p>Com o aplicativo desenvolvido pela Works Midia os usuários tem acessoa à:</p>
                        <ul>
                            <li>História da entidade e sua Diretoria</li>
                            <li>Vídeos diversos promovidos pela Associação</li>
                            <li>Agenda de Eventos</li>
                            <li>Redes Sociais</li>
                            <li>Avisos e Notícias através de mensagens de push</li>
                            <li>Dados das Sociedades Regionais</li>
                            <li>Contatos</li>
                            <li>Leitor de Qr Code</li>
                            <li>Clube de benefócios</li>
                        </ul>
                        <p>Entre outros.</p>

                        <p className="sub-title">Cliente</p>
                        <p className="sub-text">SBACV</p>

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