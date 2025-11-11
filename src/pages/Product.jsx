import React from 'react'
import { useParams } from 'react-router'
import { data } from './Home'
export default function Product() {
    const params = useParams()
    console.log('PARAMS', params);

    return (
        <div>Product / {JSON.stringify(data.find(el => params.productId == el.id))}</div>
    )
}
