import { StyleSheet } from "react-native";
import Colors from "../../Constants/Colors";
import { E, E2, E4, SIZE } from "../../Constants/Sizes";

export const styles = StyleSheet.create({
    navbarWithoutButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: SIZE * E2,
        backgroundColor: Colors.darkGray,
        borderBottomColor: Colors.lightGray,
        borderBottomWidth: 2
    },
    navbarWithButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: SIZE * E2,
        backgroundColor: Colors.darkGray,
    },
    title: {
        paddingLeft: SIZE / E4,
        fontSize: SIZE * E,
        color: Colors.white
    },
    titleWithButton: {
        paddingLeft: SIZE / E4,
        fontSize: SIZE,
        color: Colors.white
    },
    animatedView: {
        height: SIZE * E2,
        width: SIZE * E2,
        backgroundColor: Colors.lightGray,
    },
    icon: {
        fontSize: SIZE * E2,
        color: Colors.darkGray,
    }
})