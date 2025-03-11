import { useRoutes } from "react-router-dom";
import { routes } from "../../routes";

function AllRoute() {
  const elemnts = useRoutes(routes);
  return (
    <>
      {elemnts}
    </>
  );
}

export default AllRoute;