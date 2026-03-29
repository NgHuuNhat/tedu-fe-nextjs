import React from 'react'

export default async function ProductDetailPage({ params }: { params: any }) {
    const { id } = await params
    console.log(id)

    return (
        <div>
            ProductDetailPage {id}
        </div>
    )
}
