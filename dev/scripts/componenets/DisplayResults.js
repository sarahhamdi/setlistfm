import React from 'react';
import ReactDOM from 'react-dom';
import { app } from '../helpers/setListHelpers';



const DisplayResults = (props) => {
  while (props.newSetList) {
    return (
      <div>
        <h2>{props.newArtist}</h2>
        {/*going through each setlist*/}
        {props.newSetList.map((set) => {
          {/*for each setlist return a list of songs*/}
          return (
            <ul key={set.versionId}>
            {set.sets.set.map((singleSet) => {
              return singleSet.song.map((song, i) => {
                {/*print out each song in the setlist*/}
                return (
                  <li key={song.name}>{song.name}</li>
                )
              })
            })}
            </ul>
          )})
        }
      </div>
    )
  }
}

export default DisplayResults;