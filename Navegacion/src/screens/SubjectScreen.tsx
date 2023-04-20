import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from 'react'
import { Text, View } from 'react-native';
import { ISubject } from '../interfaces/ISubject';
import { StackParams } from "../navigation/StackNavigation";

interface Props extends NativeStackScreenProps<StackParams, 'Subject'>{};

const SubjectScreen = ( { navigation: { navigate } } : Props) => {
    return (
        <View>
            <Text> Mi curso </Text>
        </View>
    )
}

export default SubjectScreen