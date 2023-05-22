"use client"
import UserCard from '@/components/UserCard'
import { FC } from 'react'

interface pageProps {
    params: any
}

const page: FC<pageProps> = ({params}) => {
    const {id} = params
   

  return <div>
        <h1>user</h1>
        <UserCard id={id}/>
  </div>
}

export default page