import { Image, type ImageSource } from "expo-image";
import { StyleSheet } from "react-native";

type ImageViewerProps = {
  imgSource: ImageSource;
  selectedImage?: string;
};

export default function ImageViewer({
  imgSource,
  selectedImage,
}: ImageViewerProps) {
  const imageSource = selectedImage ? { uri: selectedImage } : imgSource;
  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
