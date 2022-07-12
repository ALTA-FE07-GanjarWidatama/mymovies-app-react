import "./App.css";
import NavigationBar from "./component/NavigationBar";
import "./style/landingPage.css";
import Movie from "./component/Movie";
function App() {
  return (
    <div>
      {/* START OF NAVIGATION */}
      <div className="myBG">
        <NavigationBar />
      </div>
      {/* END OF NAVIGATION */}

      {/* START OF LIST MOVIE */}
      <div className="ListMovie">
        <Movie />
      </div>
      {/* END OF LIST MOVIE */}
    </div>
  );
}

export default App;
