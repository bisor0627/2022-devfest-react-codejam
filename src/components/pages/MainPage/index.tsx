import { AppScreen } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';
import React from 'react';
import { MainPageAppBarLeft, MainPageAppBarRight } from 'src/components/common/Stackflow';
import { ProductInterface } from 'src/schemas/Product';
import { getProductList } from 'src/services/product';

const MainPage: ActivityComponentType = () => {
  const [products, setProducts] = React.useState<ProductInterface[]>([]);
  const loadProducts =async () => {
    const {data} = await getProductList();
    setProducts(data);
  }

  React.useEffect(()=>{loadProducts();},[]);
  return <AppScreen appBar={{appendLeft: MainPageAppBarLeft, appendRight: MainPageAppBarRight}}><div></div>
  </AppScreen>;
};

export default MainPage;
