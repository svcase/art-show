import React from 'react';
import Image from 'react-bootstrap/Image';

const Artist = (props) => {

  return (
    <div className="artists">
      <Image className="artist-img" src={props.image} alt="artist-img" roundedCircle/>
      <a href={props.link} className="artist-title">{props.name}</a>
      <p className="artist-text">{props.content}</p>
    </div>
  );
}

export default Artist
