import React from 'react';
import { Switch, Route } from 'react-router-dom';
import  Home  from './component/Home';

import Layout from './hoc/Layout'
import RegisterLogin from './component/Register_Login';
import Register from './component/Register_Login/register';
import UserDashbord from './component/User';

const Routes = () => {
  return (
    <Layout> 
          <Switch>
              <Route path="/user/dashboard"  exact component={UserDashbord} />
              <Route path="/register" exact component={Register} />
              <Route path="/RegisterLogin" exact component={RegisterLogin}/>
              <Route path="/" exact component={Home} />
           </Switch> 
     </Layout>
   
  )
  
}

export default Routes;
