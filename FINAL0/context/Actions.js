import {makeHTTPRequest} from '../service/Service';

export const URL_API1 =
  'https://ws.audioscrobbler.com/2.0/?method=track.search&track=';

export const URL_API2 = '&api_key=c4b55543cc7efe264c6045fd154403dd&format=json';

export const URL_API3 =
  'https://ws.audioscrobbler.com/2.0/?method=user.getlovedtracks&user=David129_&api_key=0ac5e54fc32822e49b9fd312d3c17b3c&format=json';

export const URL_Create_Bin = 'https://api.jsonbin.io/v3/b';
export const URL_Delete_Bin = 'https://api.jsonbin.io/v3/b/';

export const FETCH_SONGS_STARTED = 'FETCH_SONGS_STARTED';
export const FETCH_SONGS_SUCCESS = 'FETCH_SONGS_SUCCESS';
export const FETCH_SONGS_FAILURE = 'FETCH_SONGS_FAILURE';

export const FETCH_SONGSLoved_STARTED = 'FETCH_SONGSLoved_STARTED';
export const FETCH_SONGSLoved_SUCCESS = 'FETCH_SONGSLoved_SUCCESS';
export const FETCH_SONGSLoved_FAILURE = 'FETCH_SONGSLoved_FAILURE';

export const FETCH_SONGSRemoveLoved_STARTED = 'FETCH_SONGSRemoveLoved_STARTED';
export function fetchSongs(url, request, dispatch) {
  console.log('First:' + url);
  const success = res => dispatch(fetchSongsSuccess(res));
  const failure = err => dispatch(fetchSongsFailure(err.message));
  makeHTTPRequest(url, request, success, failure);
}

export function fetchSongsStarted() {
  return {
    type: FETCH_SONGS_STARTED,
  };
}

export function fetchSongsSuccess(songs) {
  console.log('Second:' + songs);
  return {
    type: FETCH_SONGS_SUCCESS,
    payload: {
      data: songs,
    },
  };
}
export function fetchSongsFailure(message) {
  return {
    type: FETCH_SONGS_FAILURE,
    payload: {
      error: message,
    },
  };
}

export function fetchSongsLoved(url, request, dispatch) {
  console.log('First9:' + url);
  const success = res => dispatch(fetchSongsLovedSuccess(res));
  const failure = err => dispatch(fetchSongsLovedFailure(err.message));
  makeHTTPRequest(url, request, success, failure);
}

export function fetchDeTestParaPost(url, request, dispatch) {
  console.log('First9:' + url);
  var myHeaders = new Headers();
  myHeaders.append('accept', '*/*');
  myHeaders.append('Content-Type', 'application/json');

  var raw = JSON.stringify({
    stock: 12,
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };
  const success = res => dispatch(fetchSongsLovedSuccess(res));
  const failure = err => dispatch(fetchSongsLovedFailure(err.message));
  makeHTTPRequest(url, requestOptions, success, failure);
}

export function fetchSongsLovedStarted() {
  return {
    type: FETCH_SONGSLoved_STARTED,
  };
}
export function fetchSongsRemoveLovedStarted() {
  return {
    type: FETCH_SONGSRemoveLoved_STARTED,
  };
}

export function fetchSongsLovedSuccess(songsloved) {
  //vem inf do loved songs confirmed
  console.log('SecondLoved:' + songsloved);
  console.log('requestStuff:' + JSON.stringify(songsloved));
  return {
    type: FETCH_SONGSLoved_SUCCESS,
    payload: {
      data: songsloved,
    },
  };
}
export function fetchSongsLovedFailure(message) {
  return {
    type: FETCH_SONGSLoved_FAILURE,
    payload: {
      error: message,
    },
  };
}

export function fetchStoreCreate(url, request, dispatch) {
  const success = res => dispatch(fetchStoreCreateSuccess(res));
  const failure = err => dispatch(fetchStoreCreateFailure(err));
  makeHTTPRequest(url, request, success, failure);
}

export const FETCH_STORE_CREATE_STARTED = 'FETCH_STORE_CREATE_STARTED';
export const FETCH_STORE_CREATE_SUCCESS = 'FETCH_STORE_CREATE_SUCCESS';
export const FETCH_STORE_CREATE_FAILURE = 'FETCH_STORE_CREATE_FAILURE';

export function fetchStoreCreateStarted() {
  return {
    type: FETCH_STORE_CREATE_STARTED,
  };
}

export function fetchStoreCreateSuccess(createBin) {
  console.log('create bin   ' + JSON.stringify(createBin));
  return {
    type: FETCH_STORE_CREATE_SUCCESS,
    payload: {
      data: createBin,
    },
  };
}
export function fetchStoreCreateFailure(message) {
  return {
    type: FETCH_STORE_CREATE_FAILURE,
    payload: {
      error: message,
    },
  };
}

export function fetchStoreDelete(url, request, dispatch) {
  const success = res => dispatch(fetchStoreDeleteSuccess(res));
  const failure = err => dispatch(fetchStoreDeleteFailure(err));
  makeHTTPRequest(url, request, success, failure);
}

export const FETCH_STORE_DELETE_STARTED = 'FETCH_STORE_DELETE_STARTED';
export const FETCH_STORE_DELETE_SUCCESS = 'FETCH_STORE_DELETE_SUCCESS';
export const FETCH_STORE_DELETE_FAILURE = 'FETCH_STORE_DELETE_FAILURE';

export function fetchStoreDeleteStarted() {
  return {
    type: FETCH_STORE_DELETE_STARTED,
  };
}

export function fetchStoreDeleteSuccess(deleteBin) {
  console.log('delete bin   ' + JSON.stringify(deleteBin));
  return {
    type: FETCH_STORE_DELETE_SUCCESS,
  };
}
export function fetchStoreDeleteFailure(message) {
  return {
    type: FETCH_STORE_DELETE_FAILURE,
    payload: {
      error: message,
    },
  };
}

export function addLovedSong(url, request, dispatch) {
  //apesar de funcionar o pedido retorna erro
  const failure = () => dispatch(showData(dispatch));
  const success = () => dispatch(showData(dispatch));

  makeHTTPRequest(url, request, success, failure);
}

export const ADD_LOVED_SONG = 'ADD_LOVED_SONG';

export function showData(dispatch) {
  dispatch(fetchSongsLovedStarted());
  const url = URL_API3;
  const request = {};
  fetchSongsLoved(url, request, dispatch);
  return {type: ADD_LOVED_SONG};
}

export function removeLovedSong(url, request, dispatch) {
  //apesar de funcionar o pedido retorna erro
  const failure = () => dispatch(showData1(dispatch));
  const success = () => dispatch(showData1(dispatch));

  makeHTTPRequest(url, request, success, failure);
}

export const REMOVE_LOVED_SONG = 'REMOVE_LOVED_SONG';

export function showData1(dispatch) {
  dispatch(fetchSongsRemoveLovedStarted());
  const url = URL_API3;
  const request = {};
  fetchSongsLoved(url, request, dispatch);
  return {type: REMOVE_LOVED_SONG};
}
