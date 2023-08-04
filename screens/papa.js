import React, { useState } from "react";
import Wow from "./wow";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Anjum from "./anjum";
export default function Papa() {
  const [x, setx] = useState("");
  const [d, setd] = useState("abc");

  function putartoputar(x) {
    console.log(x);
    setx(x);
    setd(x);
  }

  //   setjango(setx);

  return (
    <View
      style={{
        borderWidth: 4,
        alignItems: "center",
        borderColor: "green",
        margin: 30,
      }}
    >
      <Text style={{ fontSize: 40 }}>Main</Text>

      <Anjum putartoputar={putartoputar} />
      <Wow dataa={d} />
    </View>
  );
}
