import { View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen({ navigation }) {
  return (
    <View style={tw`flex-1 bg-white justify-center items-center px-5`}>
      <TouchableOpacity
        style={tw`bg-red-600 w-full py-3 rounded-md`}
        onPress={() => navigation.navigate("Second", { language: "french" })}>
        <Text style={tw`text-xl font-medium text-white text-center`}>
          Navigate to second screen with french
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tw`bg-red-600 w-full py-3 mt-2 rounded-md`}
        onPress={() => navigation.navigate("Second", { language: "english" })}>
        <Text style={tw`text-xl font-medium text-white text-center`}>
          Navigate to second screen with english
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto " />
    </View>
  );
}