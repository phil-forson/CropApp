import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function CustomerHomePage({ navigation }) {
  return (
    // THIS PAGE REPRESENTS THE CUSTOMER'S HOME PAGE

    <View style={styles.container}>
      <View style={styles.searchbar}>
        <View style={styles.search}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => console.log(text)}
            placeholder="Search"
          />
        </View>
        <View style={styles.background}>
          <EvilIcons
            name="search"
            size={40}
            color="white"
            style={styles.iconStyle}
          />
        </View>
      </View>

      <View style={styles.header}>
        <Text style={styles.subheader}> Fish Farming</Text>
        <TouchableOpacity>
          <Text style={styles.subheader1}> View all</Text>
        </TouchableOpacity>
      </View>

      
        <View style={styles.c}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity onPress={() => navigation.navigate("BuyerProductPage")}>
          <View style={styles.card}>
            <View style={styles.imageBackground}>
              <Image
                source={require("../assets/Images/CompanyLogo.png")}
                style={styles.cart}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.bolden}> Ghana Tilapia Seed Project</Text>
              <Text style={styles.rating}>5.0</Text>
            </View>
          </View>
          </TouchableOpacity>

          <View style={styles.card}>
            <View style={styles.imageBackground}>
              <Image
                source={require("../assets/Images/CompanyLogo.png")}
                style={styles.cart}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.bolden}> Ghana Tilapia Seed Project</Text>
              <Text style={styles.rating}>5.0</Text>
            </View>
          </View>
          </ScrollView>
        </View>
      

      <View style={styles.header}>
        <Text style={styles.subheader}> Snail Farming</Text>
        <TouchableOpacity>
          <Text style={styles.subheader1}> View all</Text>
        </TouchableOpacity>
      </View>

      
        <View style={styles.c}>
          <TouchableOpacity onPress={() => navigation.navigate("BuyerProductPage")}>
          <View style={styles.card}>
            <View style={styles.imageBackground}>
              <Image
                source={require("../assets/Images/CompanyLogo.png")}
                style={styles.cart}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.bolden}> Ghana Tilapia Seed Project</Text>
              <Text style={styles.rating}>5.0</Text>
            </View>
          </View>
          </TouchableOpacity>
          <View style={styles.card}>
            <View style={styles.imageBackground}>
              <Image
                source={require("../assets/Images/CompanyLogo.png")}
                style={styles.cart}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.bolden}> Ghana Tilapia Seed Project</Text>
              <Text style={styles.rating}>5.0</Text>
            </View>
          </View>
        </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingHorizontal: 7,
  },
  cart: {
    borderWidth: 0,
    marginHorizontal: 5,
    borderRadius: 5,
    height: 100,
    width: 100,
    resizeMode: "cover",
    marginTop: 0,
  },

  c: {
    flexDirection: "row",
  },

  bolden: {
    fontWeight: "600",
    fontSize: 16,
    paddingHorizontal: 3,
    // flexWrap: "wrap", // Allow text to wrap to the next line
    maxWidth: 150,
    letterSpacing: 0.5,
    marginLeft: 3,
    marginTop: 5,
    // Adjust the maximum width as needed
  },

  totalprice: {
    color: "#7F8184",
    textAlign: "right",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  subheader: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 10,
    marginLeft: 5,
  },
  subheader1: {
    color: "#A3A3A2",
    fontSize: 17,
  },
  search: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#E4E4E4",
    borderRadius: 10,
    width: 320,
  },
  searchbar: {
    marginHorizontal: 5,
    flexDirection: "row",
  },
  iconStyle: {
    margin: 5,
    paddingTop: 3,
  },
  background: {
    backgroundColor: "green",
    borderRadius: 10,
    marginLeft: 18,
  },
  navbar: {
    flexDirection: "row",
  },
  companyname: {
    marginLeft: 60,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "500",
  },
  imageBackground: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#F3FFF7",
    borderColor: "#F3FFF7",
    height: 120,
    width: 120,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
    flexDirection: "row",
    marginTop: 0,
  },
  rating: {
    marginLeft: 7,
    marginTop: 5,
    // flexWrap: "wrap", // Allow text to wrap to the next line
    // maxWidth: 45, // Adjust the maximum width as needed
  },
});
