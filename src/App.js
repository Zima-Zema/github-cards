import './App.css';
import Card from './card/Card';
function App({title}) {
  return (
    <div>
        <div className="header">{title}</div>
        <Card />
    </div>
  );
}

export default App;
