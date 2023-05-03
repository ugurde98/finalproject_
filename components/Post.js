import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const Post = ({item}) => {
    

    const Card = ({ image, title, description }) => {
        console.log('image: ', image);
        return (
          <View style={styles.card}>
            <Image source={{uri:image}} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{title}</Text>
              <Text style={styles.cardDescription}>{description}</Text>
            </View>
          </View>
        );
      };
  return  (
    <View style={styles.post}>
      <Card image={item?.item.image} title={item?.item.title} description={item?.item.description} />
      <View style={styles.postDetails}>
        <Text style={styles.postLikes}>{item?.item.likes} likes</Text>
        <Text style={styles.postComments}>{item?.item.comments} comments</Text>
      </View>
    </View>
  );
}

export default Post

const styles = StyleSheet.create({
    card: {
      borderRadius: 10,
      overflow: 'hidden',
      marginBottom: 10,
    },
    cardImage: {
      height: 300,
      width: '100%',
    },
    cardContent: {
      padding: 10,
    },
    cardTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    cardDescription: {
      fontSize: 16,
      color: 'gray',
    },
    post: {
      margin: 10,
    },
    postDetails: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
    },
    postLikes: {
      fontWeight: 'bold',
    },
    postComments: {
      color: 'gray',
    },
  });