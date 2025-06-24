import { Outlet } from "react-router-dom";
import CustomCursor from "../Components/CustomCursor";

const Layout = () => {
  return (
    <>
      <CustomCursor />
      <Outlet />
    </>
  );
};

export default Layout;
