import { Outlet } from "react-router-dom";
import TheNavbar from "./components/TheNavbar";
import TheFooter from "./components/TheFooter";

function App() {
  return (
    <>
      <TheNavbar />
      <Outlet/>
      <TheFooter />
    </>
  );
}

export default App;
