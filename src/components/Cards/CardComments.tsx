/* eslint-disable @next/next/no-img-element */
import { Star } from 'lucide-react'
import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

type CardServiceProps = {
  picture: string
  personName: string
  description: string
}

function CardComments({ picture, personName, description }: CardServiceProps) {
  return (
    <Card className="border-amber-200">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 flex items-center justify-center">
            <Avatar className="w-12 h-12">
              <AvatarImage src={picture} />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <CardTitle>{personName}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-current text-yellow-500" />
          ))}
        </div>
        <p className="text-muted-foreground">&apos;{description}&apos;</p>
      </CardContent>
    </Card>
  )
}

export default CardComments
