import React from "react";
import IChartsBar from "./Cart"
import "./AdminPage.css";
import { Link } from "react-router-dom";

function AdminPage() {
  return (
        <div className="sidebarContainer">
          <div className="sidebar_container">
            <div className="sidebar">
              {/* Rıdvan Üçdağ
                  linkedin.com/in/ridvanucdag/
                  github.com/ridvanucdag */}
                  
                <div className="group">
                <h3>
                  <span style={{ fontSize: 19}}>Rıdvan Üçdağ - Admin</span>
                </h3>
                <div className="menu">
                  
                <div className='item'>
                     <div className='icon'>
                     <i className="fa fa-dashboard"></i>
                     </div>
                     <span>Dashboard</span>
                      </div>
                    <div className='item'>
                     <div className='icon'>
                     <i className="fa fa-bar-chart"></i>
                     </div>
                     <span>İstatistikler</span>
                      </div>
                    <div className='item'>
                     <div className='icon'>
                     <i className="fa fa-users"></i>
                     </div>
                     <span>Kullanıcılar</span>
                      </div>
                     <div className='item'>
                     <div className='icon'>
                     <i className="fa fa-envelope-open"></i>
                     </div>
                     <span>Mailler</span>
                      </div>
                </div>
              </div>
                  {/* Rıdvan Üçdağ
                  linkedin.com/in/ridvanucdag/
                  github.com/ridvanucdag */}
              <div className="group">
                <h3>
                  <span style={{ fontSize: 15 }}>Raporlar</span>
                </h3>
                <div className="menu">
                <div className='item'>
                     <div className='icon'>
                     <i className="fas fa-file-alt"></i>
                     </div>
                     <span>Sayfa</span>
                      </div>
                    <div className='item'>
                     <div className='icon'>
                     <i className="fa fa-times"></i>
                     </div>
                     <span>Hata</span>
                      </div>
                    <div className='item'>
                     <div className='icon'>
                     <i className="fa fa-sign-in"></i>
                     </div>
                     <span>Giriş</span>
                      </div>
                     <div className='item'>
                     <div className='icon'>
                     <i className="fa fa-user-times"></i>
                     </div>
                     <span>Kullanıcı</span>
                      </div>
                </div>
              </div>
              {/* Rıdvan Üçdağ
                  linkedin.com/in/ridvanucdag/
                  github.com/ridvanucdag */}
              <div className="group">
                <h3>
                  <span style={{ fontSize: 15 }}>Ayarlar</span>
                </h3>
                <div className="menu">
                <div className='item'>
                     <div className='icon'>
                     <i className="fa fa-globe"></i>
                     </div>
                     <span>Genel</span>
                      </div>
                    <div className='item'>
                     <div className='icon'>
                     <i className="fa fa-university"></i>
                     </div>
                     <span>Site</span>
                      </div>
                    <div className='item'>
                     <div className='icon'>
                     <i className="fa fa-bolt"></i>
                     </div>
                     <span>Bilgilerim</span>
                      </div>
                     <div className='item'>
                     <div className='icon'>
                     <i className="fa fa-user-secret"></i>
                     </div>
                     <span>Şifre</span>
                      </div>
                </div>
              </div>
            </div>
          </div>
          <div className="body_container">
            {/* {prop.container ? prop.container : <IChartsBar/> } */}
            <IChartsBar/> 
          </div>
          </div>
  );
}

export default AdminPage;
