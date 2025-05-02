import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { ChannelList } from "stream-chat-expo";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../providers/auth-provider";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";

const ChatsScreen = () => {
  const navigation = useNavigation<any>();
  const { user } = useAuth();

  return (
    <ChannelList
      filters={{ members: { $in: [user?.id ?? ""] } }}
      onSelect={({ cid }) => navigation.navigate("MessageList", { cid })}
    />
  );
};

export default ChatsScreen;

const styles = StyleSheet.create({});
