import { Provider } from "./Context";
import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer"

function App() {
  return (
    <Provider>
      <Navbar />
      <Main />
      <Footer />
    </Provider>
  );
}

export default App;
