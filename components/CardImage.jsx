import { Image } from '@nextui-org/react'
import React from 'react'
import Avatar from '@/assets/img/Avatar.jpg'

const CardImage = () => {
  return (
    <div className="bg-green flex justify-center h-full sm:h-auto items-end">
    <Image className="bg-orange"
       width={340}
       src= {Avatar.src}
       alt="NextUI Album Cover"
       classNames="m-5"
     />
    </div>
  )
}

export default CardImage