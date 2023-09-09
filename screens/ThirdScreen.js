import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import tw from 'twrnc'

export default function ThirdScreen({ navigation }) {
  return (
    <View style={tw`px-5 flex-1 justify-center items-center`}>
      <TouchableOpacity
        onPress={() => navigation.popToTop()}
        style={tw`bg-blue-600 w-full py-3 mt-2 rounded-md`}
      >
        <Text style={tw`text-xl font-medium text-white text-center`}>
          Pop to root
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tw`bg-blue-600 w-full py-3 mt-2 rounded-md`}
        onPress={() => navigation.pop()}>
        <Text style={tw`text-xl font-medium text-white text-center`}>
          Pop
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});