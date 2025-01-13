import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/CASA_DE_CARNES_RODEIO_II.ico"
              alt="ChurrascoMania Logo"
              width={150}
              height={50}
              className="mb-4"
            />
            <p className="text-sm text-center md:text-left">
              Sua fonte confiável para tudo relacionado a churrasco.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-center md:text-left">Links Rápidos</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li><Link href="/" className="hover:text-primary transition-colors">Início</Link></li>
              <li><Link href="/produtos" className="hover:text-primary transition-colors">Produtos</Link></li>
                <li><Link href="/#container__about" className="hover:text-primary transition-colors">Sobre Nós</Link></li>
              <li><Link href="/#contato" className="hover:text-primary transition-colors">Contato</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-center md:text-left">Contato</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li className="flex items-center justify-center md:justify-start">
                <Phone className="mr-2 h-4 w-4" />
                <a 
                  href="https://wa.me/5517981410234?text=Olá, Rogério! Gostaria de saber mais sobre os produtos e carnes" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  +55 (17) 98141-0234
                  <ExternalLink className="inline-block ml-1 h-3 w-3" />
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Mail className="mr-2 h-4 w-4" />
                <a href="mailto:contato@churrascomania.com" className="hover:text-primary transition-colors">
                  rogeriocarlosfrancisco@hotmail.com
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <MapPin className="mr-2 h-4 w-4" />
                <a 
                  href="https://g.co/kgs/WsWAVTr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Rua Gonçalves Ledo, 791 - Centro, Urupês - São Paulo
                  <ExternalLink className="inline-block ml-1 h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200 text-center">
          <p className="text-sm">&copy; 2025 Casa de Carnes Rodeio II. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

