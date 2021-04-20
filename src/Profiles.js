import React from 'react';
import Profile from './Profile';
import { NavLink, Route } from 'react-router-dom';
import WithRouterSample from './WithRouterSample'
import RouterHookSample from './RouterHookSample';

function Profiles({ match }) {

    const a = "위에서";

    return (
        <div>
            <h3>유저 목록</h3>
            <ul>
                <li><NavLink to="/profiles/velopert"
                activeStyle={{background: 'black', color: 'white'}} exact={true}>velopert</NavLink></li>
                <li><NavLink to="/profiles/homer"
                activeStyle={{background: 'black', color: 'white'}}>homer</NavLink></li>
            </ul>

            <Route path="/profiles" exct render={() => <div>사용자를 {a} 선택해주세요</div>} />
            <Route path="/profiles/:username" component={Profile} />

            <WithRouterSample />
            <RouterHookSample />
        </div>
    )
}

export default Profiles;