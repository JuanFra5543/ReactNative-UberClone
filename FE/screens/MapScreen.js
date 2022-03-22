import {  View, Text, Image, TouchableOpacity } from 'react-native'
import tw from 'twrnc';
import Map from '../components/Map';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { getFavourites } from '../api';

const MapScreen = () => {

    const Stack = createNativeStackNavigator();
    const navigation = useNavigation();

    const [favourites, setFavourites] = useState([])

    const loadTask = async () => {
        const data = await getFavourites()
        setFavourites(data)
    }

    useEffect(()=>{
       loadTask()
    },[])

    return (
        <View>

            <TouchableOpacity 
                onPress={()=>navigation.navigate("HomeScreen")}
                style={tw`bg-gray-100 absolute top-8 left-4 z-1 p-3 rounded-full shadow-lg`}
                >
                <Icon
                    name='menu'
                />
            </TouchableOpacity>

            <View style={tw`h-1/2`}>
                <Map/>
            </View>
            <View style={tw`h-1/2`}>
                <Stack.Navigator>
                    <Stack.Screen
                        name='NavigateCard'
                        options={{
                            headerShown: false,
                        }}>
                         {(props) => <NavigateCard {...props} favourites={favourites} />}   
                    </Stack.Screen>
                    <Stack.Screen
                        name='RideOptionsCard'
                        component={RideOptionsCard}
                        options={{
                            headerShown: false,
                        }}
                    />
                </Stack.Navigator>
            </View>
        </View>
    )
}

export default MapScreen
