//import { LearnComponents } from "./components/LearnComponents";

//import { Students } from "./components/students";

//import { Header } from "./components/Header";
 
import "./assets/app.css";
import { Example } from "./components/Example";
//import { Array } from "./components/Array";



function App() {
  const items =[
    {id:1, name: "Item 1"},
    {id:2, name: "Item 2"},
    {id:3, name: "Item 3"},
  ]

  

  return( 
    <>
    {/* <div> 
    Prakash React</div>
    <LearnComponents/>
    {/* <Header />*/} 

    
    {/* <Students Name="Muthu" Age={24} isMarried={true} />
  
    <Students Name="Prakash" Age={22} isMarried={false} />
    
    <Students Name="Sathish" Age={32} isMarried={false} />

    <Students  Name="saran" Age={21} isMarried={true} />
    <child>
      <p>This child pagraph1</p>
      <p>This is child pagraph 2</p>
    </child> 
    
    <Array  items={items}/>*/}

    <Example  color="Blue"/>
   
</>


    
     
  );
  
}

export default App;
