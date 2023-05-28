import './App.css';
import { CLERK_KEY } from './key';
import { ClerkProvider } from "@clerk/clerk-react";

const clerkPubKey = CLERK_KEY;

function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
    <div className="App">
      Working
    </div>
    </ClerkProvider>
  );
}

export default App;
