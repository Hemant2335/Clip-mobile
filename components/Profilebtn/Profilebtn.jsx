import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from "react-native";
import poster from "../../asset/images/poster.jpg"
import styles from "./Profile.style";
import { useState } from "react";

const Profilebtn = ({source ,handlepress}) => {

    const [data, setdata] = useState(null)

  return (
    <View style={styles.newcont}>
      <TouchableOpacity style={styles.cardcontainer} onPress={handlepress}>
        <Image
          source={!data?.images?.[0] ? poster : { uri: data?.images?.[0]?.url }}
          style={styles.cardImg}
        />
      </TouchableOpacity>
      <Text
        style={{ fontFamily: "DMBold", marginHorizontal: 5 , color : "#ffffff"  , fontSize : 13}}
        numberOfLines={2}
      >
        Nishant Kumar
      </Text>
    </View>
  );
};

export default Profilebtn;
