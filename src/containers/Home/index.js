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
            <h1>Stormflower</h1>
            <p>
              Art open house and mural unveiling by local artists Leah Reusch and Liza Darlington.
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
            <p className="address">Thursday, August 12th</p>
            <p className="address">4:00pm to 9:00pm</p>
            <p className="address">3609 25th Ave S</p>
            <p className="address">Minneapolis, MN 55406</p>
            <p>The event takes place in the garage in back off of the alley. Please enter from the alley between 25th and 26th Aves.</p>
            <p>This event is free. Works by each artist will be on display and avilable for purchase. Come also enjoy the Skoolie Portrait Gallery, punch, edible flowers, appetizers, art blankets, prints, and new friends!</p>
          </div>
        </div>
      </div>

      <div id="artists">
        <h2 className="deetsTitle">The Artists</h2>
        <div className="leah">
          <Artist image="./leah.jpg" name="Leah Reusch" link="https://lcreusch.wixsite.com/leahreusch" content="Leah's about blurb here. Derpa derpa doop dee dum doopy doop woop. Skeedily beedily dee bop boop. Scooch chooch scoopy doop dee dap dum ram a lam a ding dong. Scooby dooby hooby booby wamma jamma skip hop boopity bop deebidy dobbidy fliipity floppity." />
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
