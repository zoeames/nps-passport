import './App.scss';

import { Stamp } from '../../components/Stamp/Stamp';

const stamp1 =
{
  topText: 'Niobrara National Scenic River',
  bottomText: 'Niobrara National Scenic River',
  middleText: 'JUL 31 2023',
  dateVisited: '2023-07-31T18:17:37+0000',
  theme: 'west',
};

const stamp2 =
{
  topText: 'California NHT',
  bottomText: 'Scotts Bluff NM, NE',
  middleText: 'AUG 01 2023',
  dateVisited: '2023-08-01T18:17:37+0000',
  theme: 'south',
};

const stamp3 =
{
  topText: 'Nez Perce National Historic Trail',
  bottomText: 'Wisdom, MT',
  middleText: 'AUG 05 2023',
  dateVisited: '2023-08-05T18:17:37+0000',
  theme: 'east',
};

function App() {
  return (
    <div className="container text-center App">
      <div class="row">
        <div class="col">
          <Stamp data={stamp1}/>
        </div>
        <div class="col">
          <Stamp data={stamp2}/>
        </div>
        <div class="col">
          <Stamp data={stamp3}/>
        </div>
      </div>
    </div>
  );
}

export default App;
