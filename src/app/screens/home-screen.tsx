import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import ChatsScreen from "./chats-screen";
import ProfileScreen from "./profile-screen";
import { FontAwesome6 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
function MyTabs() {
  const navigation = useNavigation<any>();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Chat"
        component={ChatsScreen}
        options={{
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 10 }}
              onPress={() => navigation.navigate("Contacts")}
            >
              <FontAwesome6 name="users" size={24} color="gray" />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ size, color }) => (
            <Entypo name="chat" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const HomeScreen = () => {
  return <MyTabs />;
};

export default HomeScreen;

const styles = StyleSheet.create({});
