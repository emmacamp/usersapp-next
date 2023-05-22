"use client"

import axios from 'axios'
import { useQuery } from "@tanstack/react-query";


export const useUser = () => {
    return useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const { data } = await axios.get("https://reqres.in/api/users");
            return data.data;
        },
    })
}