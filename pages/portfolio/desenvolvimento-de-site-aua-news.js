import Layout from "../../components/layout"

function Details() {
    return (
        <Layout title="Portfólio | Works Midia">
            <section className="port-details container">
                <div className="flex">
                    <div className="images">
                        <img src="/images/site-aua.png"/>
                    </div>
                    <div className="description">
                        <h2>Aua News</h2>
                        <p>A AUA News é a revista oficial da American Urological Association (AUA) que visa informar o leitor com vários resumos de publicações científicas recentes e também comunicar com mensagens de “experts” internacionais.</p>
                        <p>Com o website desenvolvido pela Works Midia os usuários tem acessoa à:</p>
                        <ul>
                            <li>História</li>
                            <li>Revista para download</li>
                            <li>Blog</li>
                            <li>Apoiadores</li>
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