import React from 'react'
import Link from 'next/link'
import { FaAirbnb, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { Kalam } from 'next/font/google'

const kalam = Kalam({ subsets: ['latin'], weight: ['400'] })

function Contacts() {
  return (
    <section className="text-center mb-20" id="contatos">
      <h2
        className={`${kalam.className} text-4xl font-bold mb-6 font-serif text-[#BC9B5D]`}
      >
        Contatos
      </h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
        Fique a vontade para nos contatar por qualquer pergunta ou sugestão,
        você sempre será bem vindo em nosso refúgio.
      </p>
      <div className="flex flex-row justify-center gap-4">
        <Link
          href="https://api.whatsapp.com/message/VA7F7STOQBEMN1?autoload=1&app_absent=0"
          target="_blank"
        >
          <FaWhatsapp className="w-8 h-8 mx-auto" />
        </Link>
        <Link
          href="https://www.instagram.com/lagoinharefugiohouse/"
          target="_blank"
        >
          <FaInstagram className="w-8 h-8 mx-auto" />
        </Link>
        <Link
          href="https://www.airbnb.com.br/rooms/39986251?adults=1&children=0&infants=0&search_mode=regular_search&check_in=2024-10-19&check_out=2024-10-24&source_impression_id=p3_1729176421_P3uJKRZ1xLrCmsQu&previous_page_section_name=1000&federated_search_id=dabb767d-6f9d-44dd-a278-d215daf96447"
          target="_blank"
        >
          <FaAirbnb className="w-8 h-8 mx-auto" />
        </Link>
      </div>
    </section>
  )
}

export default Contacts
