import "./App.css";
import { Router, Route, Switch } from "wouter";

import { ClerkProvider } from "@clerk/clerk-react";
//Pages import
import Landing from "./Landing/Home";
import Login from "./Login/LoginPage";
import NavigationBar from "./Nav/nav";
import About from "./About/about";
import DashboardPage from "./Dashboard/DashboardPage";
import Donate from "./Donate/donate";
import SanityRecipe from "./Recipe/sanityRecipe";
import RecipeFeed from "./Feed/recipeFeed";
import SanityCookbook from "./Cookbook/SanityCookbook";
import AddRecipePage from "./Add_Recipe/add_recipe_page";
const clerkPubKey = process.env.REACT_APP_CLERK_KEY;

function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <div className="App">
        <NavigationBar />
        <Router>
          <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/" component={Landing}></Route>
            <Route path="/about" component={About}></Route>

            <Route path="/dashboard" component={DashboardPage}></Route>

            <Route path="/add_recipe" component={AddRecipePage}></Route>
            <Route path="/feed" component={RecipeFeed}></Route>
            <Route path="/recipes/:id" component={SanityRecipe} />
            <Route path="/cookbook" component={SanityCookbook} />

            <Route path="/donate" component={Donate} />
          </Switch>
        </Router>
      </div>
    </ClerkProvider>
  );
}

export default App;
