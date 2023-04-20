import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';

interface Props {
    title: string,
    onPress: (value?: number) => void 
}

const MyButton = ( { title, onPress }: Props ) => {  
    return (
        <TouchableOpacity style={styles.button} onPress={() => onPress() }>
            <Text style={styles.label}>{ title } </Text>
        </TouchableOpacity>
    ) 
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 4,
        backgroundColor: 'blue',
        alignSelf: 'flex-start',
        marginHorizontal: '1%',
        marginBottom: 6,
        minWidth: '48%',
        textAlign: 'center',
    },
    label: {
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 24,
    }
});

 export default MyButton
