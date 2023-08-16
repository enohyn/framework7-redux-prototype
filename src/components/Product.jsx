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
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../redux/actions/product-actions';

//before introducing middleware
// import { selectedProduct } from '../redux/actions/product-actions';
// import { getSingleProduct } from '../services/services';
// import axios from 'axios';


export default (page) => {
    const productId = page.id;

    const product = useSelector((state) => (state.product))
    const dispatch = useDispatch();

    useEffect(() => {
        if (productId != null && productId > 0) {
            //before introducing middleware
            // const fetchSingleData = async () => {
            //     const product = await getSingleProduct(productId);
            //     dispatch(selectedProduct(product));

            // }
            // fetchSingleData();
            dispatch(fetchProduct(productId))
        }
    }, [productId])
    return (

        <Page noNavbar={true} >
            <Navbar title='All Products' />
            <BlockTitle>
                Single Product Represented in Cards
            </BlockTitle>
            <Card expandable>
                <CardContent padding={false}>
                    <div
                        style={product?.thumbnail ? {
                            backgroundImage: `url(${product.thumbnail})`,
                            height: '240px',
                            width: '100%',
                            backgroundSize: 'cover'
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
                        {product?.title ? product.title : ''}
                        <br />Price:
                        ${product?.price ? product.price : ''}
                    </span>
                    </CardHeader>
                    <div className="card-content-padding">
                        <p>
                            {product?.description ? product.description : ''}
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
