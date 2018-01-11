import React from 'react';
import ReactDOM from 'react-dom';
import { app } from '../helpers/setListHelpers';



const DisplayResults = (props) => {
  let template = '';
  if(props.newSetList) {
    template = (
      <main className="results">
        <h2 class="event-artist">{props.newArtist}</h2>
        {/*going through each setlist*/}
        {props.newSetList.map((set) => {
        {/*for each setlist return a list of songs*/}
        return (
          <div className="event-card">
            <p className="event-date">{set.eventDate}</p>
            <p className="event-venue">{set.venue.name}</p>
            <p className="event-city">{`${set.venue.city.name}, ${set.venue.city.state}`}</p>
            <h3 className="event-setlist-title">Setlist:</h3>
            <ul className="event-setlist" key={set.versionId}>
            {set.sets.set.map((singleSet) => {
              return singleSet.song.map((song, i) => {
                  {/*print out each song in the setlist*/}
                  return (
                  <li className="event-setlist-song" key={song.name}>{song.name}</li>
                  )})
              })}
            </ul>
          </div>
        )})}
      </main>
    )
  }
  return template
}

const DisplaySongs = (props) => {

}

export default DisplayResults;