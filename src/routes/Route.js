import React, { createContext } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  RouteProps,
  useLocation,
  Navigate,
  Outlet,
  useNavigate,
} from 'react-router-dom';
import RouteSwitch from './RouteSwitch';
import NotFound from '../views/NotFound';
import Home from '../views/Home';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Login from '../views/Auth/Login';
import MainDashboard from '../components/DashNav/MainDashboard';
import CreateUser from '../views/CreateUser';
import UserManagementProfile from '../views/UserManagementProfile';
import ApproveEvent from '../views/ApproveEvent';
import CreateEvent from '../views/CreateEvent';
import AddMosque from '../views/AddMosque';
import MosqueDetail from '../views/MosqueDetail';
import AddOrganization from '../views/AddOrganization';
import CustomerProfile from '../views/CustomerProfile';
import PostFeed from '../views/PostFeed';
import AllUsers from '../views/AllUsers';
import AllEvents from '../views/AllEvents';
import AllMosques from '../views/AllMosques';
import AllCustomers from '../views/AllCustomers';
import RolesANdPermissions from '../views/RolesANdPermissions';
import CreateRole from '../views/CreateRole';
import AllOrganization from '../views/AllOrganization';
import ViewOrganization from '../views/ViewOrganization';
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const UserContext = createContext();

const RequireAuth = ({ allowedRoles }) => {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem('meccaUser') || '{}');
  // return user.fullName ? (
  //   <Outlet />
  // ) : (
  //   <Navigate to={'/login'} state={{ from: location }} replace />
  // );
  console.log(allowedRoles?.includes(user.type), allowedRoles, user.type);
  return allowedRoles.includes(user.type) ? (
    <Outlet />
  ) : user?.fullName ? (
    <Navigate to={'/unauthorized'} state={{ from: location }} replace />
  ) : (
    <Navigate to={'/login'} state={{ from: location }} replace />
  );
};

const RequireNoAuth = () => {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem('meccaUser') || '{}');
  return user.fullName ? (
    <Navigate to="/dashboard" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};

export default function AppRoute() {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route element={<MainDashboard />}>
          <Route exact index element={<Home />} />
          <Route exact path="/create-user" element={<CreateUser />} />
          <Route exact path="/all-user" element={<AllUsers />} />

          <Route
            exact
            path="/user-profile"
            element={<UserManagementProfile />}
          />
          <Route exact path="/approve-event" element={<ApproveEvent />} />
          <Route exact path="/all-event" element={<AllEvents />} />

          <Route exact path="/create-event" element={<CreateEvent />} />
          <Route exact path="/add-mosque" element={<AddMosque />} />
          <Route exact path="/all-mosque" element={<AllMosques />} />

          <Route exact path="/mosque-detail" element={<MosqueDetail />} />
          <Route exact path="/all-organization" element={<AllOrganization />} />
          <Route exact path="/organization-detail" element={<ViewOrganization />} />
          <Route exact path="/add-organization" element={<AddOrganization />} />
          <Route exact path="/all-customers" element={<AllCustomers />} />
          <Route exact path="/customer-profile" element={<CustomerProfile />} />
          <Route exact path="/posts" element={<PostFeed />} />
          <Route
            exact
            path="/roles-and-permissions"
            element={<RolesANdPermissions />}
          />
          <Route exact path="/create-role" element={<CreateRole />} />
        </Route>
      </Routes>
    </div>
  );
}
