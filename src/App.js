import './App.css';
import { CLERK_KEY } from './key';
import { Router, Route, Switch } from "wouter";
import {

  ClerkProvider,
  
} from "@clerk/clerk-react";
import Landing from './Landing/Home';
import Login from './Login/LoginPage';
import AddRecipe from './Add_Recipe/addRecipe';
import NavigationBar from './Nav/nav';
import About from './About/about';
import Feed from './Feed/feed';
import Recipe from './Recipe/Recipe';


const clerkPubKey = CLERK_KEY;

function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
    <div className="App">
    <NavigationBar />
    <Router>
    <Switch>
    <Route path="/dashboard" component={Login}></Route>
    <Route path='/' component={Landing}></Route>
    <Route path='/add_recipe' component={AddRecipe}></Route>
    <Route path="/about" component={About}></Route>
    <Route path="/feed" component={Feed}></Route>
    <Route path="/recipes/:id" component={Recipe} />

    </Switch>
    </Router>
    </div>
    </ClerkProvider>
  );
}

export default App;
