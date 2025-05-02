import { View, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { Channel as ChannelType, StreamChat } from "stream-chat";
import { useRoute } from "@react-navigation/native";
import {
  Channel,
  MessageInput,
  MessageList,
  useChatContext,
} from "stream-chat-expo";
import { SafeAreaView } from "react-native-safe-area-context";

const MessageListScreen = () => {
  const route = useRoute<any>();
  const { cid } = route.params;
  const [channel, setChannel] = useState<ChannelType | null>(null);

  const { client } = useChatContext();

  useEffect(() => {
    const fetchChannel = async () => {
      const channels = await client?.queryChannels({ cid: { $eq: cid } });
      setChannel(channels[0]);
    };

    fetchChannel();
  }, [cid]);

  if (!channel) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={"blue"} />
      </View>
    );
  }

  return (
    <Channel channel={channel}>
      <MessageList />
      <SafeAreaView edges={["bottom"]}>
        <MessageInput />
      </SafeAreaView>
    </Channel>
  );
};

export default MessageListScreen;
