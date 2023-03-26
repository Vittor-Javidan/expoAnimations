import { StyleSheet } from "react-native";
import Colors from "../../Constants/Colors";
import { E2, E4, SIZE } from "../../Constants/Sizes";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    menuItemButton: {
        padding: SIZE / E2,
        marginTop: SIZE / E4,
        backgroundColor: Colors.lightGray
    },
    pressableArea: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuItemText: {
        fontSize: SIZE,
        color: Colors.black,
    },
})