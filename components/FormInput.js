import React from "react";
import { View, Text, TextInput } from "react-native";

export default function FormInput({ label, error, ...props }) {
  return (
    <View style={{ marginBottom: 10 }}>
      <Text style={{ marginLeft: 15, color: "#000", marginBottom: 5 }}>{label}</Text>
      <TextInput
        style={{
          width: "100%",
          padding: 15,
          borderWidth: 1,
          borderColor: error ? "red" : "#000",
          borderRadius: 40,
          backgroundColor: "white",
          fontSize: 16,
        }}
        {...props}
      />
      {error ? (
        <Text style={{ color: "red", marginLeft: 15, marginBottom: 5 }}>{error}</Text>
      ) : null}
    </View>
  );
}