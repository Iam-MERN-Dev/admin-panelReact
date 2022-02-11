import { Link } from "react-router-dom";
import {
  AttachMoney,
  BarChart,
  ChatBubbleOutline,
  DynamicFeed,
  LineStyle,
  MailOutline,
  PermIdentity,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
  WorkOutline,
} from "@material-ui/icons";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWraper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            <li className="sidebarItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quik Menu</h3>
          <ul className="sidebarList">
            <Link  to="/users" className="link">
            <li className="sidebarItem ">
              <PermIdentity className="sidebarIcon" />
              Users
            </li>
            </Link>
            <Link to="/products" className="link">
            <li className="sidebarItem">
              <Storefront className="sidebarIcon" />
              Products
            </li>
            </Link>
            <li className="sidebarItem">
              <AttachMoney className="sidebarIcon" />
              Transaction
            </li>
            <li className="sidebarItem ">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarItem ">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarItem">
              <Timeline className="sidebarIcon" />
              Anlytics
            </li>
            <li className="sidebarItem">
              <Report className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
