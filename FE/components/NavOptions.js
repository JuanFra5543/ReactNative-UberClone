import { useNavigation } from '@react-navigation/native';
import { FlatList, Image, TouchableOpacity, View ,Text} from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon';
import tw from 'twrnc';
import { useSelector } from "react-redux";
import { selectOrigin } from '../slices/navSlice';

const data = [
    {
        id:"123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id:"456",
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen",
    },
];

const NavOptions = () => {

    const navigation = useNavigation();
    const origin = useSelector(selectOrigin)

  return (
    <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
            <TouchableOpacity
                onPress={() => {navigation.navigate(item.screen)}}
                style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
                disabled={!origin}
            >
                <View style={tw`${!origin && "opacity-20"}`}>
                    <Image
                        style={{width:100,height:100,resizeMode:"contain"}}
                        source={{uri: item.image}}
                    />
                </View>
                <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                <Icon
                    style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                    type='antdesign'
                    color={"white"}
                    name={"arrowright"}
                />
            </TouchableOpacity>
        )}
    />
  )
}

export default NavOptions
