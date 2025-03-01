import './App.css';
import backgroundImage from './images/background.jpeg';

function App() {
  return (
    <div style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      width: "100vw",
      margin: 0,
      padding: 0,
      overflow: 'hidden'
    }}>
      <h1 style={{ color: "white", textAlign: "center", paddingTop: "50px" }}>Benvenuto!</h1>
    </div>
  );
}

export default App;