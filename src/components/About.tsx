import React from 'react'

function About() {
  return (
    <section
      className="mb-20 bg-amber-50 py-16 px-8 rounded-lg"
      id="localizacao"
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
            Casa fica no estremo norte da ilha, cercada por belíssimas praias e
            as 3 que a cercam contempla todos os gostos como praia da Lagoinha,
            mar tranquilo com águas cristalinas ótima para todas as idades.
            Praia Brava, mar aberto, adorada pelos surfistas conhecida também
            pelos famosos bares e praia de Ponta das Canas, mar calmo e com um
            belíssimo pôr do sol.
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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14115.39861813114!2d-48.4249085!3d-27.3926909!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDIzJzM0LjciUyA0OMKwMjUnMjUuNyJX!5e0!3m2!1sen!2sbr!4v1635181410086!5m2!1sen!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default About
