import { Switch } from 'react-router-dom';
import Home from './Pages/Home';
import LadingPage from './Pages/LadingPage';
import Upload from './Pages/Upload';
import { PrivateRoute, PublicRoute } from './routes';
import './scss/style.scss'
function App() {
  return (
    <>
    <Switch>
      <PublicRoute  component={LadingPage} path="/" exact/>
      <PrivateRoute component={Home} path="/home" />
    </Switch>
    </>
  );
}

export default App;
