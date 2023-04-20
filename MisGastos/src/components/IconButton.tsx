import { Pressable, StyleSheet, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
    icon: string,
    size: number,
    color: string | undefined,
    onPress: () => void
}

const IconButton = ({ icon, size, color, onPress }: Props) => {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => pressed && Styles.pressed}
        >
            <View style={Styles.buttonContainer}>
                <Ionicons name={icon} size={size} color={color} />
            </View>
        </Pressable>
    )
}

export default IconButton;

const Styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 24,
        padding: 6,
        marginHorizontal: 8,
        marginVertical: 2
    },
    pressed: {
        opacity: 0.75,
    },
});