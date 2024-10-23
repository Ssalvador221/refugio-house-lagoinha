'use client'
import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'
import { DialogDescription, DialogTrigger } from '@radix-ui/react-dialog'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

type SeeMoreProps = {
  title?: string
  headerDescription?: string
  description?: string
  footer?: string
  link?: string
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function SeeMore({
  title,
  headerDescription,
  link,
  open,
  setOpen,
}: SeeMoreProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen} modal={true}>
      <DialogTrigger className="flex flex-row items-center justify-center underline">
        Mostrar Mais <ChevronRight className="ml-1 h-4 w-4" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{headerDescription}</DialogDescription>
        </DialogHeader>
        <p className="text-sm w-full">
          Aqui na nossas casas você encontra de tudo para ter sua estadia dos
          sonhos, aonde você só se preocupa em trazer seus itens pessoais, já o
          restante fica por nossa conta.
          <br />
          <br />
          <strong>Aqui você encontra:</strong>
          <br />
          <br />
          *Cozinha completa com todos os utensílios necessário;
          <br />
          *Forno e micro-ondas;
          <br />
          *Chaleira elétrica, sanduicheira, cafeteira, cafeteira em capsula,
          liquidificador, bebedouro
          <br />
          *Espaço gourmet com todos os utensílios para sair aquele delicioso
          churrasco;
          <br />
          *Sala de jantar;
          <br />
          *Sala de estar com smart TV de 50 polegadas com acesso a netflix;
          <br />
          *Internet wi-fi;
          <br />
          *Lavabo;
          <br />
          *Lavanderia com tanque e maquina de lavar;
          <br />
          *Kit praia com cadeiras, guarda-sol e cooler;
          <br />
          *Espaço exclusivo e privativo para o locatário;
          <br />
          <br />
          <strong>Acesso do hóspede</strong>
          <br />
          Aqui você encontra exclusividade e privacidade.
          <br />
          Uma casa todinha sua e da sua familia.
          <br />
          Venha viver a melhor férias da sua vida, unindo conforto e belas
          praia.
        </p>
        <Link
          href={link || ''}
          target="_blank"
          className="text-sm w-full underline"
        >
          <strong>Veja todas as fotos aqui!</strong>
        </Link>
      </DialogContent>
    </Dialog>
  )
}

export default SeeMore
