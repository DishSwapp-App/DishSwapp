import "./App.css";
import { Router, Route, Switch } from "wouter";
import { createContext, useState } from "react";

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

export const ThemeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState("light");
  const toggleTHeme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <ThemeContext.Provider value={{ theme, toggleTHeme }}>
        <div className="App" id={theme}>
          <NavigationBar />
          <Router>
            <Route path="/login" component={Login}></Route>
            <Route path="/" component={Landing}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/dashboard" component={DashboardPage}></Route>
            <Route path="/add_recipe" component={AddRecipePage}></Route>
            <Route path="/feed" component={RecipeFeed}></Route>
            <Route path="/recipes/:id" component={SanityRecipe} />
            <Route path="/cookbook" component={SanityCookbook} />
            <Route path="/donate" component={Donate} />
          </Router>
        </div>
      </ThemeContext.Provider>
    </ClerkProvider>
  );
}

export default App;
