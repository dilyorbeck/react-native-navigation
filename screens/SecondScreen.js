import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { StackActions } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'


const SecondScreen = ({ navigation, route }) => {
  let language = route.params.language;
  let greeting = language === "french" ? "Bonjour" : "Hello"

  return (
    <View style={tw`px-5 flex-1 bg-white justify-center items-center`}>
      <Text style={tw`text-3xl text-red-500`}>{greeting}</Text>
      <TouchableOpacity
        style={tw`bg-green-600 w-full py-3 mt-2 rounded-md`}
        onPress={() => navigation.push("Third")} >
        <Text style={tw`text-xl font-medium text-white text-center`}>
          Go to Third Screen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tw`bg-green-600 w-full py-3 mt-2 rounded-md`}
        onPress={() => {
          navigation.dispatch(
            StackActions.replace("Third")
          )
        }}>
        <Text style={tw`text-xl font-medium text-white text-center`}>
          Go to Third Screen with Replace
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto " />
    </View>
  )
}

export default SecondScreen