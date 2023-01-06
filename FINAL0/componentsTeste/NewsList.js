import React from 'react';
import {View, Text, FlatList} from 'react-native';

const NewsList = props => {
  const {hits} = props;
  return (
    <FlatList
      data={hits}
      keyExtractor={item => item.objectID}
      renderItem={({item}) => (
        <View style={{paddingTop: 5, borderTopWidth: 2}}>
          <Text> {item.name}</Text>
        </View>
      )}
    />
  );
};
export default NewsList;
