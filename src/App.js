import React, { useEffect } from 'react';
import { App, View, } from 'framework7-react';
import '../node_modules/framework7/framework7-bundle.css';
import 'framework7-icons'
import Product from './components/Product';
import AccordionProducts from './components/AccordionProducts';
import { fetchAllProducts } from './services/services';
import { useDispatch } from 'react-redux';
import { recievedProducts, requestProducts } from './redux/actions/product-actions';

const routes = [
  {
    path: '/products',
    component: AccordionProducts
  },
  {
    path: '/products/:id',
    component: Product
  }

]

const f7Params = {
  routes,
  name: 'frame7-app',
  theme: 'auto',
  darkMode: 'auto'
}


export default () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    const allProducts = await fetchAllProducts();
    dispatch(recievedProducts(allProducts))
  }
  useEffect(() => {
    dispatch(requestProducts())
    fetchData();
  })

  // Main Framework7 App component where we pass Framework7 params
  return (
    <App {...f7Params}>
      <View main url='/' browserHistory={true} browserHistorySeparator='' browserHistoryTabs={`push`} >
        <AccordionProducts />
      </View>
    </App>)
}

