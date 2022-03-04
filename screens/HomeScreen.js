import { Platform, StyleSheet, View, Text, SafeAreaView, Image } from 'react-native'
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";

const HomeScreen = () => {
    const body = (
            <View style={tw`p-5`}>
                <Image
                    style={{width: 100, height: 100, resizeMode: 'contain'}} 
                    source={{
                    uri: "https://links.papareact.com/gzs"
                    }}
                />
                <Text>{GOOGLE_MAPS_APIKEY}</Text>
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
                    onPress={(data, details = null) => console.log(data)}
                    onFail={(error) => console.error(error)}
                    nearbyPlacesAPI='GooglePlacesSearch'
                    debounce={400}
                />
                <NavOptions/>
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