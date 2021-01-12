import Link from 'next/link'
import Layout from "../components/layout"
import Testmonials from "../components/testmonials"

function Sobre() {
    return (
        <Layout title="Sobre | Works Midia">
            <section className="about flex">
                <div className="video">
                    <img src="/images/home-image.png" />
                </div>
                <div className="information">
                    <div className="box-title">
                        <h4 className="sub-title">Sobre</h4>
                        <h1 className="title">Don’t Hesitate to contact with us for any information or inquiries</h1>
                        <p>Why money's in that office, right? If she start giving means some bullet about ain't there, and we got to go placing else and get it. Why not can money's in that office, right? If she start giving means some bullshit.</p>
                        <p>Why money's in that office, right? If she start giving means some bullet about ain't there, and we got to go placing else and get it. Why not can money's in that office, right? If she start giving means some bullshit.</p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Sobre