import {View , Text ,Image , TouchableOpacity} from "react-native"
import poster from "../../asset/images/poster.jpg"
import styles from "./ServiceCard.style"

const ServiceCard = ({name , image , }) => {
  return (
    <View>
    <TouchableOpacity style={styles.cardcontainer} onPress={()=>router.push(`/Player/${item?.id}`)}>
      <Image
        source={poster}
        style={styles.cardImg}
      />
    </TouchableOpacity>
    <Text style = {{fontFamily:"DMMedium" , color : "#ffffff"  , marginHorizontal : 5}} numberOfLines={2}>{name}</Text>
</View>
  )
}

export default ServiceCard