import { Provider } from "react-redux";
import { store } from "./libs/store";
import Counter from "./components/partials/Counter";

function App() {
 return (
  <>
   <Provider store={store}>
    <Counter />
   </Provider>
  </>
 );
}

export default App;
