import React, {useContext, useEffect} from 'react';
import {View, StyleSheet, FlatList, Button} from 'react-native';
import Mappa from '../components/Mappa';
import SavedSongsWithPosition from '../components/SavedSongsWithPosition';
import {AsyncStorage} from 'react-native';
import AppContext from '../context/AppContext';
import {
  fetchStoreCreate,
  fetchStoreCreateStarted,
  fetchStoreDelete,
  fetchStoreDeleteStarted,
  URL_Create_Bin,
  URL_Delete_Bin,
} from '../context/Actions';

const MapAndSongScreen = () => {
  const {BinID, state, dispatch} = useContext(AppContext);

  console.log("STATE  "+ JSON.stringify(state));

  console.log('testetetete    ' + JSON.stringify(state.id));

  const deleteList = () => {
    dispatch(fetchStoreDeleteStarted());
    const url = URL_Delete_Bin + state.id;
    const request = {
      method: 'DELETE',
      headers: {
        'X-Master-Key':
          '$2b$10$nRSOiokNnqZ3dGrvl/ii.e7l/uEyVnyBnG8YWOnyilyymYkzyJ8Ny',
      },
    };
    fetchStoreDelete(url, request, dispatch);
  };

  const createList = () => {
    dispatch(fetchStoreCreateStarted());
    const url = URL_Create_Bin;
    const request = {
      method: 'POST',
      headers: {
        'X-Master-Key':
          '$2b$10$nRSOiokNnqZ3dGrvl/ii.e7l/uEyVnyBnG8YWOnyilyymYkzyJ8Ny',
        'Content-Type': 'application/json',
      },
      body: '{"sample": "Hello World"}',
    };
    fetchStoreCreate(url, request, dispatch);
  };

  function resetList() {
    deleteList();
    createList();
  }

  useEffect(() => {
    resetList();
  }, []);

  return (
    <View style={styles.container}>
      <View>{<Mappa />}</View>
      <View style={{top: 300}}>
        <Button color="red" title="RESET LIST" onPress={() => resetList()} />
      </View>
      <View style={{top: 310}}>{<SavedSongsWithPosition />}</View>
    </View>
  );
};

export default MapAndSongScreen;

const styles1 = StyleSheet.create({
  container: {
    flux: 1,
    padding: 5,
    alignItems: 'center',
  },
  item: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: 'black',
  },
  logo: {
    width: 250,
    height: 250,
  },
  text: {
    alignSelf: 'center',
    fontFamily: 'monospace',
    color: 'black',
    fontStyle: 'bold',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
