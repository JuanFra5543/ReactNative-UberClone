import { Platform, StyleSheet, View, Text, SafeAreaView, Image } from 'react-native'
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice"
import NavFavourites from '../components/NavFavourites';
import { useEffect, useState } from 'react';
import { getFavourites } from '../api';

const HomeScreen = () => {

    const dispatch = useDispatch();

    const [favourites, setFavourites] = useState([])
    const loadTask = async () => {
        const data = await getFavourites()
        setFavourites(data)
    }
    useEffect(()=>{
       loadTask()
    },[])

    const body = (
            <View style={tw`p-5`}>
                <Image
                    style={{width: 100, height: 100, resizeMode: 'contain'}} 
                    source={{
                    uri: "https://links.papareact.com/gzs"
                    }}
                />
                <GooglePlacesAutocomplete
                    styles={{
                        container:{
                            flex:0,
                        },
                        textInput:{
                            fontSize: 18,
                        },
                    }}
                    placeholder='Where From?'
                    query={{
                        key:GOOGLE_MAPS_APIKEY,
                        language: 'en'
                    }}
                    enablePoweredByContainer={false}
                    minLength={2}
                    onPress={(data, details = null) => { 
                        dispatch(setOrigin({
                            location: details.geometry.location,
                            description: data.description,
                        }));
                        dispatch(setDestination(null))
                    }}
                    fetchDetails={true}
                    returnKeyType={"search"}
                    nearbyPlacesAPI='GooglePlacesSearch'
                    debounce={400}
                />
                <NavOptions/>
                <NavFavourites favourites={favourites}/>
            </View>
    )
    const iosView = (
        <SafeAreaView style={tw`bg-white h-full`}>
            {body}
        </SafeAreaView>
    )
    const andView = (
        <View style={tw`bg-white h-full pt-5`}>
            {body}
        </View>)

    return Platform.OS === 'ios' ? iosView : andView

    // return (
    //     <SafeAreaView style={tw`bg-white h-full`}>
    //     <View style={tw`p-5`}>
    //         <Image
    //             style={{width: 100, height: 100, resizeMode: 'contain'}} 
    //             source={{
    //             uri: "https://links.papareact.com/gzs"
    //             }}/>
    //     </View>
    //     </SafeAreaView>
    // )
}

export default HomeScreen

const styles = StyleSheet.create({});