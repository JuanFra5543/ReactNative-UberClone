import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon';
import tw from 'twrnc';
import React from 'react'

const NavFavourites = ({favourites}) => {
    return (
        <View>
            <FlatList
                data={favourites}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={()=>(
                    <View style={[tw`bg-gray-200 h-1`,{height:0.5}]}/>
                )}
                renderItem={({item: {icon,location,destination},item})=>{
                    return(
                        <TouchableOpacity style={tw`flex-row items-center p-5`} onPress={()=>console.log("Holaaaa")}>
                            <Icon
                                style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                                name={icon}
                                type="ionicon"
                                color="white"
                                size={18}
                            />
                            <View>
                                <Text style={tw`font-semibold text-lg`}>{location}</Text>
                                <Text style={tw`text-gray-500`}>{destination}</Text>
                            </View>
                        </TouchableOpacity>
                        )
                    }
                }
            />
        </View>
    )
}

export default NavFavourites

const styles = StyleSheet.create({})