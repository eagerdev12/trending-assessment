import { FunctionComponent } from "react"
import { IRoute } from "../../../app/model/route.model"
import { BoxHeader } from "../components/boxHeader";
import { Header } from "../components/header";
import { BoxContent } from "./boxContent";
import { Box } from './box';
import { RenderRoutes } from "./renderRoutes";
import { BrowserRouter } from "react-router-dom";


export const Layout: FunctionComponent<{ routes: IRoute[] }> = (props) => {
  return (
    <BrowserRouter>
      <Header />
        <Box>
          <BoxContent>
            <BoxHeader />
            <RenderRoutes routes={props.routes}/>
          </BoxContent>
        </Box>
    </BrowserRouter>
  );
}