import Content from "../../components/postContent"

function Post() {
    return (
        <Content 
            title="Fui procurar e não achei"
            url="http://localhost:3000/blog/fui-procurar-e-nao-achei"
            children={
                <div>
                    <img src="/images/bheader.jpg"/>
                    <h1>Fui procurar e não achei</h1>
                    <div>
                        <p>As pessoas irão procurar a sua empresa no Google e serão direcionadas ao seu site, e ops você não tem um ainda?</p>
                        <h3>Conheça 03 Motivos para sua empresa ter um site</h3>
                        <p>1 - A maioria das pessoas ao ouvir o nome de uma empresa, produto ou serviço procuram informações no google, caso não encontrem um site com informações de qualidade, o seu negócio passa a ‘’não existir’’.</p>
                        <p>2 - Aumento de alcance da sua marca, sem um site a sua marca fica restrita a um grupo de menor de possíveis clientes, com o site seu alcance não tem limites e nem fronteiras</p>
                        <p>3 - Ter um site próprio é ter uma presença digital mínima de que sua empresa precisa. Os clientes encontram e conhecem a sua empresa de forma rápida, e permite um alcance ao novo perfil de público digital.</p>

                        <h3>Conheça alguns tipos de sites:</h3>
                        <p>Site: Tem como objetivo estruturar uma hierarquia para que todo conteúdo seja acessado com facilidade, é um espaço básico da informação.</p>
                        <p>Portal: Tem como objetivo compartilhar conteúdos diversos para 100% do foco em seu público, e podem ser organizados por variados segmentos.</p>
                        <p>Institucional: A apresentação de todas as informações importantes sobre a empresa, promovendo a sua marca, produtos, ações sociais, e políticas da empresa.</p>
                        <p>Landing Page:  Muito usadas em campanhas de Marketing digital, landing page é uma página que possui os elementos voltados à conversão do visitante em Leads, e oportunidades de venda.</p>
                        <p>Loja Virtual: É um site que permite a divulgação e venda do seu produto ou serviço, tudo ocorre de forma automática e o cliente conduz o processo sozinho, desde a escolha do produto ou serviço até o pagamento final.</p>
                    </div>
                </div>
            }
        />
    )
}
export default Post