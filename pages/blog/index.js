import Layout from "../../components/layout"
import Post from "../../components/post"

function Blog() {
    return (
        <Layout title="Blog | Works Midia">
            <section className="posts container">
                <div className="grid">
                    <Post 
                        image="/images/b1.jpg"
                        title="Como estar proximo ao seu cliente!"
                        author="WORKS MIDIA"
                        date="02 FEV, 2021"
                        link="blog/com-estar-proximo-ao-seu-cliente"
                    />
                    <Post 
                        image="/images/b2.jpg"
                        title="Qual a melhor estratégia de vendas?"
                        author="WORKS MIDIA"
                        date="02 FEV, 2021"
                        link="blog/qual-a-melhor-estrategia-de-vendas"
                    />
                    <Post 
                        image="/images/b3.jpg"
                        title="Está perdendo vendas e não sabe por quê?"
                        author="WORKS MIDIA"
                        date="02 FEV, 2021"
                        link="blog/esta-perdendo-vendas-e-nao-sabe-por-que"
                    />
                    <Post 
                        image="/images/b4.jpg"
                        title="Comprar seguidores no Instagram: Expectativa e Realidade"
                        author="WORKS MIDIA"
                        date="02 FEV, 2021"
                        link="blog/comprar-seguidores-no-instagram-expectativa-e-realidade"
                    />
                    <Post 
                        image="/images/b5.jpg"
                        title="Hash o que?"
                        author="WORKS MIDIA"
                        date="02 FEV, 2021"
                        link="blog/hash-o-que"
                    />
                    <Post 
                        image="/images/b6.jpg"
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