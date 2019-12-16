import React from 'react';
import './App.css';

const App = () => <PersonList />;

const PersonList = () => {
  return <Person />;
};
const Person = () => {
  const url =
    "https://randomuser.me/api/portraits/thumb/men/22.jpg"


  return <div className="person">
    <img src={url} alt=""/>
  <div>
    <h4>name</h4>
    <h4>job</h4>
  </div>
    </div>;
};

export default App;
