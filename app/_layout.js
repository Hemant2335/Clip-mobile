import {Stack} from "expo-router";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";


SplashScreen.preventAutoHideAsync();

const Layout = ()=>{

const [fontsLoaded] = useFonts({
        DMBold : require('../asset/fonts/DMSans-Bold.ttf'),
        DMRegular : require('../asset/fonts/DMSans-Regular.ttf'),
        DMMedium: require('../asset/fonts/DMSans-Medium.ttf'),
})

const onLayoutRootView = useCallback(async()=>{
    if(fontsLoaded)
    {
        await SplashScreen.hideAsync();
    }
    
},[fontsLoaded])

if(!fontsLoaded)
{
    return null
}


    return(
        <Stack onLayout = {onLayoutRootView}/>
    ) 
    
}

export default Layout;