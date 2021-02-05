import Content from "../../components/postContent"

function Post() {
    return (
        <Content 
            title="Hash o que?"
            url="http://localhost:3000/blog/hash-o-que"
            children={
                <div>
                    <img src="/images/maior5.png"/>
                    <h1>Hash o que?</h1>
                    <div>
                        <p>Se bem utilizadas, as hashtags tem um potencial muito grande de <strong>aumentar a visibilidade de suas publicações</strong>, potencializando ainda mais os resultados. Mas para isso você precisa de planejamento e entendimento sobre como funciona o universo das hashtags.</p>
                        <p>Começando pelo conceito básico, afinal, o que é uma hashtag?</p>
                        <p>Hashtag consiste em <strong>uma forma de categorizar conteúdos referentes a um mesmo tópico.</strong></p>
                        <p>Elas servem como etiquetas que contextualizam seus conteúdos publicados no Instagram para o usuário. Saber como usar hashtags no Instagram é muito importante para a sua estratégia.  Apesar de existirem uma série de tratados sobre o assunto na Internet, muitos profissionais ainda cometem erros básicos.</p>
                        <h3>Dicas de como usar hashtag no Instagram</h3>
                        <p>- Não polua sua legenda com #’s</p>
                        <p>O que queremos dizer com “não poluir a legenda”?</p>
                        <p>#Não #Separe #Frases!</p>
                        <p>Se o seu tema é feito de uma frase, não use uma # para separar as palavras.</p>
                        <p>- Tenha coerência</p>
                        <p>Busque pelos temas que tenham relação com a marca e ao que o post está sendo veiculado.</p>
                        <p>Não adianta você inserir uma das hashtags mais usadas no Instagram se o tema delas não encaixa com seu conteúdo.</p>
                        <p>- Crie sua própria hashtag</p>
                        <p>Trate de criar a hashtag da sua marca ou editoria, e comece a espalhar por todas as suas redes sociais, assim, você incentiva seu público a procurar por você de forma mais direta.</p>
                        <p>- Olhe o que a concorrência está usando</p>
                        <p>Não copie! Mas o estudo de concorrência é fundamental em uma estratégia de marketing.</p>
                        <p>– Use hashtag na sua bio</p>
                        <p>Ao criar uma hashtag na bio do Instagram, você consegue contextualizar seu perfil inteiro na rede social, aumentando a assertividade de sua atuação.</p>
                        <p>As hashtags da bio precisam ser mais estratégias e relacionadas ao ramo de atuação da marca.</p>
                        <p>– Não exagere na quantidade de hashtags</p>
                        <p>É importante usar as hashtags com moderação no Instagram. Atualmente já temos provas de que usar muitas hashtags nos posts do feed do Instagram não aumenta o engajamento, pelo contrário.</p>
                    </div>
                </div>
            }
        />
    )
}
export default Post
