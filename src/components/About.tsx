/* eslint-disable @next/next/no-img-element */
import React from 'react'

function About() {
  return (
    <section
      className="mb-20 bg-amber-50 py-16 px-8 rounded-lg"
      id="onde-vai-estar"
    >
      <div className="flex flex-row flex-wrap max-sm:flex max-sm:flex-col max-sm:flex-wrap max-sm:items-center max-sm:w-full max-sm:gap-9 w-full">
        <div className="flex flex-col flex-wrap items-start w-1/2 max-sm:w-full max-sm:flex max-sm:flex-col max-sm:flex-wrap max-sm:items-center max-sm:text-center">
          <h2 className="text-4xl font-bold mb-12 text-center font-serif">
            Onde você vai estar
          </h2>
          <p className="w-[70%]">
            <strong>Lagoinha do Norte, Santa Catarina, Brasil</strong>
            <br />
            <br />
            Lagoinha do Norte é um bairro tranquilo no extremo norte de
            Florianópolis, cercado por belas paisagens e praias. A Praia da
            Lagoinha, de águas calmas e cristalinas, é perfeita para todas as
            idades. Próximo dali, a Praia Brava atrai surfistas com suas ondas
            fortes e bares famosos. Já a Praia de Ponta das Canas oferece um mar
            sereno e um pôr do sol deslumbrante. O local é ideal para quem busca
            contato com a natureza e sossego.
          </p>
          <p className="mt-5 w-[73%]">
            <strong>Locomoção</strong>
            <br />
            <br />
            Bairro tranquilo,muito fácil se locomover de carro, ponto de ônibus
            perto e fácil acesso de uber.
          </p>
        </div>
        <div className="w-[50%] max-sm:w-full h-[550px]">
          <img
            src="./praia-da-lagoinha.jpg"
            className="w-full h-full max-sm:w-full object-cover"
            alt="beach image"
          />
        </div>
      </div>
    </section>
  )
}

export default About
