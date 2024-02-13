import logo from './logo.svg';
import './App.css';
import CentralContainer from './Central-container';
import Header from './Header';
import SideBar from './Sidebar'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='Main'>
        <SideBar/>
        <CentralContainer/>
      </div>
    </div>
  );
}

export default App;
