import Layout from "../../components/layout"

function Details() {
    return (
        <Layout title="Portfólio | Works Midia">
            <section className="port-details container">
                <div className="flex">
                    <div className="images">
                        <img src="/images/p1.jpg"/>
                        <img src="/images/p2.jpg"/>
                        <img src="/images/p3.jpg"/>
                    </div>
                    <div className="description">
                        <h2>Costa Rica Coffe Rebranding</h2>
                        <p>Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends.</p>
                        <p>Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends.</p>

                        <p className="sub-title">Cliente</p>
                        <p className="sub-text">ABMFR</p>

                        <p className="sub-title">Categoria</p>
                        <p className="sub-text">Site</p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Details