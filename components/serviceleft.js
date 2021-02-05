import Link from 'next/link'


import style from "../public/styles/service.module.css"

export default function ServiceLeft({image, subtitle, title, description}) {
    return (
        <div className={style.serviceLeft}>
            <div className={style.imageLeft}>
                <img src={image} alt={title} title={title}/>
            </div>
            <div className={style.textLeft}>
                <h4 className="sub-title">{subtitle}</h4>
                <h2 className={style.title}>{title}</h2>
                <p className={style.description}>{description}</p>
            </div>
        </div>
    )
}