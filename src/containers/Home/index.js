import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import MenuBar from '../../components/MenuBar';
import Artist from '../../components/Artists';
import Rsvp from '../../components/Rsvp';

const Home = () => {

  return (
    <div>
      <div id="header">
        <Jumbotron fluid className="mainHeader">
          <Container className="jumbo">
            <h1>The Garage Art Show</h1>
            <p>
              Join local artists Leah Reusch and Liza Darlington as they unveil their latest mural collaboration on (you guessed it) a garage, with additional works by each artist also on display.
            </p>
          </Container>
        </Jumbotron>
      </div>

      <div id="deets">
        <h2 className="deetsTitle">The Deets</h2>
        <div className="deetsContainer">
          <div className="deetsImg">
            <img className="garageImg" src="./garage.jpg" alt="garage-img"></img>
          </div>
          <div className="deetsText">
            <p className="address">Saturday, August 7th</p>
            <p className="address">1:00pm to 4:00pm</p>
            <p className="address">3609 25th Ave S</p>
            <p className="address">Minneapolis, MN 55406</p>
            <p>The event takes place in the garage in the back off of the alley. Please enter from the alley between 25th and 26th Aves.</p>
            <p>This event is free. Additional works by each artist will be on display in the garage and avilable for purchase.</p>
          </div>
        </div>
      </div>

      <div id="artists">
        <h2 className="deetsTitle">The Artists</h2>
        <div className="leah">
          <Artist image="./leah.jpg" name="Leah Reusch" content="Leah's about blurb here. Derpa derpa doop dee dum doopy doop woop. Skeedily beedily dee bop boop. Scooch chooch scoopy doop dee dap dum ram a lam a ding dong. Scooby dooby hooby booby wamma jamma skip hop boopity bop deebidy dobbidy fliipity floppity." />
        </div>
        <div className="liza">
          <Artist image="./liza.jpg" name="Liza Darlington" content="Liza's about blurb here. Derpa derpa doop dee dum doopy doop woop. Skeedily beedily dee bop boop. Scooch chooch scoopy doop dee dap dum ram a lam a ding dong. Scooby dooby hooby booby wamma jamma skip hop boopity bop deebidy dobbidy fliipity floppity." />
        </div>
      </div>

      <div id="rsvp">
        <Rsvp />
      </div>

    </div>
  );

}

export default Home
