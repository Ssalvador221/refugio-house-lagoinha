'use client'
import React from 'react'

function Header() {
  return (
    <header className="relative h-[60vh] flex items-center justify-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('./IMG_HEADER.jpg')",
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="container mx-auto px-4 z-20">
        <nav className="absolute top-0 left-0 right-0 p-6">
          <ul className="flex justify-center space-x-8">
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
                href="#"
                className="text-lg hover:text-amber-200 transition-colors"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-lg hover:text-amber-200 transition-colors"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4 font-serif">
            Refúgio House Lagoinha
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            <br />
            Paz, sossego e aconchego em um pátio perfeito para crianças,
            <br />
            ideal para curtir em família ou com amigos.
          </p>
        </div>
      </div>
    </header>
  )
}

export default Header
