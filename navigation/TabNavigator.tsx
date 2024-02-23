import { Text, View, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const TabNavigator = () => {
  const navigation: any = useNavigation();

  return (
    <View>
      <Text onPress={() => navigation.navigate(`Intro`)} style={styles.btn}>
        Intro
      </Text>

      {/* <Button title="Home" onPress={() => navigation.navigate(`Home`)} />
      <Button title="Login" onPress={() => navigation.navigate(`Login`)} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "red",
    color: "white",
  },
});

export default TabNavigator;
