import React from "react";
import { Link } from "wouter";
import "./dashboard.css";
import { useUser } from "@clerk/clerk-react";

const Dashboard = () => {
  const user = useUser();
  const authorName = user.user.username;

  return (
    <div className="dashboard">
      <div className="container-fluid">
        <div
          className="row justify-content-center align-items-center"
          style={{ height: "max-content" }}
        >
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Recipe Feed</h5>
                <p className="card-text">View and Explore Recipes</p>
                <Link href="/feed">
                  <button type="button" className="btn btn-lg btn-block">
                    View Recipes
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Add Recipe</h5>
                <p className="card-text">Click here to add a new recipe.</p>
                <Link href="/add_recipe">
                  <button type="button" className="btn btn-lg btn-block">
                    Add Recipe
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">My Virtual CookBook</h5>
                <p className="card-text">
                  View and manage your uploaded recipes.
                </p>
                <Link to="/cookbook" state={{ data: authorName }}>
                  <button type="button" className="btn btn-lg btn-block">
                    My Cookbook
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
