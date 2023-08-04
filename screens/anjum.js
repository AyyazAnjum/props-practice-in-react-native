import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Wow from "../screens/wow";

const Anjum = ({ putartoputar }) => {
  const [data, setData] = useState("Jao kuch nahi milega");

  const [abc, setabc] = useState("Anjum");

  function changeAly(abc) {
    setabc(abc);
  }

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        android_ripple={{ color: "white" }}
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
          GO BACK
        </Text>
      </Pressable>
      <Text>My name is {abc}</Text>
      <Wow data={data} changeAly={changeAly} />

      <Pressable
        android_ripple={{ color: "white" }}
        style={styles.button}
        onPress={() => setData("Data Changed")}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
          Change Data
        </Text>
      </Pressable>
      <Pressable
        android_ripple={{ color: "white" }}
        style={styles.button}
        onPress={() => putartoputar("sexy boy")}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
          Child to child
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    borderWidth: 4,
    borderColor: "red",
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

export default Anjum;
