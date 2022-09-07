import './App.css';
import Navbar from './components/Navbar/Navbar';
import ServerBlock from './containers/ServerBlock/ServerBlock';

function App() {
  return (
    <div style={{display: "flex"}}>
      <Navbar />
      <ServerBlock />
    </div>
  );
}

export default App;
