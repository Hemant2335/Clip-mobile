import React from 'react'
import { Image , TouchableOpacity , Text } from 'react-native'
import styles from './Logo.style'

const LogoBtn = ({source , handlepress}) => {
  return (
    <TouchableOpacity style = {styles.container}>
        <Image source={source} style = {styles.btnImg} />
    </TouchableOpacity>
  )
}

export default LogoBtn