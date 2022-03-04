import { Platform, StyleSheet, View, Text, SafeAreaView, Image } from 'react-native'
import tw from 'twrnc';

const MapScreen = () => {
    const body = (
        <View style={tw`p-5`}>
            <Text>Welcome to MapScreen</Text>
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
}

export default MapScreen
