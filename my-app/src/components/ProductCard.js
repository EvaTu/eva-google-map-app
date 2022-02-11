import React from 'react'

function ProductCard({item}){

    const {id, name, image, price} = item


    return(
        <div className="product-card">
            <img src={image} alt={name} id={id} height="600px" width="450px"/>
            <h3>{name}</h3>
            <h3>${price}</h3>
        </div>
    )
}

export default ProductCard