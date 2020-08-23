import React, { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet, Image } from "react-native";

const Photo = ({ file, count }) => {
  const [Like, setLike] = useState(count);

  const increment = () => {
    setLike(Like + 1);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={file} />

      <TouchableOpacity onPress={increment}>
        <Text>{Like} Like</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
  },
  image: {
    height: 180,
    width: 180,
  },
});

export default Photo;
