import Link from 'next/link'

import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import style from "../public/styles/contact.module.css"

export default function Contact() {
    return (
        <>
            <section className={style.contact}>
                <div className={style.information}>
                    <div className={style.boxTitle}>
                        <h4 className="sub-title">Contato</h4>
                        <h1 className="title">Algum projeto em mente?</h1>
                        <p>Agende uma reunião com um de nossos especialistas e traga o seu negócio para o mundo digital</p>
                        <p className={style.mTop}>Rua Itapura, 843 - Tatuapé</p>
                        <p className="phone">11 4040 - 6422</p>
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
            <section>
                <iframe className={style.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.625931675085!2d-46.56824678507071!3d-23.545952884690536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5e925866b0c5%3A0xae5b7969c7b6de44!2sR.%20Itapura%2C%20843%20-%20Vila%20Gomes%20Cardim%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003310-000!5e0!3m2!1spt-BR!2sbr!4v1611845444719!5m2!1spt-BR!2sbr"></iframe>
            </section>
        </>
    )
}