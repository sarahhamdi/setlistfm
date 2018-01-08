import axios from 'axios';
import Qs from 'qs';


// ______________________________________

// API CALL

// ______________________________________

const app = {};
app.baseURL = 'https://api.setlist.fm/rest/1.0/search/';
app.key = '21b54f4a-0461-4989-918a-19d5df684129'

app.APIRequest = (artistName) => {
  axios({
    method:'GET',
    url: 'http://proxy.hackeryou.com',
    dataResponse:'json',
    paramsSerializer: function(params) {
      return Qs.stringify(params, {arrayFormat: 'brackets'})
    },
    params: {
      reqUrl: `${app.baseURL}setlists`,
      params: {
        artistName: artistName,
        sort: 'relevance'
      }, 
      proxyHeaders: {
        'x-api-key': app.key,
        Accept: 'application/json',
      },
      xmlToJSON: false
    }
  }).then((res) => {
    console.log(res);
    app.printAllInfo(res);
    this.setState({selectedSetList: res});
  });
}; 

// ______________________________________

// ALL THE FUNCTIONS

// ______________________________________

// fn to just print all the info and test all the other fns
app.printAllInfo = (res) => {
  res.data.setlist.forEach((set) => {
    console.log(app.artistConcertDate(set));
    console.log(app.venueCoords(set));
    app.dateCompare(set, app.artistConcertDate(set), app.todaysDate());
  });
};

// iterates over all the songs in each setlist
// need help - forEach() doesn't return a value, and map() and every() wouldnt either so....?
app.showAllSongs = (set) => {
  set.sets.set.forEach((singleSet) => {
    singleSet.song.forEach((singleSong) => {
        const songName = singleSong.name;
        console.log(songName);
    });
  }); 
};

//fn to get the concert dates in a regular fashion
app.artistConcertDate = (set) => {
  const dates = set.eventDate.split('-');
  return dates.map((date) => {
    return parseInt(date);
  });
};

//fn to get today's date
app.todaysDate = () => {
  const todaysDate = new Date();
  const date = [todaysDate.getDate(), todaysDate.getMonth(), todaysDate.getFullYear()]
  return date;
} 

// function to compare the dates and display the setlist if it is correct
// replace this with a forEach or a Map dateOne.length-1
// also reverse >= to <= once actually trying to test this
app.dateCompare = (set, concertDate, todaysDate) => {
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
app.venueCoords = (set) => {
  const venueLatLong = set.venue.city.coords;
  return venueLatLong;
}

// ______________________________________

// EXPORTS

// ______________________________________
export {app};