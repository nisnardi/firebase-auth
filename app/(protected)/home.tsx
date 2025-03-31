import { Link } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

export default function Home() {
  return (
    <View>
      <Text>home</Text>
      <Link href="./todos">Ir a Todos</Link>
    </View>
  );
}
