
import { Animated } from 'react-native'
import { StackCardStyleInterpolator } from "@react-navigation/stack";

export const fromRight: StackCardStyleInterpolator = ({ current, inverted, layouts, next }) => {
    const translateFocused = Animated.multiply(current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [layouts.screen.width, 0],
        extrapolate: 'clamp'
    }), inverted);
    const translateUnfocused = next ? Animated.multiply(next.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -layouts.screen.width],
        extrapolate: 'clamp'
    }), inverted) : 0;
    // const overlayOpacity = current.progress.interpolate({
    //     inputRange: [0, 1],
    //     outputRange: [0, 0.07],
    //     extrapolate: 'clamp'
    // });
    // const shadowOpacity = current.progress.interpolate({
    //     inputRange: [0, 1],
    //     outputRange: [0, 0.3],
    //     extrapolate: 'clamp'
    // });
    return {
        cardStyle: {
            transform: [// Translation for the animation of the current card
                {
                    translateX: translateFocused
                }, // Translation for the animation of the card on top of this
                {
                    translateX: translateUnfocused
                }
            ]
        },
        // overlayStyle: {
        //     opacity: overlayOpacity
        // },
        // shadowStyle: {
        //     shadowOpacity
        // }
    };
}


export const fromLeft: StackCardStyleInterpolator = ({ current, inverted, layouts, next }) => {
    const translateFocused = Animated.multiply(current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [-layouts.screen.width, 0],
        extrapolate: 'clamp'
    }), inverted);
    const translateUnfocused = next ? Animated.multiply(next.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, layouts.screen.width],
        extrapolate: 'clamp'
    }), inverted) : 0;
    return {
        cardStyle: {
            transform: [// Translation for the animation of the current card
                {
                    translateX: translateFocused
                }, // Translation for the animation of the card on top of this
                {
                    translateX: translateUnfocused
                }
            ]
        },
    };
}
