import Link from 'next/link'
import React from 'react'
import { FaWhatsapp, FaInstagram, FaAirbnb } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-[#fffbeb] text-black py-12">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl font-serif mb-4">Lagoinha Refúgio House</h3>
        <p className="mb-4">
          Paz, sossego e aconchego em um pátio perfeito para crianças, ideal
          para curtir em família ou com amigos.
        </p>
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
    </footer>
  )
}

export default Footer
