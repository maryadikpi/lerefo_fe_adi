import Link from "next/link";
import { useRouter } from 'next/router'
import kpiHelper from "../../kpi_helper"
import {USER_LOGIN} from "../../config/const_url"

function  Sidebar() {
  const router = useRouter()

  const handleLogout = (e) => {
    e.preventDefault()
    // Do logout process here with backend
    
    // Change authStatus
    kpiHelper.unsetLogin()
  
      console.log('login okie')
  
    // Redirect to dashboard
      // @to do
      // Use CONSTANT PATH HERE
      router.push({pathname: USER_LOGIN})
  }
  return (
    <aside className="main-sidebar sidebar-light-primary margin-top--60">
      <Link as="/admin/dashboard" href="/admin/dashboard">
        <a className="brand-link">
          <img
            src="../../dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-1"
          />
          <span className="brand-text font-weight-light">Lerero</span>
        </a>
      </Link>

      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src="../../dist/img/user2-160x160.jpg"
              className="img-circle elevation-1"
              alt="User Image"
            />
          </div>
          <div className="info">
            <Link as="/admin/user/profile" href="/admin/user/profile">
              <a className="d-block">Alexander Pierce</a>
            </Link>
          </div>
        </div>

        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item">
              <Link as="/admin/dashboard" href="/admin/dashboard">
                <a className="nav-link">
                  <i className="nav-icon fa fa-tachometer-alt"></i>
                  <p>Dashboard</p>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <div>
                <a onClick={handleLogout} className="nav-link">
                  <i className="nav-icon fa fa-sign-out-alt"></i>
                  <p>Logout</p>
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  )
};

export default Sidebar;
