
import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Store from './components/store/Store';
import { Provider } from "react-redux"


function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Header />
        <Outlet />

      </div>
    </Provider>

  );
}

export default App;
