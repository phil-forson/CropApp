import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import {
  AntDesign,
  EvilIcons,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Image } from "react-native";
import { TextInput } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default function SellerProductPage({navigation}) {
  return (
    <>
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.searchbar}>
        <View style={styles.search}>
          {/* <EvilIcons
            name="search"
            size={40}
            color="white"
            style={styles.icon}
          /> */}
          <Image style={styles.icon} source={require("../assets/Images/search.png")}/>
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
        <Text style={styles.subheader}>Available Products</Text>
        <TouchableOpacity>
          <Text style={styles.subheader1}> View all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}> 
      <View style={styles.c}>
      <TouchableOpacity onPress={() => navigation.navigate("ProductDetailsEdit")}>
        <View>
          <Image
            source={require("../assets/Images/CheckoutCardImage.png")}
            style={styles.cart}
          />
          <View style={styles.productDetailsCard}>
            <View style={styles.middlesection}>
              <View style={styles.historydata}>
                <Text style={styles.bolden}>Tilapia</Text>
                <Text style={styles.totalprice}> per 5kg</Text>
              </View>
              <View style={styles.state}>
                <Text style={{textAlign: "center"}}>120 remaining</Text>
              </View>
            <View style={styles.prices}>
            <View>
              <Text style={styles.moreDetails}>$3.4</Text>
            </View>
            <View>
              <Text style={styles.discounted}>$5.0</Text>
            </View>
            <View style={styles.history}>
              <MaterialCommunityIcons
                name="arrow-right-circle"
                size={38}
                color="green"
              />
                </View>
              </View>
            </View>
          </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("ProductDetailsEdit")}>
        <View>
          <Image
            source={require("../assets/Images/CheckoutCardImage.png")}
            style={styles.cart}
          />
          <View style={styles.productDetailsCard}>
            <View style={styles.middlesection}>
              <View style={styles.historydata}>
                <Text style={styles.bolden}>Tilapia</Text>
                <Text style={styles.totalprice}> per 5kg</Text>
              </View>
              <View style={styles.state}>
                <Text style={{textAlign: "center"}}>120 remaining</Text>
              </View>
            <View style={styles.prices}>
            <View>
              <Text style={styles.moreDetails}>$3.4</Text>
            </View>
            <View>
              <Text style={styles.discounted}>$5.0</Text>
            </View>
            <View style={styles.history}>
              <MaterialCommunityIcons
                name="arrow-right-circle"
                size={38}
                color="green"
              />
                </View>
              </View>
            </View>
          </View>
        </View>
        </TouchableOpacity>
        <View>
          <Image
            source={require("../assets/Images/CheckoutCardImage.png")}
            style={styles.cart}
          />
          <View style={styles.productDetailsCard}>
          <View style={styles.middlesection}>
            <View style={styles.historydata}>
              <Text style={styles.bolden}>Tilapia</Text>
              <Text style={styles.totalprice}> per 5kg</Text>
            </View>
            <View style={styles.state}>
                <Text style={{textAlign: "center"}}>120 remaining</Text>
              </View>
          <View style={styles.prices}>
            <View>
              <Text style={styles.moreDetails}>$3.4</Text>
            </View>
            <View>
              <Text style={styles.discounted}>$5.0</Text>
            </View>
            <View style={styles.history}>
              <MaterialCommunityIcons
                name="arrow-right-circle"
                size={38}
                color="green"
              />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      </ScrollView>
      <View style={styles.header}>
        <Text style={styles.subheader}>Unavailable Products</Text>
        <TouchableOpacity>
          <Text style={styles.subheader1}> View all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.c}>
        <View>
          <Image
            source={require("../assets/Images/CheckoutCardImage.png")}
            style={styles.cart}
          />
          <View style={styles.productDetailsCard}>
          <View style={styles.middlesection}>
            <View style={styles.historydata}>
              <Text style={styles.bolden}>Tilapia</Text>
              <Text style={styles.totalprice}> per 5kg</Text>
            </View>
            <View style={{...styles.state, backgroundColor: "#edaca6"}}>
                <Text style={{textAlign: "center"}}>120 remaining</Text>
            </View>
          <View style={styles.prices}>
            <View>
              <Text style={styles.moreDetails}>$3.4</Text>
            </View>
            <View>
              <Text style={styles.discounted}>$5.0</Text>
            </View>
            <View style={styles.history}>
              <MaterialCommunityIcons
                name="arrow-right-circle"
                size={38}
                color="green"
              />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View>
          <Image
            source={require("../assets/Images/CheckoutCardImage.png")}
            style={styles.cart}
          />
          <View style={styles.productDetailsCard}>
          <View style={styles.middlesection}>
            <View style={styles.historydata}>
              <Text style={styles.bolden}>Tilapia</Text>
              <Text style={styles.totalprice}> per 5kg</Text>
            </View>
            <View style={{...styles.state, backgroundColor: "#edaca6"}}>
                <Text style={{textAlign: "center"}}>120 remaining</Text>
            </View>
          <View style={styles.prices}>
            <View>
              <Text style={styles.moreDetails}>$3.4</Text>
            </View>
            <View>
              <Text style={styles.discounted}>$5.0</Text>
            </View>
            <View style={styles.history}>
              <MaterialCommunityIcons
                name="arrow-right-circle"
                size={38}
                color="green"
              />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.header}>
        <Text style={styles.subheader}>In High Demand</Text>
        <TouchableOpacity>
          <Text style={styles.subheader1}> View all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.c}>
        <View>
          <Image
            source={require("../assets/Images/CheckoutCardImage.png")}
            style={styles.cart}
          />
          <View style={styles.productDetailsCard}>
          <View style={styles.middlesection}>
            <View style={styles.historydata}>
              <Text style={styles.bolden}>Tilapia</Text>
              <Text style={styles.totalprice}> per 5kg</Text>
            </View>
          <View style={styles.prices}>
            <View>
              <Text style={styles.moreDetails}>$3.4</Text>
            </View>
            <View>
              <Text style={styles.discounted}>$5.0</Text>
            </View>
            <View style={styles.history}>
              <MaterialCommunityIcons
                name="arrow-right-circle"
                size={38}
                color="green"
              />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View>
          <Image
            source={require("../assets/Images/CheckoutCardImage.png")}
            style={styles.cart}
          />
          <View style={styles.productDetailsCard}>
          <View style={styles.middlesection}>
            <View style={styles.historydata}>
              <Text style={styles.bolden}>Tilapia</Text>
              <Text style={styles.totalprice}> per 5kg</Text>
            </View>
          <View style={styles.prices}>
            <View>
              <Text style={styles.moreDetails}>$3.4</Text>
            </View>
            <View>
              <Text style={styles.discounted}>$5.0</Text>
            </View>
            <View style={styles.history}>
              <MaterialCommunityIcons
                name="arrow-right-circle"
                size={38}
                color="green"
              />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      </ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate("AddNewItem")} containerStyle={styles.addNew}>
      <View style={{display: "flex", flexDirection: "row", gap: 10}}>
        <Text style={styles.plusSign}>+</Text>
        <Text style={styles.addText}>Add New</Text>
      </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '15%',
    marginHorizontal: 7,
  },
  cart: {
    borderWidth: 0,
    // marginleft: '5%',
    marginRight: '4%',
    borderRadius: 5,
    height: screenHeight * 0.2,
    width: screenWidth * 0.4,
    resizeMode: "cover",
    marginTop: 0,
  },
  c: {
    flexDirection: "row",
    marginBottom: '5%'
  },
  productDetailsCard: {
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "#EFEFEF",
    borderColor: "#F4F4F4",
    height: screenHeight * 0.14,
    width: screenWidth * 0.4,
    flexDirection: "row",
    marginTop: -30,
  },
  historydata: {
    flexDirection: "row",
    marginTop: 5,
  },
  bolden: {
    fontWeight: "bold",
    fontSize: 16,
    paddingHorizontal: 0,
  },
  state: {
    backgroundColor: "#FAFFDD",
    borderRadius: 20,
    color: "#7E7200",
    width: 110,
    borderColor: "#FAFFDD",
    padding: 4,
    marginTop: 6,

  },
  moreDetails: {
    color: "#007E23",
    marginTop: 8,
    fontSize: 19,
    textAlign: "justify",
  },
  history: {
    marginLeft: 25,
  },

  totalprice: {
    color: "#7F8184",
    textAlign: "right",
  },
  middlesection: {
    padding: 4,
  },
  quantity: {
    marginRight: 0,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  boldenquantity: {
    fontWeight: "bold",
    fontSize: 16,
    paddingHorizontal: 4,
  },
  prices: {
    flexDirection: "row",
    marginTop: 5,
  },
  discounted: {
    color: "#007E23",
    marginTop: 8,
    marginLeft: 5,
    fontSize: 13,
    textDecorationLine: "line-through",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: '5%',
    marginBottom: 5,
  },
  subheader: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 10,
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
    flexDirection: 'row',

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
  addNew: {
    backgroundColor: "#63ebab",
    borderRadius: 20,
    flexDirection: "row",
    position: "absolute",
    paddingHorizontal: 10,
    paddingVertical: 5,
    top: '93%',
    left: '70%',
  },
  plusSign: {
    fontSize: 22,
    fontWeight: "bold",
  },
  addText: {
    fontSize: 16,
    paddingTop: 4,
  },
  icon :{
    margin: 2,
    height: 25,
    width: 25,
    marginRight: 15,
  }
});
