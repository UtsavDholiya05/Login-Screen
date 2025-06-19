# EntryPoint Login Screen - React Native

A simple, responsive Login Screen UI built with React Native.
This project demonstrates basic UI components, layout, styling, input validation, and local backend integration using a `backend.json` file.

---

## ✨ Features

* App title display
* Email and password input fields with validation
* Show/hide password toggle for password input
* Styled and interactive login button
* "Forgot Password?" and "Sign Up" links
* Responsive, clean, and accessible design
* Local backend validation using `backend.json`

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/UtsavDholiya05/Login-Screen.git
cd Login-Screen
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

**Install required packages:**

```bash
npm install @react-native-async-storage/async-storage
npm install @expo/vector-icons
```

If you are using React Native CLI, also run:

```bash
npx pod-install
```

> These libraries are used for data storage and icons respectively. Make sure to import them wherever required in your code.

### 3. Run the App

If you are using **Expo**:

```bash
npx expo start
```

If you are using **React Native CLI**:

```bash
npx react-native run-android
# or
npx react-native run-ios
```

---

### 4. `backend.json` Example

This file simulates a local backend and is used for login validation.

```json
{
  "email": "test@example.com",
  "password": "yourpassword"
}

