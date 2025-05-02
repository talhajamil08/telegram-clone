import * as React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/home-screen";
import MessageListScreen from "./screens/message-list-screen";
import ChatProviderComponent from "./providers/chat-provider.component";
import Auth from "./screens/auth-screen";
import { AuthProvider, useAuth } from "./providers/auth-provider";
import ContactsScreen from "./screens/contacts-screen";

const Stack = createNativeStackNavigator();

function RootStack() {
  const { user } = useAuth();

  return (
    <Stack.Navigator>
      {user ? (
        <>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="MessageList" component={MessageListScreen} />
          <Stack.Screen name="Contacts" component={ContactsScreen} />
        </>
      ) : (
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
      <ChatProviderComponent>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </ChatProviderComponent>
      </AuthProvider>
    </GestureHandlerRootView>
  );
}
