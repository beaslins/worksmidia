import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'

export default function Contato() {
    return (
        <Layout>
            <section className="container flex">
                <div className="box-title">
                    <h4 className="sub-title">Contato</h4>
                    <h1 className="title">Don’t Hesitate to contact with us for any information or inquiries</h1>
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
                        <div className="">
                            <textarea placeholder="Mensagem"></textarea>
                        </div>
                        <button className="button" type="submit">Cadastrar</button>
                    </form>
                </div>
            </section>
        </Layout>
    )
}