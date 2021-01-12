import logo from "./logo.svg";
import "./App.css";
import Display from "./components/Display";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Display />
      </div>
    </Provider>
  );
}

export default App;
