import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserConextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserConextProvider>
      <h1>React Video for context API</h1>
      <Login />
      <Profile />
    </UserConextProvider>
  );
}

export default App;
