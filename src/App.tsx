import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import RoutesPage from "./routes";
import { GlobalStyles } from "./styles";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <RoutesPage />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
