import { Route, HashRouter, Switch, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import TipsPage from "./features/tips/TipsPage";
import { toTasks, toTask, toTips } from "./routes";
import Navigation from "./Navigation";

export default () => (
  <HashRouter>
    <Navigation />
    <Switch>
      <Route path={toTask()}>
        <TaskPage />
      </Route>
      <Route path={toTasks()}>
        <TasksPage />
      </Route>
      <Route path={toTips()}>
        <TipsPage />
      </Route>
      <Route path="/">
        <Redirect to={toTasks()} />
      </Route>
    </Switch>
  </HashRouter >
  
);