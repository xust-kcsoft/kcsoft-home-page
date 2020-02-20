import * as React from 'react';
import {MuiThemeProvider} from "@material-ui/core";
import TopBar from "./component/TopBar";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import HomePage from "./page/HomePage";
import BuildPage from "./page/BuildPage";
import InformationPage from "./page/InformationPage";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {RouteComponentProps} from "react-router-dom";
import GroupPage from "./page/GroupPage";
import Footer from './component/Footer';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#22264B"
        },
        secondary: {
            main: "#FFFFFF"
        }
    }
});

export type RouterValue =
    | "home"
    | "information"
    | "group"
    | "build"


interface IRouteProps {
    path: RouterValue
    component: React.ReactNode
}

interface IAppRouteParam{
    param: RouterValue
}

type IAppRouteProps = RouteComponentProps<IAppRouteParam>


interface IAppRouteState {
    param: RouterValue
}

class AppRoute extends React.Component<IAppRouteProps, IAppRouteState> {

    public readonly state = {
        param: this.castStringToRouteValue(this.props.match.params.param),
    };

    private readonly routers: IRouteProps[] = [
        {
            path: "home",
            component: <HomePage/>
        },
        {
            path: "information",
            component: <InformationPage/>
        },
        {
            path: "group",
            component: <GroupPage/>
        },
        {
            path: "build",
            component: <BuildPage/>
        },
    ];


    public readonly handleChange = (event: React.ChangeEvent, newValue: RouterValue) =>
        this.setState({
            param: this.castStringToRouteValue(newValue)
        });


    public render() {
        const param = this.state.param;
        let prop = this.routers.filter(p => p.path === param)[0];
        prop = prop === undefined ? this.routers[0] : prop;
        return (
            <React.Fragment>
                <TopBar route={param} handleChange={this.handleChange}/>
                {
                    prop.component
                }
            </React.Fragment>
        )
    }
    private castStringToRouteValue(value: string): RouterValue {
        let newValue = value as RouterValue;
        newValue = newValue === undefined ? "home" : newValue;
        return newValue;
    }
}




export default function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <BrowserRouter>
                <Switch>
                    <Redirect path={"/"} exact={true} to={"/home"}/>
                    <Route path={"/:param"} component={AppRoute}/>
                </Switch>
            </BrowserRouter>
            <Footer/>
        </MuiThemeProvider>
    );
}
