import Layout from "../../components/layout"

function Details() {
    return (
        <Layout title="Portfólio | Works Midia">
            <section className="port-details container">
                <div className="flex">
                    <div className="images">
                        <img src="/images/site-pampus.png"/>
                    </div>
                    <div className="description">
                        <h2>Pampus</h2>
                        <p>PAMPUS significa Pan American Pediatric Urology Surgeons e foi formado a partir de um grupo de amigos do continente americano (EUA e Brasil) visando fazer da troca de experiências médicas em urologia pediátrica uma oportunidade de convivência em família e de aproximação e amizade.</p>
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