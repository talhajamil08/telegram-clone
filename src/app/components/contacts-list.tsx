import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useAuth } from "../providers/auth-provider";
import { useChatContext } from "stream-chat-expo";
import { useNavigation } from "@react-navigation/native";

const ContactList = ({ contacts }: any) => {
  const { client } = useChatContext();
  const navigation = useNavigation<any>();
  const { user: currentUser } = useAuth();

  const createChannel = async () => {
    const channel = client.channel("messaging", {
      members: [currentUser?.id, contacts.id], // creating the channel between two users
    });
    await channel.watch();
    navigation.navigate("MessageList", { cid: channel.cid });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={createChannel}>
      <Text>{contacts.full_name}</Text>
    </TouchableOpacity>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 12,
  },
});
