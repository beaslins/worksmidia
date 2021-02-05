import Layout from "../components/layout"
import style from "../public/styles/post.module.css"
import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    PinterestShareButton,
    RedditShareButton,
    EmailIcon,
    FacebookIcon,
    LinkedinIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsappIcon,
    RedditIcon,
    PinterestIcon,
  } from "react-share";

import InstagramFeed from 'react-ig-feed';
import 'react-ig-feed/dist/index.css'

export default function Post({title, url, children}) {
    return (
        <Layout title={title}>
            <section className={style.postContent}>
                <article>
                    {children}
                </article>
                <aside>
                    <h4 className="sub-title">Compartilhe esse artigo</h4>
                    <div className={style.shareButtons}>
                        <div>
                            <FacebookShareButton url={url}>
                                <FacebookIcon />
                            </FacebookShareButton>
                            <LinkedinShareButton url={url}>
                                <LinkedinIcon />
                            </LinkedinShareButton>
                            <TelegramShareButton url={url}>
                                <TelegramIcon />
                            </TelegramShareButton>
                        </div>
                        <div>
                            <EmailShareButton url={url}>
                                <EmailIcon />
                            </EmailShareButton>
                            <TwitterShareButton url={url}>
                                <TwitterIcon />
                            </TwitterShareButton>
                            <WhatsappShareButton url={url}>
                                <WhatsappIcon />
                            </WhatsappShareButton>
                        </div>
                    </div>
                    <div className={style.recentPosts}>
                        {/**<h4 className="sub-title">Artigos recentes</h4>*/}
                    </div>
                    <div className={style.instagramFeed}>
                        <h4 className="sub-title">Fique por dentro</h4>
                        <InstagramFeed token="IGQVJVOTJMMV9RVHhRSUtwaXRaUnFzcHRJcVlMUWFFbjNwVVZANX1RpTDdibWd4amkyTlM0ZAEE4d2U1T3BmR1RIZAzNZAVUFhRVFPUWt1ZAlZAScTFuS3hGZAndZAeXZAsdHFzcU5URlBmMTFKcEVfaVJCdi0wVwZDZD"  counter="9"/>
                    </div>
                </aside>
            </section>
        </Layout>
    )
}