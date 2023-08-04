import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Umer = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: "white" }}
        style={styles.button}
        onPress={() => navigation.navigate("papa")}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
          WELCOME
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "green",
    padding: 40,
    borderRadius: 10,
  },
});

export default Umer;
