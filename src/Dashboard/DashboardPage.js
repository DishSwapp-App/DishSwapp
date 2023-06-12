import Dashboard from "./dashboard";
import Login from "../Login/LoginPage";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import "./dashboard.css";

function DashboardPage() {
  return (
    <div className="dashboard_Page">
      <SignedIn>
        <Dashboard />
      </SignedIn>

      <SignedOut>
        <Login />
      </SignedOut>

      <br></br>
    </div>
  );
}

export default DashboardPage;
