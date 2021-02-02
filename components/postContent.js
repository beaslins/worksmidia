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
                    <div className={style.instagramFeed}></div>
                </aside>
            </section>
        </Layout>
    )
}