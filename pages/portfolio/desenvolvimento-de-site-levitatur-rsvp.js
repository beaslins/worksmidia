import Layout from "../../components/layout"

function Details() {
    return (
        <Layout title="Portfólio | Works Midia">
            <section className="port-details container">
                <div className="flex">
                    <div className="images">
                        <img src="/images/site-rsvp.png"/>
                    </div>
                    <div className="description">
                        <h2>Levitatur</h2>
                        <p>Através do Sistema de RSVP Levitatur você pode enviar convites automatizados, acompanhar em tempo real as respostas de seus convidados, gerar relatórios de confirmação e muito mais, além de ser totalmente online e 100% personalizável.</p>
                        <p>Com o website desenvolvido pela Works Midia os usuários tem acessoa à:</p>
                        <ul>
                            <li>Site com informações sobre a empresa</li>
                            <li>Funcionalidades da Plataforma</li>
                            <li>Premiações</li>
                            <li>Vídeo de apresentação</li>
                            <li>Contatos</li>
                        </ul>
                        <p>Entre outros.</p>

                        <p className="sub-title">Cliente</p>
                        <p className="sub-text">Pampus</p>

                        <p className="sub-title">Categoria</p>
                        <p className="sub-text">Desenvolvimento de site</p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Details