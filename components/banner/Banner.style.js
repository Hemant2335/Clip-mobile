import { StyleSheet } from "react-native";


const styles = StyleSheet.create({

    cardtext : {
        fontFamily : "DMMedium",
        color : "white",
        fontSize : 25,
        width : 150
    },
    cardcontainer : {
        marginTop : 10,
        height : 150,
        borderRadius : 9,
        flexDirection : "row",
        alignItems : "center",
        gap : 20 , 
        backgroundColor : "black",
        paddingHorizontal : 20
    },
    cardImg :{
        height : 100,
        width : 100 , 
        borderRadius : 9
    }
});

export default styles;