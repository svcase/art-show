import React, {useState} from 'react';

const Rsvp = () => {

  const [name, setName] = useState("");
  const [guest, setGuest] = useState(0);

  function handleChange(event) {
    setName(event.target.value);
  }

  function guestChange(event) {
    setGuest(event.target.value);
  }

  return (
    <div className="rsvp">
      <h2 className="deetsTitle">RSVP</h2>
      <p>Let us know if you can make it! No RSVP is required, but helps us plan accordingly for numbers.</p>
      <p className="nameText">Your name:</p>
      <input className="rsvpInput" onChange={handleChange} type="text" placeholder="Your name" value={name}/>
      <p className="guestText">Number of guests (in addition to yourself):</p>
      <input className="rsvpInput" onChange={guestChange} type="text" placeholder="# of guests"/>
      <a className="btn" href={`mailto:svcase@gmail.com?subject=Garage Art Show RSVP&body=` + name + ` is attending the Garage Art Show with ` + guest + ` guest(s)!`}>RSVP</a>
    </div>
  );
}

export default Rsvp
