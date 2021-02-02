import Layout from "../../components/layout"
import { FaArrowLeft } from 'react-icons/fa';
import Link from "next/link"

function Details() {
    return (
        <Layout title="Portfólio | Works Midia">
            <section className="port-details container">
                <div className="flex">
                    <div className="images">
                        <img src="/images/aplicativo-cbmi.png"/>
                    </div>
                    <div className="description">
                        <h2>CBMI 2019</h2>
                        <p>O maior congresso de medicina intensiva da América Latina, o 24º Congresso Brasileiro de Medicina Intensiva – CBMI, está de volta à Fortaleza e com inscrições abertas. O evento acontece entre os dias 07 a 09 de novembro no Centro de Eventos do Ceará.</p>
                        <p>Com o aplicativo desenvolvido pela Works Midia os usuários tem acessoa à:</p>
                        <ul>
                            <li>Programação do evento</li>
                            <li>Palestrantes</li>
                            <li>Comissões</li>
                            <li>Rota via gps para o local do evento</li>
                            <li>Planta do evento</li>
                            <li>Patrocinadores</li>
                            <li>Avisos e Notícias através de mensagens de push</li>
                            <li>Informações Turisticas</li>
                        </ul>
                        <p>Entre outros.</p>

                        <p className="sub-title">Cliente</p>
                        <p className="sub-text">CBMI</p>

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