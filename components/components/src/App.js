import './App.css';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="main">
      <Welcome name="Rafa"></Welcome>
      <Welcome name="Anais"></Welcome>
      <Welcome name="Miguel"></Welcome>
    </div>
  );
}

export default App;
