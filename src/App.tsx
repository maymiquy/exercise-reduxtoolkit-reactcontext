import Counter from "@/components/partials/Counter";
import { ThemeProvider } from "@/context/ThemeContext";
import { Provider } from "react-redux";
import { store } from "@/libs/store";

function App() {
 return (
  <>
   <ThemeProvider>
    <Provider store={store}>
     <Counter />
    </Provider>
   </ThemeProvider>
  </>
 );
}

export default App;
