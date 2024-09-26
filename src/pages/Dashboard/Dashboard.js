import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import "../Logout/Logout.css";
import { logoutAction } from "../../store/actions/authAction";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  // console.log("isLoggedInisLoggedIn", isLoggedIn);

  const handleLogout = async () => {
    alert('Press logout')
    await dispatch(logoutAction());
    navigate("/");
  };

  return (
    <>
      <div className="dashboard-container">
        <h1>Dashboard</h1>
        <p>Welcome to the dashboard!</p>
      </div>
      <div className="logout-container">
        <h1>Logout</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
};

export default Dashboard;
