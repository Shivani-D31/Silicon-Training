import logo from './logo.svg';
import './App.css';
import Card from './components/Card';


function App() {
  const tech=[
    {
      name:"web dev",
      tech:"html"
    },
    {
      name:"mern",
      tech:"react"
    },
    {
      name:"PL",
      tech:"python"
    }
  ]
  return (
    
    <div className="App">

{  tech.map((item,index)=>(
    <Card key={index} name={item.name} tech={item.tech}/>
  ))
     }
    
      
    </div>
  );
}

export default App;
