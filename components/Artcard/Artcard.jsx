import React from 'react'
import {View , Text ,Image , TouchableOpacity} from "react-native"
import poster from "../../asset/images/poster.jpg"
import styles from './Artcard.style'

const Artcard = ({item}) => {
  return (
    <View style = {styles.newcont}>
        <TouchableOpacity style={styles.cardcontainer}>
          <Image
            source={poster}
            style={styles.cardImg}
          />
        </TouchableOpacity>
        <Text style = {{fontFamily:"DMMedium"  , marginHorizontal : 5}} numberOfLines={2}>Someone</Text>
    </View>
  )
}

export default Artcard ;