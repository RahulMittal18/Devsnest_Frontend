import "./App.css";
import store from "./store/store";
import { Provider } from "react-redux";
import Form from "./components/Form";
import DisplayFormData from "./components/DisplayFormData";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Form />
        <DisplayFormData />
      </div>
    </Provider>
  );
}

export default App;
