import logo from './logo.svg';
import './App.css';
import {STATE_LOGIN, STATE_SIGNUP} from "./components/AuthForm";
import React from 'react'
import GAListener from "./components/GAListener";
import PageSpinner from "./components/PageSpinner";
import {LayoutRoute, EmptyLayout, MainLayout} from "./components/Layout";
import AuthForm from "./components/AuthForm";
import AuthPage from "./pages/AuthPage";
// import AuthModalPage from "./pages/AuthModalPage";
// import DashboardPage from "./pages/DashboardPage";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import './styles/reduction.scss'


const AlertPage = React.lazy(() => import('./pages/AlertPage'));
const AuthModalPage = React.lazy(() => import('./pages/AuthModalPage'));
const BadgePage = React.lazy(() => import('./pages/BadgePage'));
const ButtonGroupPage = React.lazy(() => import('./pages/ButtonGroupPage'));
const ButtonPage = React.lazy(() => import('./pages/ButtonPage'));
const CardPage = React.lazy(() => import('./pages/CardPage'));
const ChartPage = React.lazy(() => import('./pages/ChartPage'));
const DashboardPage = React.lazy(() => import('./pages/DashboardPage'));
const DropdownPage = React.lazy(() => import('./pages/DropdownPage'));
const FormPage = React.lazy(() => import('./pages/FormPage'));
const InputGroupPage = React.lazy(() => import('./pages/InputGroupPage'));
const ModalPage = React.lazy(() => import('./pages/ModalPage'));
const ProgressPage = React.lazy(() => import('./pages/ProgressPage'));
const TablePage = React.lazy(() => import('./pages/TablePage'));
const TypographyPage = React.lazy(() => import('./pages/TypographyPage'));
const WidgetPage = React.lazy(() => import('./pages/WidgetPage'));

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

class App extends React.Component {
  render() {
    return (
        <BrowserRouter basename={getBasename()}>
          <GAListener>
              <React.Suspense fallback={<PageSpinner />}>
            <Routes>
              <Route path="/login" element={
                <LayoutRoute
                    exact
                    layout={EmptyLayout}
                    component={props => (
                        <AuthPage {...props} authState={STATE_LOGIN} />
                    )}
                />
              }
              />
              <Route path="/signup" element={
                <LayoutRoute
                    exact
                    layout={EmptyLayout}
                    component={props => (
                        <AuthPage {...props} authState={STATE_SIGNUP} />
                    )}
                />}
              />
              <Route path="/" element={
                  <MainLayout breakpoint={this.props.breakpoint}>
                  </MainLayout>
                  }>
                  <Route exact path="" element={
                      <DashboardPage/>
                  }/>
                  <Route exact path="/cards" element={
                      <CardPage/>
                  }/>
                  <Route exact path="/login-modal" element={
                      <AuthModalPage/>
                  }/>
                  <Route exact path="/buttons" element={
                      <ButtonPage/>
                  }/>
                  <Route exact path="/widgets" element={
                      <WidgetPage/>
                  }/>
                  <Route exact path="/typography" element={
                      <TypographyPage/>
                  }/>
                  <Route exact path="/alerts" element={
                      <AlertPage/>
                  }/>
                  <Route exact path="/tables" element={
                      <TablePage/>
                  }/>
                  <Route exact path="/badges" element={
                      <BadgePage/>
                  }/>
                  <Route exact path="/button-groups" element={
                      <ButtonGroupPage/>
                  }/>
                  <Route exact path="/dropdowns" element={
                      <DropdownPage/>
                  }/>
                  <Route exact path="/progress" element={
                      <ProgressPage/>
                  }/>
                  <Route exact path="/modals" element={
                      <ModalPage/>
                  }/>
                  <Route exact path="/forms" element={
                      <FormPage/>
                  }/>
                  <Route exact path="/input-groups" element={
                      <InputGroupPage/>
                  }/>
                  <Route exact path="/charts" element={
                      <ChartPage/>
                  }/>
              </Route>

            </Routes>
              </React.Suspense>
          </GAListener>
        </BrowserRouter>
    )
  }
}



export default App;
