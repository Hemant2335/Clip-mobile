import React from 'react'
import {Image ,  TouchableOpacity} from "react-native"
import styles from './Header.style'
import Icon  from "react-native-vector-icons/Feather";

const Headerbtn = ({source , handlepress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handlepress}>
        <Icon name={source} size={25} color="#ffffff" />
    </TouchableOpacity>
  )
}

export default Headerbtn