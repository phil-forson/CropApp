import { View, Text, StyleSheet } from "react-native";
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

export default function BuyerProductPage({navigation}) {
  return (
    <>
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="md-chevron-back-sharp" size={30} color="black" />
        </TouchableOpacity>
        <View>
          <Text style={styles.companyname}>Melavor Farm Consult</Text>
        </View>
      </View>
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
        <Text style={styles.subheader}> Top Sales</Text>
        <TouchableOpacity>
          <Text style={styles.subheader1}> View all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} >
      <View style={styles.c}>
        <TouchableOpacity onPress={() => navigation.navigate("ProductDetailsAdd")}>
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
        </TouchableOpacity><View>
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
    <View style={styles.header}>
        <Text style={styles.subheader}>Discounted</Text>
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
      <View style={styles.header}>
        <Text style={styles.subheader}> Available</Text>
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
    {/* <TouchableOpacity onPress={() => navigation.navigate("AddNewItem")} containerStyle={styles.addNew}>
    <View style={{display: "flex", flexDirection: "row", gap: 10}}>
      <Text style={styles.plusSign}>+</Text>
      <Text style={styles.addText}>Add New</Text>
    </View>
    </TouchableOpacity> */}
    </>
  )};

const styles = StyleSheet.create({
  container: {
    marginTop: '10%',
    marginHorizontal: 7,
  },
  cart: {
    borderWidth: 0,
    marginHorizontal: 5,
    borderRadius: 5,
    height: 140,
    width: 140,
    resizeMode: "cover",
    marginTop: 0,
  },
  c: {
    flexDirection: "row",
  },
  productDetailsCard: {
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "#EFEFEF",
    borderColor: "#F4F4F4",
    height: 76,
    width: 142,
    marginHorizontal: 4,
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
    borderRadius: 10,
    color: "#7E7200",
    textAlign: "center",
    width: 130,
    borderColor: "#FAFFDD",
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
    marginTop: 15,
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
    marginBottom: 10,
  },
  companyname: {
    marginLeft: 60,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "500",
    marginTop: '1.5%'
  },
});
