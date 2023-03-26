import { StyleSheet } from "react-native";
import Colors from "../../Constants/Colors";

const SQUARE_SIZE = 100

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.black,
    },
    square: {
        height: SQUARE_SIZE,
        width: SQUARE_SIZE,
        backgroundColor: "#00F",
        borderRadius: 20,
    }
})