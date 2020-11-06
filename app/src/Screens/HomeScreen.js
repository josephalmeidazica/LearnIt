import * as React from 'react';
import {Button, View, Text} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Detalhes aaaaa"
        onPress={() => navigation.navigate('Detalhes')}
      />
    </View>
  );
}

export default HomeScreen;
