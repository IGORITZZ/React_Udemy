// import logo from './logo.svg';

//components
import FirstComponent from './components/FistComponent.jsx';
import TemplateExpressions from './components/TemplateExpressions.jsx';
//styles ou css
import './App.css';
import MyComponent from './components/MyComponents.jsx';
import Events from './components/Events.jsx';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent/>
      <TemplateExpressions/>
      <MyComponent/>
      <Events/>
    </div>
  );
}

export default App;
