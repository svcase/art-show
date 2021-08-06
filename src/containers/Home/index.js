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
          <Artist image="./leah.jpg" name="Leah Reusch" link="https://lcreusch.wixsite.com/leahreusch" content="Leah works in interdisciplinary performance art and installations, making paintings with light and space, and collages with painting, body and poetry. Her art explores landscapes of intimacy and true communication, the re-appropriation and reclamation of the female muse, the intricacies of human connection, perception, emotional common ground and intimacy, the purposes and sources of empathy and justice within the body as it relates to the natural environment, and the melding of academic writing concerning body and space with poetry, visual and performance art. Leah works with youth and disabled adults in wilderness and farm settings, where she teaches, learns and practices healing methods through art, outdoor, and natural therapies." />
        </div>
        <div className="liza">
          <Artist image="./liza.jpg" name="Liza Darlington" content="Liza’s art is informed by her love of history, her role as an educator, and her curiosity about the human experience and natural connections. She explores her own identity, and that of her communities, using portraiture, natural symbols, and fonts. Through her murals, Liza seeks to mirror, perpetuate, and challenge collective memory." />
        </div>
      </div>

      <div id="rsvp">
        <Rsvp />
      </div>

    </div>
  );

}

export default Home
