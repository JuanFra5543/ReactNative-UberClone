import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice"
import tw from 'twrnc';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import NavFavourites from './NavFavourites';
import { Icon } from 'react-native-elements';

const NavigateCard = ({favourites}) => {

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const body = (
        <View>
            <Text style={tw`text-center py-5 text-xl`}>Good Morning, Juan Fra </Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete
                        placeholder='Where To?'
                        nearbyPlacesAPI='GooglePlacesSearch'
                        debounce={400}
                        styles={toInputBoxStyles}
                        query={{
                            key:GOOGLE_MAPS_APIKEY,
                            language: 'en'
                        }}
                        enablePoweredByContainer={false}
                        minLength={2}
                        onPress={(data, details = null) => { 
                            dispatch(setDestination({
                                location: details.geometry.location,
                                description: data.description,
                            }));
                            navigation.navigate('RideOptionsCard')
                        }}
                        fetchDetails={true}
                        returnKeyType={"search"}
                    />
                </View>
                <NavFavourites favourites={favourites}/>
            </View>
            <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('RideOptionsCard')}
                    style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}>
                    <Icon name='car' type='font-awesome' color='white' size={16}/>
                    <Text style={tw`text-white text-center`}>Rides</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}>
                    <Icon name='fast-food-outline' type='ionicon' color='black' size={16}/>
                    <Text style={tw`text-center`}>Eats</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
    
    const iosView = (
        <SafeAreaView style={tw`bg-white flex-1`}>
            {body}
        </SafeAreaView>
    )
    const andView = (
        <View style={tw`bg-white flex-1 py-2`}>
            {body}
        </View>)

    return Platform.OS === 'ios' ? iosView : andView
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        paddingTop: 20,
        flex: 0
    },
    textInput:{
        backgroundColor: "#dddddf",
        borderRadius: 0,
        fontSize: 18
    },
    textInputContainer:{
        paddingHorizontal:20,
        paddingBottom: 0
    }
})