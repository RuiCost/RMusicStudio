import React, {Component, useContext} from 'react';
import {View, Text, Button, StyleSheet, ToastAndroid} from 'react-native';
import AppContext from '../context/AppContext';

const ItemSong = props => {
  const {state, getBinID, initialStateMap, dispatch} = useContext(AppContext);
  const {item} = props;

  let updatedSongsList = getBinID;

  function seeOnMap(id) {
    for (let k = 0; k < updatedSongsList.record.length; k++) {
      if (k === id) {
        initialStateMap.title = updatedSongsList.record[k].title;
        initialStateMap.day = updatedSongsList.record[k].day;
        initialStateMap.lat = updatedSongsList.record[k].lat;
        initialStateMap.lon = updatedSongsList.record[k].lon;
      }
    }
  }

  function deleteItem(idItem) {
    if (updatedSongsList.record.length > 1) {
      for (let k = 0; k < updatedSongsList.record.length; k++) {
        if (updatedSongsList.record[k].id === idItem) {
          console.log(
            'Ci siamo dentro all if almeno ' + updatedSongsList.record[k].id,
          );
          updatedSongsList.record.splice(k, 1); // Removes one entry at index n
          break;
        }
      }
    } else {
      ToastAndroid.show(
        "It's not possible to delete the last item, reset the list instead!",
        ToastAndroid.LONG,
      );
    }
    let updateList = new XMLHttpRequest();

    updateList.onreadystatechange = () => {
      if (updateList.readyState === XMLHttpRequest.DONE) {
        console.log('cena    ' + updateList.responseText);
      }
    };

    updateList.open(
      'PUT',
      'https://api.jsonbin.io/v3/b/63af170fdfc68e59d57443ea',
      true,
    );
    updateList.setRequestHeader('Content-Type', 'application/json');
    updateList.setRequestHeader(
      'X-Master-Key',
      '$2b$10$nRSOiokNnqZ3dGrvl/ii.e7l/uEyVnyBnG8YWOnyilyymYkzyJ8Ny',
    );
    console.log('musicas atualizada   ' + updatedSongsList.record);
    const string = JSON.stringify(updatedSongsList.record);
    updateList.send(string);
  }

  //console.log("appemna posso il return " + initialStateSaved.record.songs[2])
  return (
    <View
      style={{
        borderBottomColor: 'blue',
        borderBottomWidth: 3,
        padding: 10,
      }}>
      <Text style={{color: 'black', fontSize: 20}}>
        {item.title}, {item.artist}
      </Text>
      <View style={buttonAlign.container}>
        <View style={buttonAlign.buttonContainer}>
          <Button
            color="red"
            title="Delete"
            onPress={() => deleteItem(item.id)}
          />
        </View>
        <View style={buttonAlign.buttonContainer}>
          <Button
            color="green"
            title="See in maps"
            onPress={() => seeOnMap(item.id)}
          />
        </View>
      </View>
    </View>
  );
};
export default ItemSong;

const buttonAlign = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    marginRight: 20,
    marginLeft: 20,
  },
});
