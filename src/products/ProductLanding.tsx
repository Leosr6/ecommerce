import { Button } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import ProductCatalog from './ProductCatalog';
import ProductDetail from './ProductDetail';
import { IProductItem } from './types';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

enum Tabs {
  Catalog = "catalog",
  Detail = "detail",
}


function ProductLanding() {

  const [product, setProduct] = useState({} as IProductItem);
  const [tabValue, setTabValue] = useState(Tabs.Catalog);

  useEffect(() => {
    fetch("/heartbeat").then(res => {
      if (res.status !== 200) {
        alert("Backend is not running");
      }
    });
  }, []);

  const onShowProductDetailClick = (product: IProductItem) => {
    setProduct(product);
    setTabValue(Tabs.Detail);
  };

  const onReturnToCalog = () => {
    setProduct({} as IProductItem);
    setTabValue(Tabs.Catalog);
  };

  return (
    <TabContext value={tabValue}>
        <TabPanel value={Tabs.Catalog}>
            <ProductCatalog showProductDetail={onShowProductDetailClick} />
        </TabPanel>
        <TabPanel value={Tabs.Detail}>
            <Button onClick={onReturnToCalog} color="secondary" startIcon={<ArrowBackIosIcon/>} variant="contained">
                Back
            </Button>
            <ProductDetail product={product} />
        </TabPanel>
    </TabContext>
  );
}

export default ProductLanding;
