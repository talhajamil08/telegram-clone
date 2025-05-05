import {
  CallContent,
  StreamCall,
  useStreamVideoClient,
} from "@stream-io/video-react-native-sdk";

const callId = "default_fbb7f140-bed8-47c5-bedc-5d7c70b85750";

const CallScreen = () => {
  const client = useStreamVideoClient();
  const call = client.call("default", callId);
  call?.join({ create: true });
  return (
    <StreamCall call={call}>
      <CallContent />
    </StreamCall>
  );
};

export default CallScreen;
