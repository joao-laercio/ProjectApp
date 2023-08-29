import React from "react";
import { TouchableHighlight, Text, StyleSheet, Dimensions } from "react-native";
import Estilo from "./estilo";

export default props => {
    return (
        <TouchableHighlight onPress={props.onClick} >
            <Text style={props.operador ? style.botaoOperadores : style.botaoNumeros }>{props.valor}</Text>
        </TouchableHighlight>
    )
}
