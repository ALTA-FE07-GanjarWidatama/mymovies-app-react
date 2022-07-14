import "./Style/index.css";
import Header from "./component/Header";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <div>
      {/* START OF NAVIGATION */}
      <div className="myBG">
        <Header />
      </div>
      {/* END OF NAVIGATION */}

      {/* START OF LIST MOVIE */}
      <div className="ListMovie">
        <HomePage />
      </div>
      {/* END OF LIST MOVIE */}
    </div>
  );
}

export default App;
