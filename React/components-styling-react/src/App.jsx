import { Outlet } from "react-router-dom";
import TheNavbar from "./components/TheNavbar";

function App() {
  return (
    <>
      <TheNavbar />
       <Outlet/>
    </>
  );
}

export default App;
