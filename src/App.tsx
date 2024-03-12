import { BrowserRouter } from "react-router-dom";
import RoutesPage from "./routes";
import { GlobalStyles } from "./styles";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <RoutesPage />
      </BrowserRouter>
    </>
  );
}

export default App;
