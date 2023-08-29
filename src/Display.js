import React from "react";
import { Text, StyleSheet } from "react-native";
import Estilo from "./estilo";

export default props => {
    return (
        <>
        <Text style={style.historico}>{props.resultado}</Text>
        </>
    )
}
