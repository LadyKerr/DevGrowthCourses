import { Fragment } from 'react';
import Courses from './components/Courses';
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Fragment>
      <NavBar/>
      <Courses />
    </Fragment>
  );
}

export default App;
