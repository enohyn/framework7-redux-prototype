import React, { useEffect, useState } from 'react';
import {
    Navbar,
    Page,
    BlockTitle,
    Card,
    CardHeader,
    CardContent,
    Button,
    Link
} from 'framework7-react';
import axios from 'axios';
import { getSingleProduct } from '../services/services';

export default (page) => {

    const pid = page.id;
    const [product, setProducts]=useState();
    useEffect(() => {
        if (page.id != null && page.id > 0) {
            // axios.get(`https://dummyjson.com/products/${page.id}`)
            // .then( res=>{
            //     console.log(res.data)
            // })
            // .catch(err=>{
            //     console.log(err)
            // })
            const fetchSingleData = async () => {
                const product = await getSingleProduct(page.id);
                console.log(product)
                setProducts(product)
            }
            fetchSingleData();
        }
    }, [page.id])
    return (
        <Page noNavbar={true} >
            <Navbar title='All Products' />
            <BlockTitle>
                Single Product Represented in Cards
            </BlockTitle>

            <Card expandable>
                <CardContent padding={false}>
                    <div
                        // style={{
                        //     backgroundImage: `url(${product.thumbnail})`,
                        //     backgroundSize: 'cover',
                        //     height: '240px',
                        // }}
                        style={ product?.thumbnail ? { 
                            backgroundImage: `url(${product.thumbnail})`,
                            height: '240px',
                            width:'100%',
                            backgroundSize:'cover'
                        } : {}}

                    />
                    <Link
                        cardClose
                        color="black"
                        className="card-opened-fade-in"
                        style={{ position: 'absolute', right: '15px', top: '15px' }}
                        iconF7="xmark_circle_fill"
                    />
                    <CardHeader style={{ display: 'flex', alignItems: 'center', paddingTop: '20px', paddingBottom: '20px' }}> <span style={{ height: '100%' }}>
                        {product?.title ? product.title: ''} 
                        <br />Price:
                        ${product?.price? product.price:''}
                    </span>
                    </CardHeader>
                    <div className="card-content-padding">
                        <p>
                            {product?.description ? product.description:''}
                        </p>
                        <p>
                            <Button fill round large cardClose>
                                Close
                            </Button>
                        </p>
                    </div>
                </CardContent>
            </Card>
        </Page>

    );
}
