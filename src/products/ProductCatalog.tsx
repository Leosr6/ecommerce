import React, {useState, useEffect} from 'react';
import { Container, List, Card, CardMedia, CardContent, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ProductListMock from '../mocks/productList.json';
import { IProductItem } from './types';

const useStyles = makeStyles((theme) => ({
    detailButton: {backgroundColor: "lightGreen"},
    imageSize: {width: "20%", height: "50px"},
    cardSection: {width: "40%"},
}));

interface ProductCatalogProps {
    showProductDetail: (product: IProductItem) => void;
};

const ProductList = ProductListMock as IProductItem[];
console.log(ProductList);

function ProductCatalog({ showProductDetail }: ProductCatalogProps) {
    const classes = useStyles();

    return (
        <Container className="fullHeight">
            <List>
            {
                ProductList.map((product: IProductItem, index: number) =>
                    <Card key={index} className="m-4 d-flex align-items-center">
                        <CardMedia image={product.PictureURL} className={classes.imageSize}/>
                        <CardContent className={classes.cardSection}>
                            <h2>{product.Name}</h2>
                            <h3>${product.Price} ${product["Retail Price"]}</h3>
                        </CardContent>
                        <CardContent className={classes.cardSection}>
                            <Button size="large" className={classes.detailButton} onClick={() => showProductDetail(product)}>View Details</Button>
                        </CardContent>
                    </Card>
                )
            }
            </List>
        </Container>
  );
}

export default ProductCatalog;
