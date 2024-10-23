// eslint-disable-next-line camelcase
import { Kantumruy_Pro } from 'next/font/google'
import React from 'react'
import { FaBus, FaDog } from 'react-icons/fa'
import { GiVacuumCleaner } from 'react-icons/gi'
import CardServices from './Cards/CardServices'

const kantumruy = Kantumruy_Pro({ subsets: ['latin'], weight: ['400'] })
function Services() {
  return (
    <section
      className={`${kantumruy.className} flex flex-col mb-20 py-16 px-8 rounded-lg`}
      id="servicos"
    >
      <div className="flex flex-col items-center w-full p-4 text-center">
        <h1 className={`${kantumruy.className} text-[25px] `}>Serviços</h1>
        <p className={`${kantumruy.className} text-[18px] text-[#5e5d5d] p-3`}>
          Tudo para você desfrutar do sossego e viver uma experiência
          <br />
          incrivel, sem se preocupar com nada.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-12">
        <CardServices
          icon={<FaBus className="w-10 h-10 mb-2" />}
          title="Turismo"
          description="Agendar transfers, passeios, dicas de restaurantes e esclarecer dúvidas sobre Florianópolis."
        />
        <CardServices
          icon={<GiVacuumCleaner className="w-10 h-10 mb-2" />}
          title="Diarista"
          description="Se desejar, indicamos nossa diarista para manter a casa em dia enquanto você descansa."
        />
        <CardServices
          icon={<FaDog className="w-10 h-10 mb-2" />}
          title="Pet care"
          description="Tudo o que seu pet precisar enquanto você descansa ou visita as atrações da cidade."
        />
      </div>
    </section>
  )
}

export default Services
