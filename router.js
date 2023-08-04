import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Umer from "./screens/umer";
import Anjum from "./screens/anjum";
import Papa from "./screens/papa";

const Router = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="umer"
        screenOptions={{
          headerShown: false,
          animation: "none",
        }}
      >
        <Stack.Screen name="umer" component={Umer} />
        <Stack.Screen name="anjum" component={Anjum} />
        <Stack.Screen name="papa" component={Papa} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Router;
