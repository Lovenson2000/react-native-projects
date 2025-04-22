import { Image, type ImageSource } from "expo-image";
import { StyleSheet } from "react-native";

type ImageViewerProps = {
  imgSource: ImageSource;
};

export default function ImageViewer({ imgSource }: ImageViewerProps) {
  return <Image source={imgSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
