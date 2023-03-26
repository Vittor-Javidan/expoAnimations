import { StyleSheet } from "react-native";
import Colors from "../../Constants/Colors";
import { E, E2, SIZE } from "../../Constants/Sizes";

export const styles = StyleSheet.create({
    navbarWithoutButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.darkGray,
        borderBottomColor: Colors.lightGray,
        borderBottomWidth: 2
    },
    navbarWithButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.darkGray,
    },
    title: {
        fontSize: SIZE * E,
        color: Colors.white
    },
    titleWithButton: {
        fontSize: SIZE,
        color: Colors.white
    },
    animatedView: {
        backgroundColor: Colors.lightGray,
    },
    icon: {
        fontSize: SIZE * E2,
        color: Colors.darkGray,
    }
})