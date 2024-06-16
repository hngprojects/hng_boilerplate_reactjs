import { Outlet, useNavigation } from "react-router-dom";

export default function Layout() {
  const navigation = useNavigation();

  return (
    <>
      {navigation.state === "loading" && "Loading..."}
      <Outlet />
    </>
  );
}
