import { useRouter } from "expo-router";
import { View, Text, SafeAreaView , ScrollView , TouchableOpacity } from "react-native";
import { Stack } from "expo-router";

const index = () => {
  const router = useRouter();


  const SpotifyAuth = ()=>{
    router.push("/home")
  }

  return (
    <View style={{ backgroundColor: "#1A1A1A", height: "100%" }}>
      <Stack.Screen options={{headerStyle : {backgroundColor : "#1A1A1A"} , headerTitle : "" , headerShadowVisible : false}}/>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flex: 1, padding: 20, gap: 20 }}>
            <View style = {{height : 600 , justifyContent : "center" , alignItems : 'center'}}>
              <View style = {{height : 300  }}>
              </View>
              <Text style={{fontFamily : "DMBold" , color : "#ffffff" , fontSize : 20 , margin:10}}>Hey! Welcome</Text>
              <Text style={{fontFamily : "DMMedium" , color : "#ffffff" , fontSize : 15 , width : 330 , margin:10 ,justifyContent : "center" , alignItems:'center'}}>Here we Provide you all the songs one could ever listen to, with best quality</Text>
              <TouchableOpacity onPress={() => SpotifyAuth()} style ={{backgroundColor : "#F9541A",borderRadius:9 ,justifyContent:"center" , alignItems:"center" , width : 150 , height : 50}}>
                <Text style = {{fontFamily : "DMBold"}}>Get Started</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default index;
