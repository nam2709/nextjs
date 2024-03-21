import Cardlist from '../components/Cardlist';
import Menu from '../components/Menu';
import React, { useState, useEffect, useRef } from 'react';

const AboutPage = () => {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    // const [count, setCount] = useState(0);

    useEffect(() => {
        fetch('https://shaded-adorable-doll.glitch.me/images')
            .then(response => response.json())
            .then(users => setRobots(users));
    },[])


    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }


    const filterRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    if (!robots.length){
      return (
          <div className='tc'>
              <Menu />
              <h1>Loading failed - No Wifi Connection</h1>
          </div>
        )
    } else {
        return (
            <div className='tc' >
                <Menu />
                <h1 style={{marginLeft: "200px", display: "inline-block", fontSize: '80px' }}>TEAMS </h1>
                <Cardlist robots={filterRobots}/>
            </div> 
        );
    }  
};
  
export default AboutPage;
  