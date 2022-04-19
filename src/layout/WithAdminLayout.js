import React from 'react'
import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';
import AdminPage from '../component/AdminPage'
import Istatistikler from '../Pages/Istatistikler';
import Kullanicilar from '../Pages/Kullanicilar';
import Mailler from '../Pages/Mailler';
import IChartsBar from "../component/Cart"

function WithAdminLayout() {
  return (
    
    <div className='row'>
      <Router>
        <div className='col-2'>
            <AdminPage/>
        </div>
        <div className='col-10'>
            <Routes>
              <Route exact path='/' element={< IChartsBar />} />
              <Route exact path='/dashboard' element={<IChartsBar />} />
              <Route exact path='/istatistikler' element={<Istatistikler />} />
              <Route exact path='/kullanicilar' element={<Kullanicilar />} />
              <Route exact path='/mailler' element={<Mailler />} />
            </Routes>
        </div>
        </Router>
    </div>
    
  )
}

export default WithAdminLayout