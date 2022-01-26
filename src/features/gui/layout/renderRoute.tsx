import { Route } from "react-router-dom";
import { IRoute } from "../../../app/model/route.model";

export function RenderRoute(route: IRoute): any {
  return (
    <Route path={route.path}
           render={ props => (
                  <route.component {...props} />
           )}
    />
  )
}