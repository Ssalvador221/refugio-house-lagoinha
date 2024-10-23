/* eslint-disable @next/next/no-img-element */
'use client'
import { MapPin, BedDouble, Bath, Wifi, ForkKnife } from 'lucide-react'
import React from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from './ui/carousel'
import { MdLocalLaundryService } from 'react-icons/md'
import { FaCar, FaDog } from 'react-icons/fa'
import SeeMore from './SeeMore'

function HousesCard() {
  const [open, setOpen] = React.useState(false)
  const [open1, setOpen1] = React.useState(false)

  return (
    <section className="mb-20" id="casas">
      <h2 className="text-4xl font-bold mb-12 text-center font-serif">
        Nossas Casas
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
        <Card className="overflow-hidden shadow-lg">
          <Carousel className="w-full">
            <CarouselContent>
              {[0, 1, 2, 3, 4, 5, 6].map((_, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-64">
                    <img
                      src={`./refugio-fotos1/IMG_${index}.jpg`}
                      alt={`Fotos da casa`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <CardHeader>
            <CardTitle className="text-2xl font-serif ">
              Refúgio House I
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 " />
                <span className="text-muted-foreground">
                  Servidão Manoel de Souza, 434 - Lagoinha do Norte
                </span>
              </div>
            </div>
            <div className="flex flex-row max-sm:flex max-md:flex md:flex-row md:flex-wrap max-sm:flex-wrap lg:space-x-6 md:space-x-0 max-sm:space-x-0 gap-2 space-x-6 mb-4">
              <div className="flex items-center space-x-2">
                <BedDouble className="w-5 h-5 " />
                <span>2 Quartos</span>
              </div>
              <div className="flex items-center space-x-2">
                <Bath className="w-5 h-5 " />
                <span>2 Banheiros</span>
              </div>
              <div className="flex items-center space-x-2">
                <Wifi className="w-5 h-5 " />
                <span>Wi-Fi</span>
              </div>
              <div className="flex items-center max-sm:flex max-sm:space-x-2 space-x-2">
                <ForkKnife className="w-5 h-5 " />
                <span>Cozinha</span>
              </div>
              <div className="flex items-center max-sm:flex max-sm:space-x-2 space-x-2">
                <MdLocalLaundryService className="w-5 h-5 " />
                <span>Lavanderia</span>
              </div>
              <div className="flex items-center max-sm:flex max-sm:space-x-2 space-x-2">
                <FaDog className="w-5 h-5 " />
                <span>Permitido Animais</span>
              </div>
              <div className="flex items-center max-sm:flex max-sm:space-x-2 space-x-2">
                <FaCar className="w-5 h-5 " />
                <span>Estacionamento Incluido</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-4">
            <p className="text-muted-foreground">
              Aqui você encontra privacidade! Todo o espaço fica exclusivo para
              você e sua família. Nosso Refúgio I foi cuidadosamente pensado e
              construído para se tornar este lar prático e funcional, trazendo a
              sensação de acolhimento e aconchego. Venha e Sinta-se em casa.
            </p>
            <SeeMore
              title="Refúgio House II"
              headerDescription="Bem-vindo ao charmoso Refúgio II"
              description=""
              open={open1}
              setOpen={setOpen1}
            />
          </CardFooter>
        </Card>

        <Card className="overflow-hidden shadow-lg ">
          <Carousel className="w-full">
            <CarouselContent>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-64">
                    <img
                      src={`./refugio-fotos2/IMG-${index}.jpg`}
                      alt={`house pictures`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <CardHeader>
            <CardTitle className="text-2xl font-serif ">
              Refúgio House II
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-muted-foreground">
                  Servidão Manoel de Souza, 434 - Lagoinha do Norte
                </span>
              </div>
            </div>
            <div className="flex flex-row max-sm:flex max-md:flex md:flex-row md:flex-wrap max-sm:flex-wrap lg:space-x-6 md:space-x-0 max-sm:space-x-0 gap-2 space-x-6 mb-4">
              <div className="flex items-center space-x-2">
                <BedDouble className="w-5 h-5 " />
                <span>3 Suítes</span>
              </div>
              <div className="flex items-center space-x-2">
                <Bath className="w-5 h-5 " />
                <span>4 Banheiros</span>
              </div>
              <div className="flex items-center space-x-2">
                <Wifi className="w-5 h-5 " />
                <span>Wi-Fi</span>
              </div>
              <div className="flex items-center max-sm:flex max-sm:space-x-2 space-x-2">
                <ForkKnife className="w-5 h-5 " />
                <span>Cozinha</span>
              </div>
              <div className="flex items-center max-sm:flex max-sm:space-x-2 space-x-2">
                <MdLocalLaundryService className="w-5 h-5 " />
                <span>Lavanderia</span>
              </div>
              <div className="flex items-center max-sm:flex max-sm:space-x-2 space-x-2">
                <FaDog className="w-5 h-5 " />
                <span>Permitido Animais</span>
              </div>
              <div className="flex items-center max-sm:flex max-sm:space-x-2 space-x-2">
                <FaCar className="w-5 h-5" />
                <span>Estacionamento Incluido</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-4">
            <p className="text-muted-foreground">
              Uma casa que combina aconchego e sofisticação em um ambiente
              exclusivo. O lugar perfeito para quem busca descanso e privacidade
              seja com a família ou amigos. Localizada a 500 metros da melhor
              praia de Florianópolis - Lagoinha que tem seu mar calmo, tranquilo
              e água cristalinas.
            </p>
            <SeeMore
              title="Refúgio House II"
              headerDescription="Bem-vindo ao charmoso Refúgio II"
              description=""
              open={open}
              setOpen={setOpen}
            />
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}

export default HousesCard
