import { View, Text, Image, SafeAreaView, ScrollView } from "react-native";
import Headerbtn from "../../components/headerbtn/HeaderBtn";
import { Stack } from "expo-router";
import Banner from "../../components/banner/Banner";
import Profilebtn from "../../components/Profilebtn/Profilebtn";
import Logo from "../../asset/images/Clip_logo.png";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

const index = () => {
  return (
    <View style={{ backgroundColor: "#1A1a1a", height: "100%" }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#1a1a1a" },
          headerRight: () => (
            <Headerbtn
              source="align-justify"
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
      <SafeAreaView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ padding: 20 }}
        >
          <Text
            style={{ fontFamily: "DMBold", fontSize: 35, color: "#ffffff" }}
          >
            Find Your
          </Text>
          <View style={{ flexDirection: "row", gap: 4 }}>
            <Text
              style={{ fontFamily: "DMBold", fontSize: 35, color: "#ffffff" }}
            >
              Favorite
            </Text>
            <Text
              style={{ fontFamily: "DMBold", color: "#6741FF", fontSize: 35 }}
            >
              Hairstyle
            </Text>
          </View>
          <Banner />
          <Text
            style={{
              fontFamily: "DMBold",
              fontSize: 25,
              color: "#ffffff",
              marginTop: 20,
            }}
          >
            Services
          </Text>
          <View style = {{flexDirection : "row" , justifyContent : "space-around" , flexWrap : "wrap"}}>
            <ServiceCard name="Barber"/>
            <ServiceCard name="Therapy"/>
            <ServiceCard name="Salon"/>
          </View>
          <Text
            style={{
              fontFamily: "DMBold",
              fontSize: 25,
              color: "#ffffff",
              marginTop: 20,
            }}
          >
            Top Artists
          </Text>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default index;
