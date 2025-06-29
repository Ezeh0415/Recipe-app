import { RecipesProvider } from "./providerContext/ProviderContext";
import MyRouter from "./Router.js/MyRouter";
import './scss/main.scss';

function App() {
  return (
    <div className="App">
      <RecipesProvider>
        <MyRouter />
      </RecipesProvider>
    </div>
  );
}

export default App;
