'use client'
import { Kalam } from 'next/font/google'
import Link from 'next/link'
import React from 'react'
import { FaWhatsapp, FaInstagram, FaAirbnb } from 'react-icons/fa'

const kalam = Kalam({ subsets: ['latin'], weight: ['400'] })

function Header() {
  return (
    <header className="relative h-[60vh] max-sm:h-[90vh] flex items-center  justify-center text-[#BC9B5D]">
      <div className="absolute inset-0 bg-[#fcf8ed] opacity-50 z-10"></div>
      <div className="container mx-auto px-4 z-20">
        <nav className="absolute top-0 left-0 right-0 p-6">
          <ul className="flex flex-wrap justify-center space-x-8">
            <li>
              <a
                href="#"
                className="text-lg hover:text-amber-200 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#casas"
                className="text-lg hover:text-amber-200 transition-colors"
              >
                Casas
              </a>
            </li>
            <li>
              <a
                href="#onde-vai-estar"
                className="text-lg hover:text-amber-200 transition-colors"
              >
                Aonde Estará
              </a>
            </li>
            <li>
              <a
                href="#servicos"
                className="text-lg hover:text-amber-200 transition-colors"
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                href="#localizacao"
                className="text-lg hover:text-amber-200 transition-colors"
              >
                Localização
              </a>
            </li>
            <li>
              <a
                href="#contatos"
                className="text-lg hover:text-amber-200 transition-colors"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center">
          <h1
            className={`${kalam.className} text-6xl font-bold mb-4 max-sm:mt-[15vh]  font-serif`}
          >
            Lagoinha Refúgio house
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto mt-6">
            Sua casa de temporada em Florianópolis!
          </p>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            São 2 casas diponiveis para estadia,
            <br />
            você pode reservar as duas ou escolher qual será a sua.
          </p>
        </div>
        <div className="flex flex-row justify-center gap-4">
          <Link
            href="https://api.whatsapp.com/message/VA7F7STOQBEMN1?autoload=1&app_absent=0"
            target="_blank"
          >
            <FaWhatsapp className="w-6 h-6 mx-auto" />
          </Link>
          <Link
            href="https://www.instagram.com/lagoinharefugiohouse/"
            target="_blank"
          >
            <FaInstagram className="w-6 h-6 mx-auto" />
          </Link>
          <Link
            href="https://www.airbnb.com.br/rooms/39986251?adults=1&children=0&infants=0&search_mode=regular_search&check_in=2024-10-19&check_out=2024-10-24&source_impression_id=p3_1729176421_P3uJKRZ1xLrCmsQu&previous_page_section_name=1000&federated_search_id=dabb767d-6f9d-44dd-a278-d215daf96447"
            target="_blank"
          >
            <FaAirbnb className="w-6 h-6 mx-auto" />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
