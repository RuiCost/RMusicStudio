import {
  FETCH_SONGS_STARTED,
  FETCH_SONGS_SUCCESS,
  FETCH_SONGS_FAILURE,
  FETCH_SONGSLoved_STARTED,
  FETCH_SONGSLoved_SUCCESS,
  FETCH_SONGSLoved_FAILURE,
  FETCH_STORE_CREATE_SUCCESS,
  FETCH_STORE_CREATE_FAILURE,
    ADD_LOVED_SONG,
} from './Actions';

function reducer(state, action) {
  switch (action.type) {
    case FETCH_SONGS_STARTED:
      return {
        ...state,
        songs: {
          loading: true,
          error: null,
          data: [],
        },
      };
    case FETCH_SONGS_SUCCESS:
      return {
        ...state,
        songs: {
          loading: false,
          error: null,
          data: action.payload.data.results.trackmatches.track,
        },
      };
    case FETCH_SONGS_FAILURE:
      return {
        ...state,
        songs: {
          loading: false,
          error: action.payload.error,
          data: [],
        },
      };
    case FETCH_SONGSLoved_STARTED:
      return {
        ...state,
        songloved: {
          loading: true,
          error: null,
          data: [],
        },
      };
    case FETCH_SONGSLoved_SUCCESS:
      return {
        ...state,
        songsloved: {
          loading: false,
          error: null,
          data: action.payload.data,
        },
      };
    case FETCH_SONGSLoved_FAILURE:
      return {
        ...state,
        songsloved: {
          loading: false,
          error: action.payload.error,
          data: [],
        },
      };

    case FETCH_STORE_CREATE_SUCCESS:
      return {
        ...state,
        id: action.payload.data.metadata.id,
      };
    case FETCH_STORE_CREATE_FAILURE:
      return {
        ...state,
        songs: {
          data: [],
        },
      };
    case ADD_LOVED_SONG:
      return {
        ...state,
      };

    default:
      return state;
  }
}

export default reducer;
