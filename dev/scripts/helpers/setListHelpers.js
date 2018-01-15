import axios from 'axios';
import Qs from 'qs';


// ______________________________________

// API CALL

// ______________________________________

const helpers = {};

// setistFM
helpers.baseURL = 'https://api.setlist.fm/rest/1.0/search/setlists';
helpers.key = '21b54f4a-0461-4989-918a-19d5df684129';

// google maps 
helpers.GMkey = 'AIzaSyA8IxNPUCISkrKCpWjWbNKKdkD5NfsfNwc';
helpers.labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
helpers.locations = [
  {lat: -31.563910, lng: 147.154312},
  {lat: -33.718244, lng: 150.363181},
]
helpers.markers = () => {
  helpers.locations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      label: helpers.labels[i % helpers.labels.length]
    });
  });
} 
// helpers.markerCluster = new MarkerClusterer(map, helpers.markers,
//     {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

// setlist api call
helpers.getSetListData = (artistName) => {
  return axios({
    method:'GET',
    url: 'http://proxy.hackeryou.com',
    dataResponse:'json',
    paramsSerializer: function(params) {
      return Qs.stringify(params, {arrayFormat: 'brackets'})
    },
    params: {
      reqUrl: helpers.baseURL,
      params: {
        artistName: artistName,
        sort: 'relevance'
      }, 
      proxyHeaders: {
        'x-api-key': helpers.key,
        Accept: 'application/json',
      },
      xmlToJSON: false
    }
  })
}; 

// ______________________________________

// ALL THE FUNCTIONS

// ______________________________________

// fn to just print all the info and test all the other fns
helpers.printAllInfo = (res) => {
  res.data.setlist.forEach((set) => {
    console.log(app.artistConcertDate(set));
    console.log(app.venueCoords(set));
    app.dateCompare(set, app.artistConcertDate(set), app.todaysDate());
  });
};

// iterates over all the songs in each setlist
// need help - forEach() doesn't return a value, and map() and every() wouldnt either so....?
helpers.showAllSongs = (set) => {
  set.sets.set.forEach((singleSet) => {
    singleSet.song.forEach((singleSong) => {
        const songName = singleSong.name;
        console.log(songName);
    });
  }); 
};

//fn to get the concert dates in a regular fashion
helpers.artistConcertDate = (res) => {
  res.data.setlist.map((set) => {
    console.log(set.eventDate)
    return set.eventDate;
    // const dates = set.eventDate.split('-');
    // return dates.map((date) => {
    //   return parseInt(date);
    // });
  })
};

//fn to get today's date
helpers.todaysDate = () => {
  const todaysDate = new Date();
  const date = [todaysDate.getDate(), todaysDate.getMonth(), todaysDate.getFullYear()]
  return date;
} 

// function to compare the dates and display the setlist if it is correct
// replace this with a forEach or a Map dateOne.length-1
// also reverse >= to <= once actually trying to test this
helpers.dateCompare = (set, concertDate, todaysDate) => {
  if (concertDate[2] >= todaysDate[2]) {
    console.log("year");
  } else if (concertDate[1] >= todaysDate[2]) {
    console.log("month");
  } else if (concertDate[0] >= todaysDate[0]) {
    console.log("day");
  } else {
    console.log("you are in luck!")
    app.showAllSongs(set);
  }
} 

//fn to get coords for venue
helpers.venueCoords = (res) => {

  const venueLatLong = set.venue.city.coords;
  return venueLatLong;
}

// ______________________________________

// EXPORTS

// ______________________________________
export {helpers};