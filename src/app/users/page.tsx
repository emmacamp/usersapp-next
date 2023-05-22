"user client"

import { FC } from 'react'
import UserCards from '@/components/UsersCards'

interface pageProps {

}

const page: FC = ({ }) => {


  return (
    <>
      <h1>Users</h1>
      <UserCards />
    </>
  )
}

export default page