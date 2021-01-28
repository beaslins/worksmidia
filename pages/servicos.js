import Layout from "../components/layout"
import Service from "../components/services"

import { FaLightbulb } from 'react-icons/fa';

function Servicos() {
    return (
        <Layout title="Serviços | Works Midia">
            <section className="services container">
                <div className="box-title">
                    <h4 className="sub-title">Serviços</h4>
                    <h1 className="title">Content marketing is a <span className="block">commitment</span></h1>
                </div>

                <div className="service">
                    <h2 className="title">Gestão de redes sociais</h2>
                    <p>Não é novidade para ninguém que as redes sociais devem fazer parte da estratégia de qualquer empresa, independentemente do tipo de segmento e tamanho. Em 2020 com a pandemia o papel das redes sociais ficou ainda mais presente na vida das pessoas, com o distanciamento social as plataformas fizeram o papel de nos manter conectados, mesmo distantes.</p>
                    <p>Segundo a pesquisa da Kantar, as redes sociais tiveram um crescimento de uso de 40% durante a pandemia. O Facebook tem cerca de 2,7 bilhões de usuários e o Instagram 1,1 bilhões de usuário, ou seja, grande parte da população mundial está conectada em uma dessas plataformas.</p>
                    <p>Sua empresa não pode ficar fora desse crescimento. Veja como a Works Midia pode ajudar a sua empresa ter presença no mundo digital:</p>
                </div>
                <div className="ser-list grid">
                    <Service 
                        icon={<FaLightbulb />} 
                        description="Criação e configuração das páginas nas redes sociais"
                    />
                    <Service 
                        icon={<FaLightbulb />} 
                        description="Planejamento"
                    />
                    <Service 
                        icon={<FaLightbulb />}
                        description="Análise dos seus principais concorrentes;"
                    />
                    <Service 
                        icon={<FaLightbulb />}
                        description="Criação de artes para redes sociais com tamanhos personalizados de acordo com cada perfil;"
                    />
                </div>
            </section>
        </Layout>
    )
}

export default Servicos