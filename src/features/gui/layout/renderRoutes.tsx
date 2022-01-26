import { FunctionComponent } from "react";
import { IRoute } from "../../../app/model/route.model";
import { Switch } from "react-router";
import { RenderRoute } from "./renderRoute";

export const RenderRoutes: FunctionComponent<{ routes: IRoute[] }> = ({ routes }) => {
  return (
    <Switch>
      { 
        routes.map(route => <RenderRoute { ...route } key={ route.key }/>)
      }
    </Switch>
  )
}