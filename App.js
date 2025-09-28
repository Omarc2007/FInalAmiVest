import React from "react";
import { 
  SafeAreaView, 
  View, 
  ImageBackground, 
  ScrollView, 
  Text, 
  TouchableOpacity, 
  StyleSheet 
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import NeedAssistance from "./AmiVest/needassistance.js"; 
import Help from "./AmiVest/mainhelper.js";
import Client from "./AmiVest/tobehelped.js";
import CallCategorizations from "./AmiVest/helpeedecidingcalls.js";
import TextCategorizations from "./AmiVest/helpeedecidingtexts.js";
import TextCategorization from "./AmiVest/helperdecidingtexts.js";
import CallCategorization from "./AmiVest/helpeedecidingcalls.js";
import TagsPick2 from "./AmiVest/tagspick.js";

const Stack = createNativeStackNavigator();

// Home Screen
function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground 
        source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/UBUqNXaFuI/0rix7saa_expires_30_days.png" }}
        resizeMode="stretch"
        style={styles.view}
      >
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
          {/* Title */}
          <Text style={styles.text}>AmiVest</Text>

          {/* Need Assistance */}
          <View style={styles.card}>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => navigation.navigate("NeedAssistance")}
            >
              <Text style={styles.text2}>Need Assistance?</Text>
            </TouchableOpacity>
          </View>

          {/* Be A Volunteer */}
          <View style={styles.card}>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => navigation.navigate("Help")}
            >
              <Text style={styles.text2}>Be A Volunteer</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

// Main App with Navigation
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Home */}
        <Stack.Screen name="Home" component={HomeScreen} />

        {/* New screen */}
        <Stack.Screen name="NeedAssistance" component={NeedAssistance} />

        {/* Other Screens */}
        <Stack.Screen name="Help" component={Help} />
        <Stack.Screen name="Assistance" component={Client} />
        <Stack.Screen name="CallCategorization" component={CallCategorization} />
        <Stack.Screen name="TextCategorization" component={TextCategorization} />
        <Stack.Screen name="CallCategorizations" component={CallCategorizations} />
        <Stack.Screen name="TextCategorizations" component={TextCategorizations} />

        <Stack.Screen name="TagsPicks" component={TagsPick2} />
        <Stack.Screen name = "Client" component = {Client} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  view: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 80,
    paddingBottom: 100,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 64,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 120,
    textAlign: "center",
  },
  // Shared card style
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    marginHorizontal: 30,
    marginBottom: 40,
    shadowColor: "#0000004D",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 3,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  // Button inside card
  button: {
    width: "100%",         
    alignItems: "center",
    paddingVertical: 22,
  },
  text2: {
    color: "#000000",
    fontSize: 22,
    fontWeight: "600",
  },
});