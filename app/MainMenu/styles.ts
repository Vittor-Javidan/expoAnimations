import { StyleSheet } from "react-native";
import Colors from "../../Constants/Colors";
import { E, SIZE } from "../../Constants/Sizes";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    menuItemButton: {
        height: SIZE * E,
        backgroundColor: Colors.lightGray
    },
    pressableArea: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuItemText: {
        fontSize: SIZE,
        color: Colors.black,
    },
})