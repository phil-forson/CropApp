import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function Search() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => console.log(text)}
        placeholder="Search"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: '10%',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  buttonText: {
    textAlign: "center",
    paddingBottom: 10,
    paddingTop: 10,
    color: "white",
  },
  button: {
    backgroundColor: "#007E23",
    borderRadius: 0,
    marginTop: 25,
  },

  flow: {
    color: "#777777",
    marginTop: 20,
    paddingLeft: 0,
    paddingBottom: 5,
  },
  input: {
    borderRadius: 3,
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 20,
    paddingLeft: 10,

    fontSize: 14,
    borderColor: "green",
  },
});
