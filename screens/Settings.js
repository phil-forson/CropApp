import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import React, { useContext } from "react";
import { Feather } from "@expo/vector-icons";

import Svg, { Circle, Rect, Path } from "react-native-svg";
import { UserContext } from "../contexts/UserContext";
import { Alert } from "react-native";
import useAuth from "../hooks/useAuth";
import useUser from "../hooks/useUser";

export default function Settings({ navigation }) {
  const width = Dimensions.get("screen").width;

  const {setUserLoggedIn, setPreviouslyLoggedIn} = useContext(UserContext)

  const {user} = useAuth()
  const {userData} = useUser(user?.uid)

  const handleSignOut = () => {
    setPreviouslyLoggedIn(true)
    setUserLoggedIn(false)
  }
  return (
    <View style={styles.container}>
      <View style={styles.svg}>
        <Svg
          width="410"
          height="183"
          viewBox="0 0 390 263"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M-100 0H540V252.085C500 242.085 271.719 273.122 194 273C117.05 272.878 -100 242.085 -100 242.085V0Z"
            fill="#E7FFE8"
          />
          <View style={styles.headercontainer}>
            {/* <View>
              <View>
                <Feather
                  name="menu"
                  size={25}
                  color="black"
                  style={styles.hmenu}
                />
              </View>
            </View> */}

            <View>
              <Text style={styles.farmtitle}>CropGap</Text>
            </View>
            <View>
              <Text style={styles.subtitle}>{userData?.fullName}</Text>
            </View>

            <View>
              <Text style={styles.mail}>{userData?.email}</Text>
            </View>
          </View>
        </Svg>
      </View>

      
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Security')}
        >
          <View style={styles.wrap}>
            <Image source={require("../assets/Images/Security.png")} />
            <Text style={styles.buttonText}>Security</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('PrivacyPolicy')}
        >
          <View style={styles.wrap}>
            <Image source={require("../assets/Images/PrivacyPolicy.png")} />
            <Text style={styles.buttonText}>Privacy Policy</Text>
          </View>
        </TouchableOpacity>
      </View>
      

      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Alert.alert("Sign Out", "Do you want to continue to sign out?", [
              {
                text: "No",
              },
              {
                text: "Yes",
                style: "destructive",
                onPress: handleSignOut,
              },
            ]);
          }}
        >
          <View style={styles.wrap}>
            <Image source={require("../assets/Images/Logout.png")} />
            <Text style={styles.buttonText}>Log out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 50,
    // marginHorizontal: 10,
    paddingVertical: 10,
    // paddingHorizontal: 10,
  },
  headercontainer: {
    paddingBottom: 50,
    paddingHorizontal: 10,
    marginTop: 50,
    marginHorizontal: 10,
  },
  farmtitle: {
    fontSize: 26,
    paddingBottom: 0,
    textAlign: "center",
    fontWeight: "500",
    color: "#007E23",
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "500",
  },
  mail: {
    fontSize: 16,
    paddingBottom: 15,
    textAlign: "center",
    fontWeight: "500",
    color: "#777777",
    fontWeight: "400",
  },
  button: {
    padding: 10,
  },
  wrap: {
    flexDirection: "row",
  },
  buttonText: {
    paddingLeft: 8,
    fontSize: 16,
    fontWeight: "400",
  },
  svg: {
    marginBottom: 20,
  },
});
