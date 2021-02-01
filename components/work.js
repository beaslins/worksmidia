import Link from 'next/link'
import Image from 'next/image'

import style from "../public/styles/work.module.css"

export default function Work({image, title, type, link}) {
    return (
        <div className={style.work}>
            <Link href={link}>
                <a className={style.link}>
                    <img src={image} title={title}/>
                    <div className={style.description}>
                        <div className={style.border}>
                            <h2 className={style.title}>{title}</h2>
                            <p className={style.type}>{type}</p>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    )
}