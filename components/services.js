import Link from 'next/link'
import Image from 'next/image'

import style from "../public/styles/service.module.css"

export default function Service({icon, title, description}) {
    return (
        <div className={style.service}>
            <div className={style.icon}>
                {icon}
            </div>
            <div className={style.text}>
                <h2 className={style.title}>{title}</h2>
                <p className={style.description}>{description}</p>
            </div>
        </div>
    )
}