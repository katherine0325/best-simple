import React from 'react'
import { render } from 'react-dom'
import { Router, Route } from 'react-router';

// 引入页面
import Pageone from './routes/pageone/Pageone'
import Pagetwo from './routes/pagetwo/Pagetwo'

// 引入路由
var Routes = (
  <Router>
    <Route path="/" component={Pageone} />
    <Route path="/pagetwo" component={Pagetwo} />
  </Router>
)

// 渲染至html
render(Routes, document.getElementById('root'));