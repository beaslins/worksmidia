import Content from "../../components/postContent"

function Post() {
    return (
        <Content 
            title="Está perdendo vendas e não sabe por quê?"
            url="http://localhost:3000/blog/esta-perdendo-vendas-e-nao-sabe-por-que"
            children={
                <div>
                    <img src="/images/bheader.jpg"/>
                    <h1>Está perdendo vendas e não sabe por quê?</h1>
                    <div>
                        <p>Muitas empresas sofrem por perderem vendas e não sabem o porquê e ficam analisando toda a empresa e um simples fato de o seu site (seu cartão de visitas na internet) estar lento pode fazer com você perca não só uma venda, mas sim um possível cliente e ainda mais perca ele para sempre.</p>
                        <p>Quantas vezes você abandonou um site pela sua lentidão e só de pensar em voltar já desistiu? Isso acontece com muitas pessoas!</p>
                        <p>Segundo Neil Patel, 25% dos visitantes abandonam um site se ele demorar mais de 4 segundos para carregar</p>
                        <p>Portanto, se você quer aumentar o faturamento do seu e-commerce, é fundamental investir em formas de melhorar a experiência do usuário no seu site. O tempo de carregamento é uma delas.</p>
                        <p>Atualmente, é fundamental garantir que o usuário tenha uma experiência positiva ao entrar em contato com a sua empresa, seja para realizar uma compra, seja para tirar uma dúvida. Caso ao contrário, basta uma experiência negativa para que ele abandone o seu site e vá em busca dos produtos dos seus principais concorrentes.</p>
                        <p>Veja porque um tempo de carregamento ruim pode prejudicar a venda:</p>
                        <h3>Aumenta a taxa de abandono</h3>
                        <p>De acordo com um levantamento realizado pelo Google, um acréscimo de até 10 segundos no tempo de carregamento, por exemplo, aumenta em 123% a possibilidade de abandono. Ou seja, o cliente não tem paciência para esperar.</p>
                        <h3>Reduz a sua taxa de conversão</h3>
                        <p>Dados do Kissmetrics apontam que um segundo a mais no tempo de resposta de uma página representa uma redução em 7% nas conversões de uma venda on line.</p>
                        <h3>Atrapalha a fidelização de clientes</h3>
                        <p>Uma pesquisa da Akamai indica que 79% dos usuários não realizam novas compras após uma experiência negativa com o tempo de carregamento de uma página.</p>
                        <p>Ainda refletindo sobre ter um site de qualidade?</p>
                    </div>
                </div>
            }
        />
    )
}
export default Post