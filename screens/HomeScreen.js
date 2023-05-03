import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Post from "../components/Post";
import Divider from "../components/Divider";

const HomeScreen = () => {
  const postData = [
    {
      image: "https://picsum.photos/id/1015/400/300",
      title: "Beautiful Mountain View",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare libero sed dolor placerat, at mattis nisi egestas. Pellentesque pulvinar nunc sapien, in pretium est molestie ac. ",
      likes: 231,
      comments: 15,
    },
    {
      image: "https://picsum.photos/id/1011/400/300",
      title: "Road Through Trees",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare libero sed dolor placerat, at mattis nisi egestas. Pellentesque pulvinar nunc sapien, in pretium est molestie ac. ",
      likes: 522,
      comments: 28,
    },
    {
      image: "https://picsum.photos/id/1012/400/300",
      title: "Autumn Leaves",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare libero sed dolor placerat, at mattis nisi egestas. Pellentesque pulvinar nunc sapien, in pretium est molestie ac. ",
      likes: 321,
      comments: 12,
    },
    {
      image: "https://picsum.photos/id/1025/400/300",
      title: "Peaceful Lake",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare libero sed dolor placerat, at mattis nisi egestas. Pellentesque pulvinar nunc sapien, in pretium est molestie ac. ",
      likes: 871,
      comments: 39,
    },
    {
      image: "https://picsum.photos/id/1027/400/300",
      title: "City Lights",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare libero sed dolor placerat, at mattis nisi egestas. Pellentesque pulvinar nunc sapien, in pretium est molestie ac. ",
      likes: 429,
      comments: 23,
    },
    {
      image: "https://picsum.photos/id/1031/400/300",
      title: "Sunset on the Beach",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare libero sed dolor placerat, at mattis nisi egestas. Pellentesque pulvinar nunc sapien, in pretium est molestie ac. ",
      likes: 635,
      comments: 42,
    },
    {
      image: "https://picsum.photos/id/1032/400/300",
      title: "Calm Waters",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare libero sed dolor placerat, at mattis nisi egestas. Pellentesque pulvinar nunc sapien, in pretium est molestie ac. ",
      likes: 953,
      comments: 58,
    },
  ];

  return (
    <View>
      <FlatList
        data={postData}
        renderItem={(item, index) => <Post item={item} />}
        keyExtractor={(item) => item.index}
        ItemSeparatorComponent={()=><Divider/>}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({

});
