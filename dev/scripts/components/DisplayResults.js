import React from 'react';
import ReactDOM from 'react-dom';

const DisplayResults = (props) => {
  if (props.newSetList.length > 0) {
    return (
      <main className="results">
        <h2 className="event-artist">{props.newArtist}</h2>
        {/*going through each setlist*/}
        {props.newSetList.map((set) => {
        {/*for each setlist return a list of songs*/}
        return (
          <div className="event-card">
            <div className="event-details">
              
              <p className="event-venue">{set.venue.name}</p>
              <p className="event-city">{`${set.venue.city.name}, ${set.venue.city.state}`}</p>
              <p className="event-date">{set.eventDate}</p>
            </div>
            <div className="event-setlist">
            <h3 className="event-setlist-title">Setlist:</h3>
              <ul className="event-setlist-list" key={set.versionId}>
              {set.sets.set.map((singleSet) => {
                return singleSet.song.map((song, i) => {
                    {/*print out each song in the setlist*/}
                    return (
                    <li className="event-setlist-list-song" key={song.name}>{song.name}</li>
                    )})
                })}
              </ul>
            </div>
          </div>
        )})}
      </main>
    )
  } else if (props.errorOccured == 1) {
    return (<ErrorMessage />)
  } else {
    return emptyString
  }
}

const ErrorMessage = () => {
  return (
    <main className="results">
      <p>No results, sorry!</p>
    </main>
  )
}

const emptyString = '';

export default DisplayResults;