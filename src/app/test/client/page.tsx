'use client'
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { getUsers } from '../service'

const Client = () => {
    const [users, setUsers] = useState([])

    // //call api with fetch
    // useEffect(() => {
    //     fetch('https://69c4b9408a5b6e2dec2b1af4.mockapi.io/api/user')
    //         .then((res) => res.json())
    //         .then((data) => setUsers(data))
    // }, [])

    // //call api with third party
    // const { data, isPending, error } = useQuery({
    //     queryKey: ['users'],
    //     queryFn: getUsers,
    // })

    // if (isPending) return <span>Loading...</span>
    // if (error) return <span>Oops!</span>

    //call api internal
    useEffect(() => {
        fetch('http://localhost:3000/api/users')
            .then((res) => res.json())
            .then((data) => setUsers(data))
    }, [])


    return (
        <div>
            <div>client component</div>
            {/* <div>{JSON.stringify(users)}</div> */}
            {/* <div>{JSON.stringify(data)}</div> */}
            <div>{JSON.stringify(users)}</div>
        </div>
    )
}

// const queryClient = new QueryClient()
// const ClientPage = () => {
//     return (
//         <QueryClientProvider client={queryClient}>
//             <Client></Client>
//         </QueryClientProvider>
//     )
// }

// export default ClientPage
export default Client