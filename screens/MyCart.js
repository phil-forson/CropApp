import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign, Feather } from "@expo/vector-icons";

export default function MyCart({ navigation }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Feather name="arrow-left" size={27} color="black" />
        </TouchableOpacity>
        <View>
          <Text style={{textAlign: 'center', fontSize: 22, marginBottom: 20, marginLeft: 130}}>My Cart</Text>
        </View>
      </View>
      <View style={styles.uppersection}>
        <View style={styles.logo}>
          <Image
            source={require("../assets/Images/CompanyLogo.png")}
            style={styles.logoImage}
          />
        </View>
        <View style={styles.info}>
          <Text style={styles.header}>Ghana Tilapia Seed Project</Text>
          <View style={styles.subheader}>
            <Text>054 4845 652 | </Text>
            <Text>ghseed@gmail.com</Text>
          </View>
        </View>
      </View>

      <View style={[styles.checkoutCard, styles.shadowProp]}>
        <View style={styles.shadowProp}>
          <Image
            source={require("../assets/Images/CheckoutCardImage.png")}
            style={[styles.cart, styles.shadowProp]}
          />
        </View>
        <View style={styles.middlesection}>
          <View style={styles.historydata}>
            <Text style={styles.bolden}>Tilapia</Text>
            <Text style={styles.totalprice}> per kg</Text>
          </View>

          <Text style={styles.state}>5 to 7 mins</Text>
          <View style={styles.prices}>
            <View>
              <Text style={styles.moreDetails}>$3.4</Text>
            </View>
            <View>
              <Text style={styles.discounted}>$5.0</Text>
            </View>
          </View>
        </View>

        <View style={styles.history}>
          <Text style={styles.totalprice}>$12.20</Text>
          <View>
            <View style={styles.quantity}>
              <TouchableOpacity>
                <AntDesign name="minussquareo" size={24} color="#EA5555" />
              </TouchableOpacity>
              <Text style={styles.boldenquantity}> 3 </Text>

              <View style={styles.quantity}>
                <TouchableOpacity>
                  <AntDesign name="plussquareo" size={24} color="green" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>

            <View style={[styles.checkoutCard, styles.shadowProp]}>
        <View style={styles.shadowProp}>
          <Image
            source={require("../assets/Images/CheckoutCardImage.png")}
            style={[styles.cart, styles.shadowProp]}
          />
        </View>
        <View style={styles.middlesection}>
          <View style={styles.historydata}>
            <Text style={styles.bolden}>Tilapia</Text>
            <Text style={styles.totalprice}> per kg</Text>
          </View>

          <Text style={styles.state}>5 to 7 mins</Text>
          <View style={styles.prices}>
            <View>
              <Text style={styles.moreDetails}>$3.4</Text>
            </View>
            <View>
              <Text style={styles.discounted}>$5.0</Text>
            </View>
          </View>
        </View>

        <View style={styles.history}>
          <Text style={styles.totalprice}>$12.20</Text>
          <View>
            <View style={styles.quantity}>
              <TouchableOpacity>
                <AntDesign name="minussquareo" size={24} color="#EA5555" />
              </TouchableOpacity>
              <Text style={styles.boldenquantity}> 3 </Text>

              <View style={styles.quantity}>
                <TouchableOpacity>
                  <AntDesign name="plussquareo" size={24} color="green" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>


      <View style={styles.bottompage}>
        <View style={styles.bottomsection}>
          <Text>Discount</Text>
          <Text>-$12.80</Text>
        </View>
        <View style={styles.bottomsection}>
          <Text>Sub-Total</Text>
          <Text>$57.00</Text>
        </View>
        <View style={styles.bottomsectionSeparator}>
          <View style={styles.dashedline}>
          </View>
        </View>
        <View style={styles.bottomsection}>
          <Text style={styles.bolden}>Total</Text>
          <Text style={styles.bolden}> $57.00</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Payment")}
        >
          <Text style={styles.buttonText}>Checkout</Text>
        </TouchableOpacity>
      </View>


      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '10%',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },

  uppersection: {
    borderwidth: 10,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#E3FFE8",
    flexDirection: "row",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#007E23",
    borderRadius: 10,
    marginBottom: 120,
    marginTop: 10,
  },
  buttonText: {
    textAlign: "center",
    paddingBottom: 10,
    paddingTop: 10,
    color: "white",
    fontSize: 18,
  },

  bottomsection: {
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  header: {
    fontSize: 17,
    fontWeight: "bold",
  },
  subheader: {
    marginBottom: 7,
    flexDirection: "row",
  },
  info: {
    justifyContent: "space-around",
  },
  logo: {
    marginHorizontal: 10,
    resizeMode: "contain",
  },
  logoImage: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    borderRadius: 50,
  },
  cart: {
    marginBottom: 20,
    marginLeft: 20,
    borderRadius: 50,
    position: 'absolute',
    height: 100,
    width: 100,
    top: -35,
    // left: -150,
  },
  shadowProp: {  
    shadowOffset: {width: -2, height: 4},  
    shadowColor: '#171717',  
    shadowOpacity: 0.2,  
    shadowRadius: 3,  
  },
  navbar: {
    flexDirection: "row",
  },
  bottompage: {
    marginTop: 90,
  },
  bolden: {
    fontWeight: "600",
  },
  checkoutCard: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#EFEFEF",
    borderColor: "#EFEFEF",
    height: 80,
    marginHorizontal: 13,
    flexDirection: "row",
    marginTop: 40,
    position: 'relative',
    marginBottom: 15,

  },
  middlesection: {
    marginLeft: 130,

  },
  historydata: {
    flexDirection: "row",
    padding: 3,
  },
  bolden: {
    fontWeight: "bold",
    fontSize: 16,
  },
  state: {
    color: "#7E7200",
    paddingLeft: 3,
    width: 100,
    borderColor: "#FAFFDD",
  },
  prices: {
    flexDirection: "row",
    alignItems: 'center',
    gap: 5,
  },
  discounted: {
    color: "#007E23",
    marginTop: 8,
    textDecorationLine: "line-through",
    fontSize: 12,
  },
  moreDetails: {
    color: "#007E23",
    marginTop: 3,
    fontSize: 19,
    textAlign: "justify",
  },
  history: {
    justifyContent: "space-around",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    gap: 5,
    marginLeft: 65,
    marginBottom: 10,
  },
  quantity: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  totalprice: {
    color: "#7F8184",
  },
  dashedline: {
    borderStyle: "dashed", // Use dashed border style
    borderColor: "green", // Color of the dashed line
    borderWidth: 1, // Width of the dashed line
    width: 'auto',
    borderBottomWidth: 1,
    marginVertical: 5, // Width of the dashed line container
    height: 0, // Height of the dashed line container (you can adjust this)
  },
});
