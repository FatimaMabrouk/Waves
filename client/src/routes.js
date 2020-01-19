import React from 'react';
import { Switch, Route } from 'react-router-dom';
import  Home  from './component/Home';
import Auth from './hoc/Auth';
import Layout from './hoc/Layout'
import ProductPage from './component/Product'

import RegisterLogin from './component/Register_Login';
import Register from './component/Register_Login/register';
import UserDashbord from './component/User';
import Shop from './component/Shop';

const Routes = () => {
  return (
    <Layout> 
          <Switch>
              <Route path="/user/dashboard"  exact component={Auth(UserDashbord, true)} />

              <Route path="/product_detail/:id" exact component={Auth(ProductPage, null)} />
              <Route path="/register" exact component={Auth(Register, false)} />
              <Route path="/Register_Login" exact component={Auth(RegisterLogin,false)}/>
              <Route path="/shop" exact component={Auth(Shop, null)} />
              <Route path="/" exact component={Auth(Home, null)} />
              
           </Switch> 
     </Layout>
   
  )

  
}

export default Routes;
