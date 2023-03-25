import { useAnimatedStyle, withRepeat, withSequence, withTiming } from 'react-native-reanimated';


export default function PureAnimation() {

    let SQUARE_COORDINATE_CHANGING = 100

    return useAnimatedStyle(() => {
        return {
            opacity: withRepeat(
                withSequence(
                    withTiming(0.5, { duration: 500 }),
                    withTiming(1, { duration: 500 })
                ), 
                Infinity, 
                true
            ),
            borderRadius: withRepeat(
                withSequence(
                    withTiming(100, { duration: 500 }),
                    withTiming(0, { duration: 500 })
                ), 
                Infinity, 
                true
            ),
            transform: [
                {translateY: withRepeat(
                    withSequence(
                        withTiming(SQUARE_COORDINATE_CHANGING, { duration: 1000 }),
                        withTiming(-SQUARE_COORDINATE_CHANGING, { duration: 1000 }),
                        withTiming(-SQUARE_COORDINATE_CHANGING, { duration: 1000 }),
                        withTiming(SQUARE_COORDINATE_CHANGING, { duration: 1000 }),
                    ), 
                    Infinity, 
                    true
                )},
                {translateX:  withRepeat(
                    withSequence(
                        withTiming(SQUARE_COORDINATE_CHANGING, { duration: 1000 }),
                        withTiming(SQUARE_COORDINATE_CHANGING, { duration: 1000 }),
                        withTiming(-SQUARE_COORDINATE_CHANGING, { duration: 1000 }),
                        withTiming(-SQUARE_COORDINATE_CHANGING, { duration: 1000 })
                    ), 
                    Infinity, 
                    true
                )},
                {rotate: withRepeat(
                    withSequence(
                        withTiming("90deg", {duration: 1000}),
                        withTiming("180deg", {duration: 1000}),
                        withTiming("270deg", {duration: 1000}),
                        withTiming("360deg", {duration: 1000})
                    ),
                    Infinity,
                    true
                )},
            ],
        }
    }, [])
}