import Link from 'next/link'
import Image from 'next/image'

import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import style from "../public/styles/contact.module.css"

export default function Contact() {
    return (
        <>
            <section className={style.contact}>
                <div className={style.information}>
                    <div className={style.boxTitle}>
                        <h4 className="sub-title">Contato</h4>
                        <h1 className="title">Don’t Hesitate to contact with us for any information or inquiries</h1>
                        <p>32 Box Gracia Park Du Guel, Barcelona, Espania</p>
                        <p className="phone">11 0 0000 - 0000</p>
                        <Link href="mailto:contato@worksmidia.com.br">
                            <a className="link">contato@worksmidia.com.br</a>
                        </Link>
                        <div className={style.social}>
                            <Link href="" target="_blank">
                                <a><FaFacebookF className="icon" /></a>
                            </Link>
                            <Link href="" target="_blank">
                                <a><FaInstagram className="icon" /></a>
                            </Link>
                            <Link href="" target="_blank">
                                <a><FaLinkedinIn className="icon" /></a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={style.contForm}>
                    <form>
                        <div className={style.inputGroup}>
                            <input 
                                type="text" 
                                value="" 
                                placeholder="Nome" 
                            />
                            <input 
                                type="text" 
                                value="" 
                                placeholder="E-mail" 
                            />
                        </div>
                        <div className={style.inputGroup}>
                            <input 
                                type="text" 
                                value="" 
                                placeholder="Whatsapp" 
                            />
                            <input 
                                type="text" 
                                value="" 
                                placeholder="Assunto" 
                            />
                        </div>
                        <div className={style.inputGroup}>
                            <textarea placeholder="Mensagem"></textarea>
                        </div>
                        <button className="btn btn-blue" type="submit">Cadastrar</button>
                    </form>
                </div>
            </section>
        </>
    )
}