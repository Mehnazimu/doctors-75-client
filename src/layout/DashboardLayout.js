import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import NavBar from '../Pages/Shared/NavBar/NavBar';

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email)
  return (
    <div>
      <NavBar></NavBar>
      <div className="drawer drawer-mobile">
        <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Outlet></Outlet>


        </div>
        <div className="drawer-side">
          <label htmlFor="dashboardDrawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">

            <li><Link to='/dashboard'>My Appointments</Link></li>
            {
              isAdmin && <>
                <li><Link to='/dashboard/allusers'>All users</Link></li>
                <li><Link to='/dashboard/adddoctor'>Add A Doctor</Link></li>
                <li><Link to='/dashboard/managedoctors'>Manage Doctors</Link></li>
              </>
            }

          </ul>

        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;