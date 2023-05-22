"use client"
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
// import Image from 'next/image';
import { FC } from 'react'
import { Card, Image } from '@mantine/core';
import Link from 'next/link';
interface UserCardsProps {

}

const UserCards: FC<UserCardsProps> = ({ }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const { data } = await axios.get("https://reqres.in/api/users");
      return data.data;
    },
  });


  return (
    <div>
      {isLoading && <div
        className="animate-pulse flex space-x-4"
          
      >
        <div className="rounded-full bg-gray-400 h-12 w-12"></div>
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-gray-400 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-400 rounded"></div>
            <div className="h-4 bg-gray-400 rounded w-5/6"></div>
          </div>
        </div>
      </div>
      
    }
      {data && data.map((user: any) => (
        <Link href={`/users/${user.id}`} key={user.id}>
          <div className="bg-white border-slate-100 dark:bg-slate-800 dark:border-slate-500 border-b rounded-t-xl p-4 pb-6 sm:p-10 sm:pb-8 lg:p-6 xl:p-10 xl:pb-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="relative">
                  <img
                    src={user.avatar}
                    alt="Norway"
                    height={160}
                    className="h-24 w-24 rounded-full"
                  />
                <span>
                  <span className="absolute inset-0 shadow-inner rounded-full" aria-hidden="true" />
                </span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {user.first_name} {user.last_name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {user.email}
                </p>
              </div>
            </div>
          </div>

        </Link>
      ))}
    </div>

  )
}

export default UserCards