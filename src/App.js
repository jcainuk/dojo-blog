import './App.css';
import Navbar from './Navbar';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  // const person = {name: Yoshi, age: 30}
  const link = "http://www.google.com";

  return (
    <div className="App">
      <Navbar />
     <div className="content">
       <h1>App Component</h1>
     
     </div>
    </div>
  );
}

export default App;
