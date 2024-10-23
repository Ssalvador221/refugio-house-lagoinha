import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card'

type CardServiceProps = {
  icon: JSX.Element
  title: string
  description: string
}

function CardServices({ icon, title, description }: CardServiceProps) {
  return (
    <Card className="text-center border-amber-200 shadow-lg">
      <CardHeader className="items-center">
        {icon}
        <CardTitle className="text-xl font-serif text-[#BC9B5D]">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

export default CardServices
