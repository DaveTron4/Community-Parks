import './App.css';
import Grid from './components/Grid';


const App = () => {

  return (
    <div className="mainContainer">
      <h1>Best Public Parks</h1>
      <h2>This is a list with some of the best parks in Atlanta, GA!! </h2>
      <Grid />
    </div>
  )
}

export default App