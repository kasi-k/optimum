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
import ViewCampaign from "./pages/leads/campaign/ViewCampaign";
import ViewLeads from "./pages/leads/leads/ViewLeads";

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
            <Route path="/leads">
              <Route index element={<Leads />} />
              <Route path="viewcampaign">
                <Route index element={<ViewCampaign />} />
              </Route>
              <Route path="viewleads">
                <Route index element={<ViewLeads />} />
              </Route>
            </Route>
            <Route path="/cms">
              <Route index element={<Cms />} />
              <Route path="viewblog">
                <Route index element={<ViewBlog />} />
              </Route>
              <Route path="editblog">
                <Route index element={<EditBlogs />} />
              </Route>
            </Route>
            <Route path="/reports" element={<Report />} />
            <Route path="/subscription" element={<SubscriptionPlans />} />
            <Route path="/setting">
              <Route index element={<Settings />} />
              <Route path="addrole">
                <Route index element={<AddRoleAccess />} />
              </Route>
              <Route path="editrole">
                <Route index element={<EditRoleAccess />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
