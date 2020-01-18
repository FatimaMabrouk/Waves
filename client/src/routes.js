import React from 'react';
import { Switch, Route } from 'react-router-dom';
import  Home  from './component/Home';
import Auth from './hoc/Auth';

import Layout from './hoc/Layout'
import RegisterLogin from './component/Register_Login';
import Register from './component/Register_Login/register';
import UserDashbord from './component/User';

const Routes = () => {
  return (
    <Layout> 
          <Switch>
              <Route path="/user/dashboard"  exact component={Auth(UserDashbord, true)} />


              <Route path="/register" exact component={Auth(Register, false)} />
              <Route path="/Register_Login" exact component={Auth(RegisterLogin,false)}/>
              <Route path="/" exact component={Auth(Home, null)} />
           </Switch> 
     </Layout>
   
  )

  
}

export default Routes;
