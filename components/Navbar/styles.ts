import { StyleSheet } from "react-native";
import Colors from "../../Constants/Colors";
import { AppSettings, E, E2, E4 } from "../../Constants/Sizes";

export const styles = StyleSheet.create({
    navbarWithoutButton: {
        backgroundColor: Colors.darkGray,
    },
    navbarWithButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.darkGray,
    },
    title: {
        padding: AppSettings.elements / E,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: AppSettings.font * E,
        color: Colors.white
    },
    titleWithButton: {
        width: '75%',
        alignSelf: 'center',
        padding: AppSettings.elements / E4,
        fontSize: AppSettings.font * E,
        color: Colors.white
    },
    animatedView: {
        justifyContent: 'center',
        width: '25%',
        backgroundColor: Colors.lightGray,
    },
    icon: {
        fontSize: AppSettings.font * E2,
        color: Colors.darkGray,
    }
})