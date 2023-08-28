import React, { useMemo, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { AntDesign } from "@expo/vector-icons";

export default function ProductDetailsEdit({ navigation }) {
  const bottomSheetRef = React.createRef();
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };
  const descriptionText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis dolore eu fugiat nulla pariatur. dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis dolore eu fugiat nulla pariatur.`;

  const openBottomSheet = () => {
    bottomSheetRef.current.expand();
  };

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={openBottomSheet}>
        <Text>Show Bottom Sheet</Text>
      </TouchableOpacity> */}
      <Image
        source={require("../assets/Images/CheckoutCardImage.png")}
        style={styles.img}
      />

      <BottomSheet
        ref={bottomSheetRef}
        index={0} // Initial index, 0 is collapsed
        snapPoints={["50%", "100%"]}
      >
        <View style={styles.bottomSheetContent}>
          <View style={styles.headings}>
            <View>
              <Text style={styles.header}>Tilapia</Text>
            </View>
            <View>
              <Text style={styles.subheader}> per 5kg</Text>
            </View>
          </View>
          <View style={styles.horizontalLine} />
          <View>
            <Text style={styles.details}>Product Details / Description</Text>
          </View>
          <View style={styles.horizontalLine2} />

          <View style={styles.info}>
            <Text style={styles.subheader}>
              {expanded ? descriptionText : descriptionText.slice(0, 240)}
            </Text>

            <View style={styles.horizontalLine3} />
          </View>

          <TouchableOpacity onPress={toggleExpansion} style={styles.readmore}>
            <Text style={styles.readmore}>
              {expanded ? "Read less" : "Read more"}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.wrap}>
          <View>
            <Text style={styles.header}>$10.00</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("EditItem")}
        >
          <Text style={styles.buttonText}>Edit Item</Text>
        </TouchableOpacity>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomSheetContent: {
    backgroundColor: "white",
    padding: 10,
  },
  headings: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  readmore: {
    alignSelf: "flex-end",
    color: "green",
    fontSize: 14,
    marginTop: 0,
  },
  header: {
    fontSize: 19,
    fontWeight: "500",
  },
  subheader: {
    color: "#7F8184",
    fontSize: 14,
    flexWrap: "wrap",
    marginBottom: 0,
  },
  horizontalLine: {
    height: 2, // Adjust the height as needed
    width: "98%", // Set to 80% of the screen width
    backgroundColor: "#EAEAEA", // Gray color (or any other color you prefer)
    alignSelf: "center", // Center the line horizontally
    marginTop: 10,
  },
  horizontalLine2: {
    height: 2, // Adjust the height as needed
    width: "98%", // Set to 80% of the screen width
    backgroundColor: "#EAEAEA", // Gray color (or any other color you prefer)
    alignSelf: "center", // Center the line horizontally
    marginTop: 4,
    marginBottom: 15,
  },
  horizontalLine3: {
    height: 2, // Adjust the height as needed
    width: "98%", // Set to 80% of the screen width
    backgroundColor: "#EAEAEA", // Gray color (or any other color you prefer)
    alignSelf: "center", // Center the line horizontally
    marginVertical: 10,
  },

  button: {
    backgroundColor: "#007E23",
    borderRadius: 10,
    marginTop: 20,
    marginHorizontal: 10,
  },
  buttonText: {
    textAlign: "center",
    paddingBottom: 10,
    paddingTop: 10,
    color: "white",
    fontSize: 18,
  },
  details: {
    color: "#7F8184",
    fontSize: 18,
    marginVertical: 5,
  },
  quantity: {
    marginRight: 0,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  boldenquantity: {
    fontWeight: "bold",
    fontSize: 18,
    paddingHorizontal: 4,
  },
  wrap: {
    marginHorizontal: 15,
    marginTop: 5,
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
