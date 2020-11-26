import React, { Children } from 'react'
import { Switch, Route } from 'react-router-dom'
import Navs from '../Navs'
import Home from '../../pages/Home'
import Starred from '../../pages/Starred'
import Title from '../Title'

function MainPageLayout({children}) {
  return (
    <div>
      <Title title="Box office" subtitle="Are you looking for a movie of an actor?"/>
      <Navs />
      {children}
    </div>
  );
}

export default MainPageLayout;
