import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from '../../screens/Search';

const Stack = createNativeStackNavigator();

const SearchStackNavigators = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SearchScreen"
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#f2efee',
          },
          headerTitle: () => (
            <View style={styles.headerTitle}>
              <Text style={styles.headerText}>Order History</Text>
            </View>
          ),
        }}
        component={Search}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    flex: 1,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'medium',
    color: 'black', // You can set the text color here
  },
});

export default SearchStackNavigators;
