
import './App.css';
import Card from './components/Card';
function App() {
  return (
    <div className="main">
      <Card name="Pink" code = "#FF6663" className="cards"></Card>
      <Card name="Grey" code = "#333333"></Card>
      <Card name="Black" code = "#000000"></Card>
      <Card name="Gren" code = "#38BB14"></Card>
      <Card name="Red" code = "#C90B0B"></Card>
      <Card name="Orange" code = "#FF8000"></Card>
      <Card name="Yellow" code = "#FFF500"></Card>
      <Card name="Light Gray" code = "#CCCCCC"></Card>
      <Card name="Purple" code = "#7E41A2"></Card>
      <Card name="Brown" code = "#C14911"></Card>
    </div>
  );
}

export default App;
