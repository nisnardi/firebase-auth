import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { router } from "expo-router";
import { z } from "zod";
import { auth } from "@/firebaseConfig";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const schema = z.object({
    email: z.string().email("Ingrese un email con formato válido"),
  });

  const handleLogin = async () => {
    const result = schema.safeParse({
      email: email,
    });

    if (result.success) {
      try {
        const user = await signInWithEmailAndPassword(auth, email, password);

        setError("");

        router.navigate("/(protected)/home");
      } catch (err) {
        setError(err.message);
      }
    } else {
      setError(result.error.issues[0].message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 16 },
  input: { borderWidth: 1, marginBottom: 10, padding: 8 },
  error: { color: "red", marginBottom: 10 },
});
