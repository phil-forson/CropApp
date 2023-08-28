import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import axios from 'axios'


export default function ConfirmPayment({ navigation }) {
const [selected, setSelected] = React.useState("");
const [number, setNumber] = useState("");
token = "45583518-fdb9-46e7-93d9-13976b94f870";

const handleInputChange = (text) => {
  setNumber(text);
};

const pay = async () => {
  const formData = new FormData();
  formData.append('currency', 'GHS');
  formData.append('amount', 1.00);
  formData.append('mode', 'Mobile Money');
  formData.append('paymentType', selected);
  formData.append('mobile_network', selected);
  formData.append('mobile_number', number);

  try {
    const response = await axios.post('https://paybox.com.co/pay', formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer ' + token,
      },
    });

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

const data = [
{
key: "1",
value: "Mtn",
},
{ key: "2", value: "Vodafone" },
{ key: "3", value: "AirtelTigo" },
];
return (
<View style={styles.container}>
<View style={styles.navbar}>
<TouchableOpacity onPress={() => navigation.navigate("Payment")}>
  <Feather name="arrow-left" size={27} color="black" />
</TouchableOpacity>
<View>
  <Text style={styles.cart}>Confirm Payment</Text>
</View>
</View>

<View>
<Text style={styles.flow}>Select payment type</Text>
<SelectList
  setSelected={(val) => setSelected(val)}
  data={data}
  save="value"
  style={styles.dropdown}
/>
</View>
<View>
<Text style={styles.flow}> Phone Number</Text>

<TextInput style={styles.input} 
    placeholder="Enter your phone number" 
    value={number}
    onChangeText={handleInputChange}/>
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
<View style={styles.dashedLine}></View>
</View>
<View style={styles.bottomsection}>
  <Text style={styles.bolden}>Total</Text>
  <Text style={styles.bolden}> $57.00</Text>
</View>

<TouchableOpacity
  style={styles.button}
  onPress={() => pay()}
>
  <Text style={styles.buttonText}>Pay</Text>
</TouchableOpacity>
</View>
</View>
);
}

const styles = StyleSheet.create({
container: {
marginTop: "10%",
paddingVertical: 10,
paddingHorizontal: 10,
position: 'relative',
},
dropdown: {
    position: 'absolute', 
    top: '100%',
    zIndex: 10,
},

uppersection: {
borderwidth: 10,
borderRadius: 15,
height: 65,
backgroundColor: "#E3FFE8",
flexDirection: "row",
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
// bottompage: {
//   marginTop: 300,
// },

bottomsection: {
paddingVertical: 5,
// marginTop: 50,
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
},
cart: {
fontSize: 23,
fontWeight: "500",
textAlign: "center",
marginBottom: 20,
marginLeft: 70,
},
navbar: {
flexDirection: "row",
textAlign: "center",
// alignItems: "flex-start",
// justifyContent: "space-between",
},
bottompage: {
marginTop: '70%',
},
bolden: {
fontWeight: "600",
},

input: {
borderRadius: 10,
borderWidth: 1,
paddingVertical: 8,
paddingHorizontal: 20,
marginHorizontal: 0,
fontSize: 14,
borderColor: "#777777",
},
flow: {
color: "#777777",
marginTop: 10,
paddingBottom: 5,
paddingLeft: 5,
},
paymentDetails: {
marginVertical: 10,
},
dashedLine: {
  borderStyle: "dashed", // Use dashed border style
  borderColor: "green", // Color of the dashed line
  borderWidth: 1, // Width of the dashed line
  width: 'auto', // Width of the dashed line container
  height: 0,
  marginVertical: 5, // Height of the dashed line container (you can adjust this)
},
});