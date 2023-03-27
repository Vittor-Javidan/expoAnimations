import { MotiView } from 'moti';
import { useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

export default function Button(): JSX.Element {
    
    const [active, setActive] = useState<boolean>(false)
    const [isPressed, setIspressed] = useState<boolean>(false)

    return (
        <MotiView 
            from={{
                backgroundColor: "#F00",
            }}
            animate={{
                backgroundColor: isPressed ? "#FFF" : active ? "#0F0" : "#F00",
                borderRadius: isPressed ? 50 : 100,
                transform: [{rotate: isPressed ? 10 : 0}]
            }}
            transition={{
                type: 'timing',
                duration: isPressed ? 100 : 300
            }}
            style={styles.circle}
        >
            <Pressable
                onPressIn={() => setIspressed(true)}
                onPressOut={() => setIspressed(false)}
                onPress={() => {
                    setActive(prev => !prev)
                    setIspressed(false)
                }}
                style={styles.pressableArea}
            >
                <Text
                    style={styles.text}
                >
                    {active ? "active" : "inactive"}
                </Text>
            </Pressable>
        </MotiView>
    )
}

const styles = StyleSheet.create({
    circle: {
        height: 200,
        width: 200,
        borderRadius: 100,
    },
    pressableArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: "#FFF", 
        fontSize: 40
    }
})
