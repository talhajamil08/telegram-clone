import {
  StreamVideo,
  StreamVideoClient,
  User,
} from "@stream-io/video-react-native-sdk";
import { PropsWithChildren, useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { useAuth } from "./auth-provider";
import { supabase } from "../lib/supabase";
import { tokenProvider } from "../utils/token-providers";
const apiKey = process.env.EXPO_PUBLIC_STREAM_API_KEY as string;
const VideoProvider = ({ children }: PropsWithChildren) => {
  const [videoClient, setVideoClient] = useState<StreamVideoClient | null>(
    null
  );

  const { profile } = useAuth();

  useEffect(() => {
    if (!profile) return;

    const {
      data: { publicUrl },
    } = supabase.storage
      .from("avatars")
      .getPublicUrl(profile?.avatar_url || ""); //get public avatar url of current user

    const user = {
      id: profile?.id,
      name: profile?.full_name,
      image: publicUrl,
    };
    const initVideoClient = async () => {
      const client = new StreamVideoClient({ apiKey, user, tokenProvider });
      setVideoClient(client);
    };

    initVideoClient();

    return () => {
      if (videoClient) videoClient.disconnectUser();
    };
  }, [profile?.id]);

  if (!videoClient)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={"blue"} />
      </View>
    );
  return <StreamVideo client={videoClient}>{children}</StreamVideo>;
};

export default VideoProvider;
