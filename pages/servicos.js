import Layout from "../components/layout"

import ServiceLeft from "../components/serviceleft"
import ServiceRight from "../components/serviceright"

import { FaLightbulb } from 'react-icons/fa';

function Servicos() {
    return (
        <Layout title="Serviços | Works Midia">
            <section className="services">
                <div className="box-title container">
                    <h4 className="sub-title">Serviços</h4>
                    <h1 className="title">Soluções arrojadas, <span className="block">de alto padrão e fácil acesso</span></h1>
                </div>
                <div className="services-list">
                    <ServiceLeft 
                        image="/images/desenvolvimento-de-sites.jpeg"
                        subtitle="Desenvolvimento"
                        title="Desenvolvimento de Site"
                        description={<div><p>Desenvolvimento de sites para todos os tipos de negócios, desde sites corporativos até e-commerce para venda online, com tecnologia moderna e layouts responsivos que se adaptam a qualquer tamanho de tela, seja acessando pelo celular, computador ou tabletes.</p><p>Nossos sites são totalmente administráveis, atualize o site a qualquer momento através de login e senha e sem a necessidade de conhecimento técnico.</p><p>Acompanhe a evolução do seu site através de relatórios mensais com número de visitas no site, páginas mais acessadas, região demográfica dos acessos e dispositivos que os usuários mais usam (computador ou celular).</p></div>}
                    />
                    <ServiceRight 
                        image="/images/aplicativos.jpeg"
                        subtitle="Desenvolvimento"
                        title="Criação de aplicativos mobile"
                        description={<div><p>Aplicativos mobile personalizados, não importa o tipo de negócio, nós temos a melhor solução. São aplicativos para eventos, restaurantes, empresas corporativas e entre outros.</p><p>Gerencie e atualize seu aplicativo de forma simples e intuitiva através de um painel administrativo sem a necessidade de conhecimento técnico.</p><p>O seu aplicativo será publicado nas Apple Store e Google Play de acordo com as diretrizes e aprovação de cada plataforma.</p></div>}
                    />
                    <ServiceLeft 
                        image="/images/midias-sociais.jpeg"
                        subtitle="Marketing Digital"
                        title="Gestão de mídias sociais"
                        description={
                            <div>
                                <p>Não é novidade para ninguém que as redes sociais devem fazer parte da estratégia de qualquer empresa, independentemente do tipo de segmento e tamanho. Em 2020 com a pandemia o papel das redes sociais ficou ainda mais presente na vida das pessoas, com o distanciamento social as plataformas fizeram o papel de nos manter conectados, mesmo distantes.</p>
                                <p>Segundo a pesquisa da Kantar, as redes sociais tiveram um crescimento de uso de 40% durante a pandemia. O Facebook tem cerca de 2,7 bilhões de usuários e o Instagram 1,1 bilhões de usuário, ou seja, grande parte da população mundial está conectada em uma dessas plataformas.</p>
                                <p>Sua empresa não pode ficar fora desse crescimento. Veja como a Works Midia pode ajudar a sua empresa ter presença no mundo digital:</p>
                                <ul>
                                    <li>Criação e configuração das páginas nas redes sociais</li>
                                    <li>Planejamento</li>
                                    <li>Análise dos seus principais concorrentes</li>
                                    <li>Criação de artes para redes sociais com tamanhos personalizados de acordo com cada perfil</li>
                                    <li>Análise de resultados das ações através de relatórios semanais</li>
                                    <li>Criação e configuração de catálogos de produtos no Facebook e Instagram</li>
                                    <li>Criação e Gestão de anúncios no Facebook e no instagram com criação de texto, imagem, definição de público, análise de investimento e relatórios de resultado</li>
                                </ul>
                            </div>
                        }
                    />
                    <ServiceRight 
                        image="/images/email-marketing.jpeg"
                        subtitle="Marketing Digital"
                        title="Criação e envio de e-mail marketing"
                        description={
                            <div>
                                <p>Email marketing é uma das principais estratégias de Marketing Digital. É um canal direto de comunicação com o seu público, que você pode usar para estreitar o relacionamento, nutrir leads e gerar vendas.</p>
                                <p>O que fazemos:</p>
                                <ul>
                                    <li>Criação de e-mail marketing personalizado de acordo com as suas necessidades</li>
                                    <li>Criação em jpg e envio em html</li>
                                    <li>Gestão de mailing</li>
                                    <li>Relatórios de abertura de e-mail marketing, número de cliques e erros</li>
                                </ul>
                            </div>
                        }
                    />
                    <ServiceLeft 
                        image="/images/google.jpeg"
                        subtitle="Marketing Digital"
                        title="Criação e gestão de anúncios para Google Adwords"
                        description={
                            <div>
                                <p>É no Google que as pessoas pesquisam o que fazer, aonde ir e o que comprar. Seu anúncio pode ser exibido no maior canal de pesquisa do mundo no momento exato em que uma pessoa estiver pesquisando produtos e serviços como os seus. Seja no computador ou no dispositivo móvel, um anúncio exibido no momento certo pode transformar as pessoas em clientes valiosos.</p>
                                <p>O que fazemos:</p>
                                <ul>
                                    <li>Criação de texto e imagem para anúncio</li>
                                    <li>Definição de público</li>
                                    <li>Definição de palavras chaves</li>
                                    <li>Análise de investimento</li>
                                </ul>
                            </div>
                        }
                    />
                </div>
            </section>
        </Layout>
    )
}

export default Servicos