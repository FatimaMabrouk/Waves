import React from 'react';
import { Switch, Route } from 'react-router-dom';
import  Home  from './component/Home';

import Layout from './hoc/Layout'
import RegisterLogin from './component/Register_Login'

const Routes = () => {
  return (
    <Layout> 
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/RegisterLogin" exact component={RegisterLogin}/>
           </Switch> 
     </Layout>
   
  )
  
}

export default Routes;
