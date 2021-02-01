import Link from 'next/link'
import Image from 'next/image'

import style from "../public/styles/service.module.css"

export default function ServiceRight({image, subtitle, title, description}) {
    return (
        <div className={style.serviceRight}>
            <div className={style.textRight}>
                <h4 className="sub-title">{subtitle}</h4>
                <h2 className={style.title}>{title}</h2>
                <p className={style.description}>{description}</p>
            </div>
            <div className={style.imageRight}>
                <img src={image} alt={title} title={title}/>
            </div>
        </div>
    )
}