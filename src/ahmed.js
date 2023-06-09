

/*const HappyToSad=["Happy","Mid","Sad"];
  const sadtohappy=new Array(...HappyToSad).reverse();
  return (
    <div className='App'>
    <div style={{"display": "flex", "gap":"30px"}}>
    { HappyToSad.map((element) => <p>{element}</p>) }
    </div>
  <div style={{"display": "flex", "gap":"30px"}}>
 
              
  
    { sadtohappy.map((element) => <p>{element}</p>)}
  
    </div>
    </div>
  );*/

  import React, { useState } from "react";
  import { v4 as uuidv4 } from "uuid";
  
  function App() {
    const [people, setPeople] = useState([
      {
        id: uuidv4(),
        name: "",
        moods: [],
        energies: []
      },
      {
        id: uuidv4(),
        name: "",
        moods: [],
        energies: []
      }
    ]);
  
    const renderPeople = () => {
      return people.map((person, index) => {
        return (
          <div key={person.id}>
            <h3>Person {index + 1}</h3>
            <label>Name:</label>
            <input
              type="text"
              value={person.name}
              onChange={(event) => handlePersonNameChange(event, index)}
            />
            <div>
              <label>Moods:</label>
              {person.moods.map((mood, moodIndex) => (
                <div key={moodIndex}>
                  <input
                    type="number"
                    placeholder="Timestamp"
                    value={mood.timestamp}
                    onChange={(event) =>
                      handleMoodTimestampChange(event, index, moodIndex)
                    }
                  />
                  <input
                    type="number"
                    placeholder="Intensity"
                    value={mood.intensity}
                    onChange={(event) =>
                      handleMoodIntensityChange(event, index, moodIndex)
                    }
                  />
                  <select
                    value={mood.label}
                    onChange={(event) =>
                      handleMoodLabelChange(event, index, moodIndex)
                    }
                  >
                    <option value="">Select a mood</option>
                    {moods.map((mood) => (
                      <option key={mood} value={mood}>
                        {mood}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
              <button onClick={() => handleAddMood(index)}>Add Mood</button>
            </div>
            <div>
              <label>Energies:</label>
              {person.energies.map((energy, energyIndex) => (
                <div key={energyIndex}>
                  <input
                    type="number"
                    placeholder="Timestamp"
                    value={energy.timestamp}
                    onChange={(event) =>
                      handleEnergyTimestampChange(event, index, energyIndex)
                    }
                  />
                  <input
                    type="number"
                    placeholder="Intensity"
                    value={energy.intensity}
                    onChange={(event) =>
                      handleEnergyIntensityChange(event, index, energyIndex)
                    }
                  />
                </div>
              ))}
              <button onClick={() => handleAddEnergy(index)}>Add Energy</button>
            </div>
          </div>
        );
      });
    };
  
    const handleAddEnergy = (personIndex) => {
      setPeople((prevPeople) => {
        return prevPeople.map((person, index) => {
          if (personIndex === index) {
            return {
              ...person,
              energies: [
                ...person.energies,
                { timestamp: "", intensity: "" }
              ]
            };
          } else {
            return person;
          }
        });
      });
    };
}

const handleEnergyTimestampChange = (event, personIndex, energyIndex) => {
    const timestamp = event.target.value;
    setPeople((prevPeople) => {
      return prevPeople.map((person, index) => {
        if (personIndex === index) {
          const newEnergies = [...person.energies];
          newEnergies[energyIndex] = {
            ...newEnergies[energyIndex],
            timestamp
          };
          return {
            ...person,
            energies: newEnergies
          };
        } else {
          return person;
        }
      });
    });
  };
  
  




    
  

  
  


