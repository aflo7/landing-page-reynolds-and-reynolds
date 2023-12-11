import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import reynoldsAndReynolds from './assets/reynolds-and-reynolds.jpeg';
import Divider from '@mui/material/Divider';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        <div className="nav-inner-wrapper">
          <div>
            <img src={reynoldsAndReynolds} height="80px" />
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              style={{ backgroundColor: 'black' }}
            />
            <h1>Careers</h1>
          </div>
          <div>
            <div style={{ color: 'gray' }}>#ReyReyLife</div>
            <div>
              <button id="searchJobsBtn">Search Jobs</button>
            </div>
          </div>
        </div>
      </nav>
      <div
        className="bottom-nav-wrapper"
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <div className="bottom-nav">
          <div>Life at Reynolds</div>
          <div>Our Company</div>
          <div>Sales Opportunities</div>
          <div>Students and Graduates</div>
          <div>How to Apply</div>
        </div>
      </div>

      <main>
        <div>
          <div>
            <h2>Remade by Andres Flores</h2>
            <p>
              Mock up text Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Laborum corporis accusantium expedita numquam temporibus,
              possimus, eligendi neque aut deserunt enim eveniet accusamus nemo
              placeat commodi dolor a autem ratione magnam?.
            </p>
        <button id='applyNowBtn' type="text">Apply Now</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
