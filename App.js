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
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  StyleSheet
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import backend from "./backend.json";

// Email validation
const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const LoginScreen = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    secureTextEntry: true,
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const { width, height } = useWindowDimensions();

  // Live email validation
  const handleEmailChange = (text) => {
    setFormData((prev) => ({ ...prev, email: text }));
    if (!text || isValidEmail(text)) {
      setEmailError("");
    } else {
      setEmailError("Invalid email format");
    }
  };

  // Live password validation
  const handlePasswordChange = (text) => {
    setFormData((prev) => ({ ...prev, password: text }));
    if (!text || text.length >= 5) {
      setPasswordError("");
    } else {
      setPasswordError("Password must be at least 5 characters");
    }
  };

  const handleLogin = () => {
    if (!formData.email || !formData.password) {
      Alert.alert("Error", "Please fill all fields.");
      return;
    }

    if (!isValidEmail(formData.email)) {
      setEmailError("Invalid email format");
      return;
    }

    if (formData.password.length < 5) {
      setPasswordError("Password must be at least 5 characters");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (
        formData.email === backend.email &&
        formData.password === backend.password
      ) {
        Alert.alert(
          "Login Success",
          `Validation successful!\n\nEmail: ${formData.email}\nPassword: ${formData.password}`
        );
        setFormData({
          email: "",
          password: "",
          secureTextEntry: true,
        });
      } else {
        Alert.alert("Login Failed", "Incorrect email or password.");
      }
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoiding}
      >
        <ScrollView
          contentContainerStyle={[
            styles.scrollViewContent,
            { paddingHorizontal: width * 0.05, paddingTop: height * 0.03 }
          ]}
          keyboardShouldPersistTaps="handled"
        >
          {/* App Title */}
          <Text style={[styles.appTitle, { paddingTop: height * 0.15, paddingBottom: height * 0.05 }]}>
            EntryPoint
          </Text>

          <View style={styles.card}>
            <Text style={styles.welcomeText}>
              Welcome Back!
            </Text>
            <Text style={styles.subtitleText}>
              Let's get started
            </Text>

            {/* Email */}
            <Text style={styles.labelText}>
              Email
            </Text>
            <TextInput
              accessible={true}
              accessibilityLabel="Email Input"
              value={formData.email}
              onChangeText={handleEmailChange}
              placeholder="Enter your email"
              placeholderTextColor="#666"
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.input}
            />
            {emailError ? (
              <Text style={styles.errorText}>
                {emailError}
              </Text>
            ) : null}

            {/* Password */}
            <Text style={[styles.labelText, styles.passwordLabel]}>
              Password
            </Text>
            <View style={styles.passwordContainer}>
              <TextInput
                value={formData.password}
                onChangeText={handlePasswordChange}
                placeholder="Enter your password"
                placeholderTextColor="#666"
                secureTextEntry={formData.secureTextEntry}
                style={styles.passwordInput}
                autoCapitalize="none"
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
            {passwordError ? (
              <Text style={styles.errorText}>
                {passwordError}
              </Text>
            ) : null}

            {/* Forgot Password */}
            <TouchableOpacity style={styles.forgotPasswordBtn}>
              <Text style={styles.forgotPasswordText}>
                Forgot Password?
              </Text>
            </TouchableOpacity>

            {/* Login Button */}
            <TouchableOpacity
              accessible={true}
              accessibilityLabel="Login Button"
              onPress={handleLogin}
              disabled={loading}
              style={styles.loginBtn}
            >
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.loginBtnText}>Login</Text>
              )}
            </TouchableOpacity>

            {/* Signup Link */}
            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>Don't have an account? </Text>
              <TouchableOpacity>
                <Text style={styles.signupLink}>
                  Signup
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFF1",
  },
  keyboardAvoiding: {
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: 40,
    alignItems: "center",
  },
  appTitle: {
    fontSize: 32,
    fontWeight: "600",
    color: "#000",
    textAlign: "center",
    alignSelf: "center",
  },
  card: {
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
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  subtitleText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  labelText: {
    marginLeft: 15,
    color: "#000",
    marginBottom: 5,
  },
  passwordLabel: {
    marginTop: 10,
  },
  input: {
    width: "100%",
    padding: 15,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 40,
    backgroundColor: "white",
    fontSize: 16,
  },
  errorText: {
    color: "red",
    marginLeft: 15,
    marginBottom: 5,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 40,
    backgroundColor: "white",
    paddingRight: 15,
    width: "100%",
  },
  passwordInput: {
    flex: 1,
    padding: 15,
    fontSize: 16,
  },
  forgotPasswordBtn: {
    alignSelf: "flex-end",
    marginVertical: 10,
  },
  forgotPasswordText: {
    color: "#566D67",
    textDecorationLine: "underline",
  },
  loginBtn: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 40,
    alignItems: "center",
    width: "100%",
    marginVertical: 10,
  },
  loginBtnText: {
    color: "white",
    fontSize: 18,
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  signupText: {
    color: "#555",
  },
  signupLink: {
    color: "#566D67",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
