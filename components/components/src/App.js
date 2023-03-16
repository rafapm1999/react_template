import './App.css';
import Welcome from './components/Welcome';

function App() {
  //Este codigo JS vanilla

  /* const welcome = today => {
    let div = document.createElement("div");
    let h1 = document.createElement("h1")
    h1.innerHTML = `Hoy es ${today}
    div.appendchild(h1);
    let props = {
      userName: "Jhon",
      todayDate: today
    }
  } */

  //Es esto mismo pero en React

  return (
    <div className="main">
      <Welcome userName="Rafa"></Welcome>
      <Welcome userName="Anais"></Welcome>
      <Welcome userName="Miguel"></Welcome>
    </div>
  );
}

export default App;
