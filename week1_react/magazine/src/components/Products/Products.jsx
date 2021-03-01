import React from 'react';
import {Grid, Typography} from '@material-ui/core';

import Product from './Product/Product';

// const products = [
//     {id:1, name:'Shoes', description:'Running shoes.', price: '$5', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/i1-9cfea66d-b519-4b29-8e43-ce4164e8c558/adapt-bb-2-tie-dye-basketball-shoe-vdFwKS.jpg'}, 
//     {id:2, name:'Mackbook', description:'Apple Mackbook.', price:'$10', image: 'https://fora.kz/images/content/products/614735/apple-macbook-air-2020-mvh22_5ec77c96bcd9f.jpg'}, 
//     {id:3, name:'Skin', description:'CS GO skin.', price:'$15', image: 'https://www.elecspo.com/static/uploads/13/2018/10/awpdragonlore.jpg'}, 
    
// ]


const Products = ({ products, onAddToCart }) => {

    return (
        <>
            <main>
                <Typography variant="h3" gutterBottom>Items: </Typography>
                <Grid container justify="center" spacing={4}>
                    {products.map((product) => (
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <Product product={product} onAddToCart={onAddToCart}></Product>
                        </Grid>
                    ))}
                </Grid>
            </main>
        </>
    )
}

export default Products;