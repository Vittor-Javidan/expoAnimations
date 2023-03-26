import { StyleSheet } from "react-native";
import Colors from "../../Constants/Colors";
import { E, E2, E4, SIZE } from "../../Constants/Sizes";

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
        padding: SIZE / E,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: SIZE * E,
        color: Colors.white
    },
    titleWithButton: {
        width: '75%',
        padding: SIZE / E4,
        fontSize: SIZE * E,
        color: Colors.white
    },
    animatedView: {
        justifyContent: 'center',
        width: '25%',
        backgroundColor: Colors.lightGray,
    },
    icon: {
        fontSize: SIZE * E2,
        color: Colors.darkGray,
    }
})