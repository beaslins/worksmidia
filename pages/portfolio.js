import Layout from "../components/layout"
import Work from "../components/work"

function Portfolio() {
    return (
        <Layout title="Portfólio | Works Midia">
            <section className="portfolio container">
                <div className="mansory">
                    <Work
                        image="/images/w1.jpg"
                        title="Branding Abstract"
                        type="Branding"
                        link="portfolio/branding-abstract"
                    />
                    <Work
                        image="/images/w2.jpg"
                        title="ABMFR"
                        type="Site"
                        link="portfolio/branding-abstract"
                    />
                    <Work
                        image="/images/w3.jpg"
                        title="CBMI"
                        type="Aplicativo"
                        link="portfolio/branding-abstract"
                    />
                    <Work
                        image="/images/w4.jpg"
                        title="Branding Abstract"
                        type="Branding"
                        link="portfolio/branding-abstract"
                    />
                    <Work
                        image="/images/w5.jpg"
                        title="Branding Abstract"
                        type="Branding"
                        link="portfolio/branding-abstract"
                    />
                    <Work
                        image="/images/w6.jpg"
                        title="Branding Abstract"
                        type="Branding"
                        link="portfolio/branding-abstract"
                    />
                    <Work
                        image="/images/w7.jpg"
                        title="Branding Abstract"
                        type="Branding"
                        link="portfolio/branding-abstract"
                    />
                </div>
            </section>
        </Layout>
    )
}

export default Portfolio