import { StyleSheet } from "react-native";

export default StyleSheet.create({
    historico:{
        fontSize: 46,
        textAlign: "right",
        paddingEnd: 30,
        paddingTop: 30
    },
    resultado:{
        fontSize: 32,
        textAlign: "right",
        paddingEnd: 30,
        paddingTop: 20
    },
    botaoNumeros:{
        fontSize: 36,
        padding: 20,
        fontWeight: "bold",
        borderColor: "white",
        backgroundColor: "#d3d3d3",
        color: "black",
        borderWidth: 1,
        width: Dimensions.get("window").width / 4,
        height: Dimensions.get("window").width / 4,
        textAlign: "center",

    },
    botaoOperadores:{
        fontSize: 36,
        padding: 20,
        fontWeight: "bold",
        borderColor: "white",
        backgroundColor: "#a9a9a9",
        color: "green",
        borderWidth: 1,
        width: Dimensions.get("window").width / 4,
        height: Dimensions.get("window").width / 4,
        textAlign: "center",
    }

})