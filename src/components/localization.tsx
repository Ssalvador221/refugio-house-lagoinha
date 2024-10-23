import React from 'react'

import { Kalam } from 'next/font/google'

const kalam = Kalam({ subsets: ['latin'], weight: ['400'] })
function localization() {
  return (
    <section className="mb-20" id="localizacao">
      <h2
        className={`${kalam.className} text-4xl font-bold mb-12 text-center text-[#BC9B5D]`}
      >
        Localização
      </h2>
      <div className="aspect-video w-full rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10019.590434293961!2d-48.42450220309334!3d-27.3925697496212!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952743de76833259%3A0xa62bf8168681f979!2sLagoinha%20Ref%C3%BAgio%20House!5e0!3m2!1sen!2sbr!4v1729724896554!5m2!1sen!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
        />
      </div>
    </section>
  )
}

export default localization
