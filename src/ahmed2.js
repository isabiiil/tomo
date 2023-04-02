

import React, { useState } from 'react';

const moodOptions = [
  'Bad',
  'Afraid',
  'Angry',
  'Disgust',
  'Sad',
  'Happy',
  'Surprised',
  'Insecure',
  'Excited'
];

const energyOptions = [
  { label: '1', value: 1 },
  { label: '2', value: 2 },
  { label: '3', value: 3 },
  { label: '4', value: 4 },
  { label: '5', value: 5 },
  { label: '6', value: 6 },
  { label: '7', value: 7 },
  { label: '8', value: 8 },
  { label: '9', value: 9 },
  { label: '10', value: 10 }
];

const productivityOptions = [
  { label: '1', value: 1 },
  { label: '2', value: 2 },
  { label: '3', value: 3 },
  { label: '4', value: 4 },
  { label: '5', value: 5 },
  { label: '6', value: 6 },
  { label: '7', value: 7 },
  { label: '8', value: 8 },
  { label: '9', value: 9 },
  { label: '10', value: 10 }
];

function App() {
  const [mood, setMood] = useState('');
  const [energy, setEnergy] = useState(5);
  const [productivity, setProductivity] = useState(5);
  const [socialActive, setSocialActive] = useState(true);
  const [didYouEat, setDidYouEat] = useState(true);

  const handleMoodChange = (event) => {
    setMood(event.target.value);
  };

  const handleEnergyChange = (event) => {
    setEnergy(event.target.value);
  };

  const handleProductivityChange = (event) => {
    setProductivity(event.target.value);
  };

  const handleSocialActiveChange = (event) => {
    setSocialActive(event.target.checked);
  };

  const handleDidYouEatChange = (event) => {
    setDidYouEat(event.target.checked);
  };

  return (
    <div className='App'>
      <div>
        <label htmlFor='mood-select'>Mood:</label>
        <select id='mood-select' value={mood} onChange={handleMoodChange}>
          <option value=''>Select a mood</option>
          {moodOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor='energy-slider'>Energy:</label>
        <input
          type='range'
          id='energy-slider'
          min='1'
          max='10'
          value={energy}
          onChange={handleEnergyChange}
        />
        <output htmlFor='energy-slider'>{energy}</output>
      </div>

      <div>
        <label htmlFor='productivity-slider'>Productivity:</label>
        <input
          type='range'
          id='productivity-slider'
          min='1'
          max='10'
          value={productivity}
          onChange={handleProductivityChange}
        />
        
  <output htmlFor='productivity-slider'>{productivity}</output>:

  </div>

  <div>
    <label htmlFor='social-active-checkbox'>Are you social today?</label>
    <input
      type='checkbox'
      id='social-active-checkbox'
      checked={socialActive}
      onChange={handleSocialActiveChange}
    />
  </div>

  <div>
    <label htmlFor='did-you-eat-checkbox'>Did you eat today?</label>
    <input
      type='checkbox'
      id='did-you-eat-checkbox'
      checked={didYouEat}
      onChange={handleDidYouEatChange}
    />
  </div>
</div>
);
}

export default App;
