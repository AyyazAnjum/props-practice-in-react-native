import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const Wow = ({ data, changeAly, dataa }) => {
  const a = "Umer";

  return (
    <View style={{ borderWidth: 4, borderColor: "blue" }}>
      <Pressable
        android_ripple={{ color: "white" }}
        style={styles.button}
        onPress={() => changeAly(a)}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
          Send Data
        </Text>
      </Pressable>
      <Text>{data}</Text>
      <Text>{dataa}</Text>
    </View>
  );
};
export default Wow;
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    // alignItems: "flex-start",
    // justifyContent: "center",
  },
  button: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 10,
    margin: 20,
    marginTop: 40,
  },
});
