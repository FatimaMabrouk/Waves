import React from 'react';
import UserLayout from '../../hoc/user';
import MyButton from '../uitls/buttun';

const UserDashboard = ({user}) => {
    return (
        <UserLayout>
            <div>
                
                <div className="user_nfo_panel">
                    <h1>User information</h1>
                    <div>
                        <span>{user.userData.name} the name will appare after fixing auth in login</span>
                        <span>{user.userData.lastname} will appare after fixing auth</span>
                        <span>{user.userData.email} will appare after fixing auth</span>
                    </div>
                    <MyButton
                        type="default"
                        title="Edit account info"
                        linkTo="/user/user_profile"
                    />
                </div>

                <div className="user_nfo_panel">
                    <h1>History purchases</h1>
                    <div className="user_product_block_wrapper">
                            history
                    </div>            
                </div>
                
            </div>
        </UserLayout>
        
    );
};

export default UserDashboard;