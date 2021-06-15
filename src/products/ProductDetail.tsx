import React, {useState, useEffect} from 'react';
import { Container, Card, CardMedia, CardContent, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Alert } from '@material-ui/lab';
import { IProductItem, AlertStatus } from './types';

interface ProductDetailProps {
    product: IProductItem;
};

const useStyles = makeStyles((theme) => ({
    detailButton: {backgroundColor: "lightGreen"},
    imageSize: {width: "20%", height: "50px"},
    cardSection: {width: "40%"},
}));

function ProductDetail({product} : ProductDetailProps) {
    const classes = useStyles();

    const [alert, setAlert] = useState({show: false, status: AlertStatus.Info, message: ""});

    useEffect(() => {
    }, []);

    // const [productedAdded, setProductAdded] = useState(false);
    // const [timeoutAlert, setTimeoutAlert] = useState(null);

    // const getStockAvailability = () => {
    //     if (product.Stock === 1) {
    //         return `1 item`;
    //     }
    //     else if (product.Stock > 0) {
    //         return `${product.Stock} items`;
    //     }
    //     else
    //         return "Out of Stock";
    // }

    // const getProductRating = () => {
    //     let stars = "";

    //     for (let rating = 1; rating <= Math.floor(product.RatingAvg); rating++) {
    //         stars += "*"
    //     };

    //     if (Math.floor(product.RatingAvg) !== product.RatingAvg) {
    //         stars += "o";
    //     }

    //     for (let rating = Math.ceil(product.RatingAvg); rating < 5; rating++) {
    //         stars += "0";
    //     }

    //     return stars;
    // }

    // const onAddProduct = () => {
    //     setProductAdded(true);
    //     if (!timeoutAlert) {
    //         setTimeoutAlert(setTimeout(() => {
    //             setProductAdded(false);
    //             setTimeoutAlert(null);
    //         }, 3000));
    //     }
    // }

    return (
        <Container className="fullHeight">
            {alert.show &&  <Alert severity={alert.status}>{alert.message}</Alert>}
            <Card className="m-4 d-flex align-items-center">
                <CardMedia image={product.PictureURL} className={classes.imageSize}/>
                <CardContent className={classes.cardSection}>
                    <h2>{product.Name}</h2>
                    <h3>${product.Price} ${product["Retail Price"]}</h3>
                </CardContent>
            </Card>
        </Container>
  );
}

export default ProductDetail;
