import Layout from "../../components/layout"

function Details() {
    return (
        <Layout title="Portfólio | Works Midia">
            <section className="port-details container">
                <div className="flex">
                    <div className="images">
                        <img src="/images/aplicativo-congresso.png"/>
                    </div>
                    <div className="description">
                        <h2>CBMFR 2021</h2>
                        <p>XXVII Congresso Brasileiro de Medicina Física e Reabilitação 2021. Evento de grande importância que acontece bienalmente, organizado pela Associação Brasileira de Medicina Física e Reabilitação, será de 07 a 10 de abril de 2021, no Hotel Bourbon Cataratas.</p>
                        <p>Com o plicativo desenvolvido pela Works Midia os usuários tem acessoa à:</p>
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
                        <p className="sub-text">CBMFR</p>

                        <p className="sub-title">Categoria</p>
                        <p className="sub-text">Desenvolvimento de aplicativo</p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Details