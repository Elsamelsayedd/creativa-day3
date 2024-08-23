import React from 'react'
import products from '../ProductData/ProductData'


export default function Product() {
    return (<>
        <div className='text-center text-3xl'>Product</div>
        <div className='container mx-auto flex flex-wrap my-8 '>
            {products.map((product) =>
                <div key={product.id} className='card p-3  w-1/3'>
                    <div className="imgCard w-full">
                        <img src={product.img} className='w-full' alt={product.name} />
                    </div>
                    <h3 className='text-center font-bold '>{product.name}</h3>
                    <h2>{product.category}</h2>
                    <h2>{product.price}</h2>
                    <p>{product.description.split(' ').slice(0, 10).join(' ')}</p>

                </div>)}
        </div>

    </>

    )
}
