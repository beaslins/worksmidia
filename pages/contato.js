import Link from 'next/link'
import Image from 'next/image'

import Layout from '../components/layout'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Contato() {
    return (
        <Layout title="Contato | Works Midia">
            <section className="contact flex">
                <div className="information">
                    <div className="box-title">
                        <h4 className="sub-title">Contato</h4>
                        <h1 className="title">Don’t Hesitate to contact with us for any information or inquiries</h1>
                        <p>32 Box Gracia Park Du Guel, Barcelona, Espania</p>
                        <p className="phone">11 0 0000 - 0000</p>
                        <Link href="mailto:contato@worksmidia.com.br">
                            <a className="link">contato@worksmidia.com.br</a>
                        </Link>
                        <div className="social flex">
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
                <div className="cont-form">
                    <form>
                        <div className="flex input-group">
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
                        <div className="flex input-group">
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
                        <div className="input-group">
                            <textarea placeholder="Mensagem"></textarea>
                        </div>
                        <button className="btn btn-blue" type="submit">Cadastrar</button>
                    </form>
                </div>
            </section>
            <section className="cont-map"></section>
        </Layout>
    )
}