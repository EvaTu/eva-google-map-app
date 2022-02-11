import React from 'react'

function ProductCard({item}){

    const {id, name, category, image, price, inventory, description} = item


    return(
        <div className="product-card">
            <img src={image} alt={name} id={id} />
            <h3>{name}</h3>
            <h3>${price}</h3>
        </div>
    )
}

export default ProductCard