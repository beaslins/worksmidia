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
                <div className="ser-list grid">
                    <Service 
                        icon={<FaLightbulb />}
                        title="Trend Design" 
                        description="Why money's in that office, right? If she start giving means some bullet about ain't there."
                    />
                    <Service 
                        icon={<FaLightbulb />}
                        title="Branding" 
                        description="Why money's in that office, right? If she start giving means some bullet about ain't there."
                    />
                    <Service 
                        icon={<FaLightbulb />}
                        title="Product Design" 
                        description="Why money's in that office, right? If she start giving means some bullet about ain't there."
                    />
                    <Service 
                        icon={<FaLightbulb />}
                        title="Animation" 
                        description="Why money's in that office, right? If she start giving means some bullet about ain't there."
                    />
                </div>
            </section>
            <section className="ser-pricing p-box container">
                <div className="pri-title flex">
                    <div className="box-title">
                        <h4 className="sub-title">Pacotes</h4>
                        <h2 className="title">Stop selling. Start helping.</h2>
                    </div>
                </div>
                <div className="list">
                    <div className="item">
                        <div className="header">Pacote X</div>
                        <ul>
                            <li className="service">Strategic Alliance</li>
                            <li className="service">Growth Expansion</li>
                            <li className="service">Business Planning</li>
                            <li className="service">Contract Negotiation</li>
                            <li className="service">Market Positioning</li>
                        </ul>
                    </div>
                    <div className="item active">
                        <div className="header">Pacote X</div>
                        <ul>
                            <li className="service">Strategic Alliance</li>
                            <li className="service">Growth Expansion</li>
                            <li className="service">Business Planning</li>
                            <li className="service">Contract Negotiation</li>
                            <li className="service">Market Positioning</li>
                        </ul>
                    </div>
                    <div className="item">
                        <div className="header">Pacote X</div>
                        <ul>
                            <li className="service">Strategic Alliance</li>
                            <li className="service">Growth Expansion</li>
                            <li className="service">Business Planning</li>
                            <li className="service">Contract Negotiation</li>
                            <li className="service">Market Positioning</li>
                        </ul>
                    </div>
                    <div className="item">
                        <div className="header">Pacote X</div>
                        <ul>
                            <li className="service">Strategic Alliance</li>
                            <li className="service">Growth Expansion</li>
                            <li className="service">Business Planning</li>
                            <li className="service">Contract Negotiation</li>
                            <li className="service">Market Positioning</li>
                        </ul>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Servicos