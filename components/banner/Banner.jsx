import React from 'react'
import styles from './Banner.style'
import { View , TouchableOpacity } from 'react-native'
import { Image , Text } from 'react-native'
import poster from "../../asset/images/Hairposter.jpg";

const Banner = () => {
  return (
    <View>
        <TouchableOpacity style = {styles.cardcontainer}>
        <Image
            source={poster}
            style={styles.cardImg}
          />
        <Text style = {styles.cardtext}>Trending Now in India</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Banner