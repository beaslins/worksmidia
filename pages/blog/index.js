import Layout from "../../components/layout"
import Post from "../../components/post"

function Blog() {
    return (
        <Layout title="Blog | Works Midia">
            <section className="posts container">
                <div className="grid">
                    <Post 
                        image="/images/menor3.png"
                        title="Como estar proximo ao seu cliente!"
                        author="WORKS MIDIA"
                        date="02 FEV, 2021"
                        link="blog/com-estar-proximo-ao-seu-cliente"
                    />
                    <Post 
                        image="/images/menor4.png"
                        title="Qual a melhor estratégia de vendas?"
                        author="WORKS MIDIA"
                        date="02 FEV, 2021"
                        link="blog/qual-a-melhor-estrategia-de-vendas"
                    />
                    <Post 
                        image="/images/menor2.png"
                        title="Está perdendo vendas e não sabe por quê?"
                        author="WORKS MIDIA"
                        date="02 FEV, 2021"
                        link="blog/esta-perdendo-vendas-e-nao-sabe-por-que"
                    />
                    <Post 
                        image="/images/menor6.png"
                        title="Comprar seguidores no Instagram: Expectativa e Realidade"
                        author="WORKS MIDIA"
                        date="02 FEV, 2021"
                        link="blog/comprar-seguidores-no-instagram-expectativa-e-realidade"
                    />
                    <Post 
                        image="/images/menor5.png"
                        title="Hash o que?"
                        author="WORKS MIDIA"
                        date="02 FEV, 2021"
                        link="blog/hash-o-que"
                    />
                    <Post 
                        image="/images/menor1.png"
                        title="Fui procurar e não achei"
                        author="WORKS MIDIA"
                        date="02 FEV, 2021"
                        link="blog/fui-procurar-e-nao-achei"
                    />
                </div>
            </section>
        </Layout>
    )
}

export default Blog