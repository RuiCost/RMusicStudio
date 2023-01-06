import React, {useContext, useReducer} from 'react';
import PropTypes from 'prop-types';
import AppContext, {Provider} from './AppContext';
import reducer from './Reducer';

const initialState = {
  songs: {
    loading: false,
    error: null,
    data: [],
  },
  songsloved: {
    loading: false,
    error: null,
    data: [],
  },
};

const initialStateMap = {
  title: 'song title',
  day: 'here the date',
  lat: 41.9876,
  lon: -8.7564,
};

const song_labels = {
  id: 'MBID',
  artist: 'Artist',
  name: 'Name',
  search: 'Search',
  count: 0,
};

const trackInfo = {
  tracks: {
    info: 'Info',
  },
};

const BinID = {
  binid: 'id',
};
const songloved = {
  id: 'MBID',
  artist: 'Artist',
  name: 'Name',
  search: 'Search',
  count: 0,
};
const AppProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Provider
      value={{
        state,
        song_labels,
        initialStateMap,
        trackInfo,
        BinID,
        dispatch,
        songloved,
      }}>
      {props.children}
    </Provider>
  );
};
AppProvider.propTypes = {
  children: PropTypes.node,
};

export default AppProvider;
