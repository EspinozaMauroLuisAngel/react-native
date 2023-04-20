import React from 'react'
import { View } from 'react-native';
import SunbjectScreen from '../SunbjectsScreen';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<any, any>{};

const AcademicsScreen = ({ route, navigation }: Props ) => {
    console.log('Mi props', navigation );

    return (
        <View>
            <SunbjectScreen navigation={navigation} />
            </View>
    )
}

export default AcademicsScreen