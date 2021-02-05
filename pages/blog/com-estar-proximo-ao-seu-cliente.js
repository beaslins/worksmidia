import Content from "../../components/postContent"

function Post() {
    return (
        <Content 
            title="Como estar proximo ao seu cliente!"
            url="http://localhost:3000/blog/com-estar-proximo-ao-seu-cliente"
            children={
                <div>
                    <img src="/images/maior3.png"/>
                    <h1>Como estar proximo ao seu cliente!</h1>
                    <div>
                        <p>Afinal, como o seu cliente quer ser tratado agora? Para entender isso, veja como o Marketing demonstra a mudança de tratamento e comunicação.</p>
                        <p>O marketing 4.0 é uma realidade que a sua marca deve encarar o mais rápido possível. Esse novo cenário traz desafios e torna mais complexo o relacionamento com o cliente. É necessário estabelecer conexões profundas, e manter o foco nas necessidades do ser humano.</p>
                        <p>O conceito de marketing 4.0 foi abordado por Philip Kotler, uma das maiores referências de marketing do mundo, vamos entender em um breve resumo:</p>
                        <p>Marketing 1.0 - Marcado pela era industrial, tinha foco exclusivo no produto.</p>
                        <p>Marketing 2.0 - Surgiu com a era da informação. Consumidores bem informados, podendo comparar preços e características de produtos. É por essa razão que surgiu o famoso ditado “o cliente é rei”.</p>
                        <p>Marketing 3.0 - Nesse período, o foco exclusivo das marcas foi o ser humano por meio de uma abordagem humanizada. Em resumo houve a necessidade de estabelecer uma conexão emocional com o cliente, mostrando o valor do produto para a sua vida.</p>
                        <p>Marketing 4.0 - Aprofundou as características do 3.0, porem mais humanizado, e as empresas que não adotarem essa estratégia, com certeza não se manterão no mercado.</p>
                        <p>Estamos na era pós-digital, em que as novas tecnologias e a internet moldam nossos comportamentos cada vez mais. não existe mais uma separação entre offline e online. O foco total é no ser humano e no futuro.</p>
                    </div>
                </div>
            }
        />
    )
}
export default Post