import { View, Text ,Image } from 'react-native'
import Headerbtn from '../../components/headerbtn/HeaderBtn';
import { Stack } from 'expo-router';
import LogoBtn from '../../components/logobtn/LogoBtn';
import Profilebtn from '../../components/Profilebtn/Profilebtn';
import Logo from '../../asset/images/Clip_logo.png';
import search from '../../asset/icons/search.png'

const index = () => {
  return (
    <View style={{ backgroundColor: "#1A1a1a", height: "100%" }}>
    <Stack.Screen
      options={{
        headerStyle: { backgroundColor: "#1a1a1a" },
        headerRight: () => (
          <Headerbtn
            source={search}
            handlepress={() => {
              router.push("/Searchpage");
            }}
          />
        ),
        headerShadowVisible: false,
        headerTitle: "",
        headerLeft: () => (
          <Profilebtn
            source={Logo}
            handlepress={() => {
              router.push("/User");
            }}
          />
        ),
      }}
    />
  </View>
  )
}

export default index