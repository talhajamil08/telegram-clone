import React, { PropsWithChildren, useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { StreamChat } from "stream-chat";
import { Chat, OverlayProvider } from "stream-chat-expo";
import { useAuth } from "./auth-provider";
import { supabase } from "../lib/supabase";
import { tokenProvider } from "../utils/token-providers";

const client = StreamChat.getInstance(
  process.env.EXPO_PUBLIC_STREAM_API_KEY as string
);

const ChatProviderComponent = ({ children }: PropsWithChildren) => {
  const [isReady, setIsReady] = useState(false);
  const { profile } = useAuth();
 
  const {
    data: { publicUrl },
  } = supabase.storage.from("avatars").getPublicUrl(profile?.avatar_url || ""); //get public avatar url of current user

  useEffect(() => {
    if (!profile) return;

    const connect = async () => {
      await client.connectUser(
        {
          id: profile.id,
          name: profile.full_name,
          image: publicUrl,
        },
        tokenProvider
      );
      setIsReady(true);
    };

    connect();

    //   connect().then(async () => {
    //     const channel = client.channel("messaging", "the_park", {
    //       name: "The Park",
    //     });
    //     // await channel.watch();
    //   });

    return () => {
      if(isReady){
        client.disconnectUser();
      }
      
      setIsReady(false);
    };
  }, [profile?.id, publicUrl]);

  if (!isReady && profile)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={"blue"} />
      </View>
    );

  return (
    <>
      <OverlayProvider>
        <Chat client={client}>{children}</Chat>
      </OverlayProvider>
    </>
  );
};

export default ChatProviderComponent;
