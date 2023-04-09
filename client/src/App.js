import "./App.css";
import React from "react";
import Routes from "./WebRoutes";




function App() {
    // const checkAuthenticated = async () => {
    //   try {
    //     const res = await fetch("http://localhost:5000/authentication/verify", {
    //       method: "POST",
    //       headers: { jwt_token: localStorage.token },
    //     });

    //     const parseRes = await res.json();

    //     parseRes === true
    //       ? setIsAuthenticated(true)
    //       : setIsAuthenticated(false);
    //   } catch (err) {
    //     console.error(err.message);
    //   }
    // };

    // useEffect(() => {
    //   checkAuthenticated();
    // }, []);

    // const [isAuthenticated, setIsAuthenticated] = useState(false);

    // const setAuth = (boolean) => {
    //   setIsAuthenticated(boolean);
    // };
  return (
    <Routes/>
  );
}

export default App;
