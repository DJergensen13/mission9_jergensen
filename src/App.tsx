import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './CollegeBasketballTeams.json';

interface TeamProps {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

const BasketballTeams = data;

function Welcome() {
  return (
    <div>
      <h1>Welcome To The NCAA Basketball Site</h1>
      <h4>Below are a list of each school's name, mascot, and location</h4>
      <br></br>
    </div>
  );
}

class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;
    return (
      <div style={{ border: '1px solid black', padding: '10px' }}>
        <br></br>
        <h2>{oneTeam.school}</h2>
        <h3>
          School Mascot: {oneTeam.name}, School Location: {oneTeam.city},{' '}
          {oneTeam.state}{' '}
        </h3>
        <br></br>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div>
      {BasketballTeams.teams.map((team: TeamProps) => (
        <Team key={team.tid} {...team} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
