import * as React from 'react';
import {View, Text} from 'react-native';

export default function UserScreen({navigation}) {
    return(
        <View style={{flex: 1, alignItems:'center',justifyContent:'center' }}>
            <Text onPress={()=> navigation.navigate('Home')}
            style={{fontSize:20, fontWeight:'bold'}}>UserScreen</Text>
        </View>
    )
}