import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
  useWindowDimensions,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const LoginScreen = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    secureTextEntry: true,
  });
  const { width, height } = useWindowDimensions();

  const handleLogin = () => {
    Alert.alert(
      "Login Info",
      `Email: ${formData.email}\nPassword: ${formData.password}`
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFF1" }}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: width * 0.05,
          paddingTop: height * 0.03,
          paddingBottom: 40,
          alignItems: "center",
        }}
        keyboardShouldPersistTaps="handled"
      >
        {/* App Name */}
        <Text
          style={{
            fontSize: 32,
            fontWeight: "600",
            color: "#000",
            textAlign: "center",
            alignSelf: "center",
            paddingTop: height * 0.15,
            paddingBottom: height * 0.05,
          }}
        >

        </Text>

        <View
          style={{
            width: "95%",
            maxWidth: 400,
            backgroundColor: "#FFF",
            borderRadius: 20,
            padding: 20,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.4,
            shadowRadius: 4,
            elevation: 5,
          }}
        >
          <Text
            style={{
              fontSize: 32,
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: 5,
            }}
          >
            Welcome Back!
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "#666",
              textAlign: "center",
              marginBottom: 20,
            }}
          >
            Let's get started
          </Text>

          {/* Email Field */}
          <Text
            style={{
              marginLeft: 15,
              color: "#000",
              marginBottom: 5,
            }}
          >
            Email
          </Text>
          <TextInput
            value={formData.email}
            onChangeText={(text) =>
              setFormData((prev) => ({ ...prev, email: text }))
            }
            placeholder="Enter your email"
            placeholderTextColor="#666"
            style={{
              width: "100%",
              padding: 15,
              borderWidth: 1,
              borderColor: "#000",
              borderRadius: 40,
              backgroundColor: "white",
              fontSize: 16,
            }}
          />

          {/* Password Field */}
          <Text
            style={{
              marginLeft: 15,
              color: "#000",
              marginBottom: 5,
              marginTop: 10,
            }}
          >
            Password
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "#000",
              borderRadius: 40,
              backgroundColor: "white",
              paddingRight: 15,
              width: "100%",
            }}
          >
            <TextInput
              value={formData.password}
              onChangeText={(text) =>
                setFormData((prev) => ({ ...prev, password: text }))
              }
              placeholder="Enter your password"
              placeholderTextColor="#666"
              secureTextEntry={formData.secureTextEntry}
              style={{
                flex: 1,
                padding: 15,
                fontSize: 16,
              }}
            />
            <TouchableOpacity
              onPress={() =>
                setFormData((prev) => ({
                  ...prev,
                  secureTextEntry: !prev.secureTextEntry,
                }))
              }
            >
              <Ionicons
                name={formData.secureTextEntry ? "eye-off" : "eye"}
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={{ alignSelf: "flex-end", marginVertical: 10 }}
          >
            <Text
              style={{
                color: "#566D67",
                textDecorationLine: "underline",
              }}
            >
              Forgot Password?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleLogin}
            style={{
              backgroundColor: "#000",
              padding: 15,
              borderRadius: 40,
              alignItems: "center",
              width: "100%",
              marginVertical: 10,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 18,
              }}
            >
              Login
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <Text style={{ color: "#555" }}>
              Don't have an account?{" "}
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  color: "#566D67",
                  fontWeight: "bold",
                  textDecorationLine: "underline",
                }}
              >
                Signup
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;