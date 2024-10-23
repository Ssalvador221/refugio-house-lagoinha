/* eslint-disable @next/next/no-img-element */
'use client'
import { MapPin, BedDouble, Wifi, ForkKnife } from 'lucide-react'
import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '../ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '../ui/carousel'
import { FaCar, FaDog } from 'react-icons/fa'
import SeeMore from './SeeMore'
import Icons from '../Icons'
import { Kalam } from 'next/font/google'

const kalam = Kalam({ subsets: ['latin'], weight: ['400'] })


function HousesCard() {
  const [open, setOpen] = React.useState(false)
  const [open1, setOpen1] = React.useState(false)

  return (
    <section className="mb-20" id="casas">
      <h2 className={`${kalam.className} text-4xl font-bold mb-12 text-center font-serif text-[#BC9B5D]`}>
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
            <CardTitle className={`${kalam.className} text-3xl font-serif text-[#BC9B5D]`}>
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
            <div className="flex flex-row gap-x-4 gap-y-2 max-sm:flex max-md:flex md:flex-row md:flex-wrap max-sm:flex-wrap md:space-x-0 max-sm:space-x-0 mb-4">
              <Icons icon={<BedDouble />} text="2 Quartos" />
              <Icons icon={<Wifi />} text="Wi-Fi" />
              <Icons icon={<ForkKnife />} text="Cozinha" />
              <Icons
                icon={<FaDog className="w-5 h-5" />}
                text="Permitido Animais"
              />
              <Icons
                icon={<FaCar className="w-5 h-5" />}
                text="Estacionamento Incluido"
              />
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
              title="Refúgio House I"
              headerDescription="Bem-vindo ao charmoso Refúgio II"
              link="https://www.airbnb.com.br/rooms/39986251?source_impression_id=p3_1729691859_P3luUCVFVsb_lgcq&modal=PHOTO_TOUR_SCROLLABLE"
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
            <CardTitle className={`${kalam.className} text-3xl font-serif text-[#BC9B5D]`}>
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
            <div className="flex flex-row  max-sm:flex max-md:flex md:flex-row md:flex-wrap max-sm:flex-wrap md:space-x-0 max-sm:space-x-0 gap-x-4 gap-y-2 mb-4">
              <Icons icon={<BedDouble />} text="3 Suítes" />
              <Icons icon={<Wifi />} text="Wi-Fi" />
              <Icons icon={<ForkKnife />} text="Cozinha" />
              <Icons
                icon={<FaDog className="w-5 h-5" />}
                text="Permitido Animais"
              />
              <Icons
                icon={<FaCar className="w-5 h-5" />}
                text="Estacionamento Incluido"
              />
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
              link="https://www.airbnb.com.br/rooms/703705924793969794?adults=1&children=0&enable_m3_private_room=true&infants=0&pets=0&search_mode=regular_search&check_in=2024-11-29&check_out=2024-12-04&source_impression_id=p3_1729706278_P3ZOFAoG6NHDAf6H&previous_page_section_name=1000&federated_search_id=076cf3a2-083a-4ea8-9bc6-1282611d8c4f&modal=PHOTO_TOUR_SCROLLABLE"
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
