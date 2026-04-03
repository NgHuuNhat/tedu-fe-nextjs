import React from 'react'
import data from "../data.json"
import { DataTable } from '@/components/data-table'

export default function CategoriesTable() {
    return (
        <DataTable data={data} />
    )
}
