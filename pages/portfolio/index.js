import Layout from "../../components/layout"
import Work from "../../components/work"

function Portfolio() {
    return (
        <Layout title="Portfólio | Works Midia">
            <section className="portfolio container">
                <div className="mansory">
                <Work
                        image="/images/site-pampus.png"
                        title="Pampus"
                        type="Desenvolvimento de site"
                        link="portfolio/desenvolvimento-de-site-pampus"
                    />
                    <Work
                        image="/images/site-rsvp.png"
                        title="Levitatur"
                        type="Desenvolvimento de site"
                        link="portfolio/desenvolvimento-de-site-levitatur-rsvp"
                    />
                    <Work
                        image="/images/site-nohar.png"
                        title="Nohar Steak Bar"
                        type="Desenvolvimento de site"
                        link="portfolio/desenvolvimento-de-site-nohar"
                    />
                    <Work
                        image="/images/site-aua.png"
                        title="AUA News"
                        type="Desenvolvimento de site"
                        link="portfolio/desenvolvimento-de-site-aua-news"
                    />
                    <Work
                        image="/images/site-cirurgia.png"
                        title="Curso Hands On em cadáveres"
                        type="Desenvolvimento de site"
                        link="portfolio/desenvolvimento-de-site-cirurgia"
                    />
                    <Work
                        image="/images/aplicativo-cbmi.png"
                        title="CBMI"
                        type="Desenvolvimento de aplicativo"
                        link="portfolio/desenvolvimento-de-aplicativo-cbmi"
                    />
                    <Work
                        image="/images/aplicativo-congresso.png"
                        title="CBMFR 2021"
                        type="Desenvolvimento de aplicativo"
                        link="portfolio/desenvolvimento-de-aplicativo-cbmfr"
                    />
                    <Work
                        image="/images/aplicativo-congresso.png"
                        title="CBMFR 2021"
                        type="Desenvolvimento de aplicativo"
                        link="portfolio/desenvolvimento-de-aplicativo-cbmfr"
                    />
                    <Work
                        image="/images/aplicativo-levitatur.png"
                        title="Levitatur"
                        type="Desenvolvimento de aplicativo"
                        link="portfolio/desenvolvimento-de-aplicativo-levitatur"
                    />
                    <Work
                        image="/images/aplicativo-sbacv.png"
                        title="SBACV"
                        type="Desenvolvimento de aplicativo"
                        link="portfolio/desenvolvimento-de-aplicativo-sbacv"
                    />
                </div>
            </section>
        </Layout>
    )
}

export default Portfolio