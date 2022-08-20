import './App.css';
import {useEffect, useState} from 'react';


function App() {

  let hero = {
    id:1,
    name:null,
    strength:null,
    intelligence:null,
    weapons:null,
    planet:null,
    imageUrl:null
  };

 

  let [superheros, setSuperheros] = useState(

    [
      // {
      //   name:"Thor",
      //   strength:100,
      //   intelligence:65,
      //   weapons:"Mjolnir /Strombreker",
      //   planet:"Asgurd",
      //   imageUrl:"https://images.indianexpress.com/2019/09/avengers-endgame-chris-hemsworth-fat-thor-1200.jpg"
      // },
      // {
      //   name:"Superman",
      //   strength:100,
      //   intelligence:95,
      //   weapons:"",
      //   planet:"Krypton",
      //   imageUrl:"https://cdn.theatlantic.com/thumbor/nn7Ai4go9fBsDFd3V_wuLcd4FD8=/0x0:1920x1080/1600x900/media/img/mt/2015/05/man/original.jpg"
      // }
    ]

  )

  let [createMargin, setCreateMargin] = useState(-30);

  useEffect(()=>{

    let localData=localStorage.getItem("superheros");

    if(localData===null){
      localStorage.setItem("superheros",JSON.stringify([]));
    }
    else{
      setSuperheros(JSON.parse(localData));
    }
  },[])

  function createSuperhero(){
    let tempArray=[...superheros,hero];
    setSuperheros(tempArray);

    localStorage.setItem("superheros",JSON.stringify(tempArray));
  }

  function deleteSuperhero(index){
    let tempArray=superheros;
    tempArray.splice(index,1);
    setSuperheros(tempArray);
    localStorage.setItem("superheros",JSON.stringify(tempArray));
    setCreateMargin(-30);
  }

  return (
    <div className="APP">

      <div className="create-form" style={{marginLeft:createMargin+"%"}}>

        <h1 className='form-title'>Add Superhero</h1>

        <input type="text" onChange={(e)=>{
          hero.name=e.target.value;
        }} placeholder='Enter Name' />

        <input type="text" onChange={(e)=>{
          hero.strength=e.target.value;
        }} placeholder='Enter Strength' />

        <input type="text"
        onChange={(e)=>{
          hero.intelligence=e.target.value;
        }} placeholder='Enter Intelligence' />

        <input type="text" onChange={(e)=>{
          hero.weapons=e.target.value;
        }} placeholder='Enter Weapons' />

        <input type="text" onChange={(e)=>{
          hero.planet=e.target.value;
        }} placeholder='Enter Planet' />

        <input type="text" onChange={(e)=>{
          hero.imageUrl=e.target.value;
        }} placeholder='Enter Image Link' />

        <button className="form-btn" onClick={createSuperhero}>Create</button>

      </div>


      <div className="header">
        <h1 className="page-title">Superheros</h1>
        <button className='btn' onClick={()=>{
          setCreateMargin(0);
        }}>Add heros</button>
      </div>

      <div className="display">


        {
          superheros.map((superhero, index) =>{
            return(

              <div key={index} className="superhero">
              <div className="super-img">
                <img className="img" src={superhero.imageUrl} alt="" />
              </div>
              <div className="super-details">
                <div>
                  <h2 className='name'>{superhero.name}</h2>
                  <h3 className='planet'>{superhero.planet}</h3>
                </div>
                
                <div className="powerstats">
                  <p>Strength</p>
                  <div className='full'>
                    <p className='strength' style={{width:superhero.strength+"%"}}></p>
                  </div>
                  <p>Intelligence</p>
                  <div className='full'>
                    <p className='intelligence' style={{width:superhero.intelligence+"%"}}></p>
                  </div>
                </div>
                <div className="actions">
                <i className="fa-solid fa-file-pen update"></i>
                <i className="fa-solid fa-trash delete" onClick={()=>{
                  deleteSuperhero(index);
                }}></i>
              </div>
              </div>
              
            </div>

            )
          })
        }


      </div>

    </div>
  );
}

export default App;
