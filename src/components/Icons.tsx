import React from 'react'

type IconProps = {
  icon: React.ReactNode
  text: string
}

function Icons({ icon, text }: IconProps) {
  return (
    <div className="flex items-center space-x-2">
      {icon}
      <span>{text}</span>
    </div>
  )
}

export default Icons
