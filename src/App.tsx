import { Provider } from "react-redux";
import { store } from "./redux/store";
import BrjCms from "./components/BrjCmsCore";

function App() {
  return (
    <Provider store={store}>
      <BrjCms />
    </Provider>
  );
}

export default App;
