import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Dashboard from "./pages/dashboard/Dashboard";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Gmb from "./pages/gmb/GMB";
import EditGmbSet from "./pages/gmb/EditGmbSet";
import Leads from "./pages/leads/Leads";
import Appointment from "./pages/appointment/Appointment";
import Finance from "./pages/finance/Finance";
import Report from "./pages/report/Report";
import Settings from "./pages/settings/Settings";
import AddRoleAccess from "./pages/settings/roles/AddRoleAcess";
import EditRoleAccess from "./pages/settings/roles/EditRoleAcess";
import SubscriptionPlans from "./pages/subscription/SubscriptionPlan";
import Cms from "./pages/cms/Cms";
import ViewBlog from "./pages/cms/Blogs/ViewBlogs";
import EditBlogs from "./pages/cms/Blogs/EditBlogs";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/" element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/gmb" element={<Gmb />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/editgmb" element={<EditGmbSet />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/cms" element={<Cms />} />
            <Route path="/viewblog" element={<ViewBlog />} />
            <Route path="/editblog" element={<EditBlogs />} />
            <Route path="/reports" element={<Report />} />
            <Route path="/subscription" element={<SubscriptionPlans />} />
            <Route path="/setting" element={<Settings />} />
            <Route path="/addrole" element={<AddRoleAccess />} />
            <Route path="/Editrole" element={<EditRoleAccess />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
