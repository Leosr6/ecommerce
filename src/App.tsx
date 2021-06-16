import { TabContext, TabPanel } from '@material-ui/lab';
import { useEffect, useState } from 'react';
import './App.css';
import ProductCatalog from './products/ProductCatalog';
import ProductDetail from './products/ProductDetail';
import { IProductItem } from './products/types';

enum Tabs {
  Catalog = "catalog",
  Detail = "detail",
}


function App() {

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

  return (
    <div className="App">
      <TabContext value={tabValue}>
        <TabPanel value={Tabs.Catalog}>
          <ProductCatalog showProductDetail={onShowProductDetailClick} />
        </TabPanel>
        <TabPanel value={Tabs.Detail}>
          <ProductDetail product={product} />
        </TabPanel>
      </TabContext>
    </div>
  );
}

export default App;
