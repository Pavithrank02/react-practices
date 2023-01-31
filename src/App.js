import SignupForm from './components/Formik';
import './App.css';
import HOC from './components/HOC';

const App = ( {value}) => {

  console.log(value);
  
  return (
    <div className="App">
      <h2>{value.name}</h2>
      <h2>{value.role}</h2>
      <h2>{value.company}</h2>
    </div>
  );
}

export default HOC(App);
