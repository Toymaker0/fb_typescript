import React, { Fragment } from 'react'
import { HashRouter, Route, Router, Routes } from 'react-router-dom'
import Login from '../login/Login'

const AppRouter = () => {
  return (
    <Fragment>
        <HashRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>

                
            </Routes>
        </HashRouter>
    </Fragment>
  )
}

export default AppRouter