import Link from 'next/link'
import Image from 'next/image'

import style from "../public/styles/post.module.css"

export default function Post({image, title, author, date, link}) {
    return (
        <div className={style.post}>
            <Link href={link}>
                <a className={style.link}>
                    <img src={image} />
                    <div className={style.details}>
                        <h2 className={style.title}>{title}</h2>
                        <p>
                            <span className={style.date}>{date}</span>
                            <span className={style.author}>Por {author}</span>
                        </p>
                    </div>
                </a>
            </Link>
        </div>
    )
}