import Link from 'next/link'
import Image from 'next/image'

import Layout from '../components/layout'
import Contact from '../components/contact'

import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Contato() {
    return (
        <Layout>
            <Contact />
        </Layout>
        
    )
}