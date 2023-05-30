import './App.css';
import { Router, Route, Switch } from "wouter";
import {

  ClerkProvider,
  
} from "@clerk/clerk-react";
//Pages import
import Landing from './Landing/Home';
import Login from './Login/LoginPage';
import AddRecipePage from './Add_Recipe/add_recipe_page';
import NavigationBar from './Nav/nav';
import About from './About/about';
import Feed from './Feed/feed';
import Recipe from './Recipe/Recipe';
import DashboardPage from './Dashboard/DashboardPage';
import Cookbook from './Cookbook/Cookbook';

const clerkPubKey = process.env.REACT_APP_CLERK_KEY;

function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
    <div className="App">
    <NavigationBar />
    <Router>
    <Switch>
    <Route path="/login" component={Login}></Route>
    <Route path='/' component={Landing}></Route>
    <Route path="/about" component={About}></Route>
    

    <Route path="/dashboard" component={DashboardPage}></Route>


    <Route path='/add_recipe' component={AddRecipePage}></Route>
    <Route path="/feed" component={Feed}></Route>
    <Route path="/recipes/:id" component={Recipe} />
    <Route path="/cookbook" component={Cookbook} />



    

    </Switch>
    </Router>
  
    </div>
    </ClerkProvider>
  );
}

export default App;
