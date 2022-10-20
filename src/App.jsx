import "./App.css";
import { Form } from "./components/FormWithYup/Form";
import  BasicForm  from "./components/BasicForm/BasicForm";

const App = () => {
  return (
    <div className="App">
      <Form />  
      <BasicForm/>
    </div>
  );
};
export default App;



