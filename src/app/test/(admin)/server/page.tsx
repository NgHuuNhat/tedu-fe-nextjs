import React from 'react'
import { getFireBase, getUsers } from '../../service'

export default async function Server() {
    // // call api with fetch
    // const res = await fetch('https://69c4b9408a5b6e2dec2b1af4.mockapi.io/api/user')
    // const data = await res.json()

    // // call api with third party
    // const data2 = await getUsers()

    // //call api internal
    // const res = await fetch('http://localhost:3000/api/users', {
    //     cache: 'no-store'
    // })
    // const data3 = await res.json()

    // call api with third party - test firebase
    const data4 = await getFireBase()

    return (
        <div>
            <div>sever component</div>
            {/* <div>{JSON.stringify(data)}</div> */}
            {/* <div>{JSON.stringify(data2)}</div> */}
            {/* <div>{JSON.stringify(data3)}</div> */}
            <div>{JSON.stringify(data4)}</div>
        </div>
    )
}
