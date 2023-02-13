import * as React from 'react';
import { Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import UserScreen from './screens/UserScreen';


const homeName = 'Home';
const userName = 'Users';
const detailName = 'Details';

const Tab = createBottomNavigator();
export default function MainContainer() {
    return(
        <NavigationContainer>
            <Tab.Navigator initialRouteName={homeName}
            screenOptions={({route}) =>({
                tabBarIcon:({focused, color, size}) => {
                    let iconName;
                    let rn= route.name;
                    if(rn===homeName)
                    {iconName=focused?'home':'home-outline'}
                    else if(rn===detailName)
                    {iconName=focused?'list':'list-outline'}
                    else if(rn===userName)
                    {iconName=focused?'users':'users-outline'}

                    return <Ionicons name={iconName} size={size} color={color}/>
                },

                
            })}
            tabBarOptions={{
                activeTintColor:'tomato',
                inactiveTintColor:'grey',
                labelStyle: {paddingBottom:10, fontSize: 10},
                style:{padding:10, height:70}
            }}
            >
                <Tab.Screen name={homeName} component={HomeScreen}/>
                <Tab.Screen name={detailName} component={DetailScreen}/>
                <Tab.Screen name={userName} component={UserScreen}/>

            </Tab.Navigator>
        </NavigationContainer>
    );
}