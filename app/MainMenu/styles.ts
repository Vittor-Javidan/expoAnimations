import { StyleSheet } from "react-native";
import Colors from "../../Constants/Colors";
import { AppSettings, E2, E4 } from "../../Constants/Sizes";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    menuItemButton: {
        marginTop: AppSettings.elements / E4,
        backgroundColor: Colors.lightGray
    },
    pressableArea: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: AppSettings.elements / E2,
    },
    menuItemText: {
        fontSize: AppSettings.font,
        color: Colors.black,
    },
})