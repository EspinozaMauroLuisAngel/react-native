import React from "react";
import { View, Text, Button } from 'react-native';


const SunbjectScreen = ({ navigation: { navigate } }: any) =>{

    return (
       <View>
        <Text>Mis Cursos</Text>
        <Button
          title="Go to Details"
          onPress={() => navigate('Subject')}
          />
        </View>
        
    )
}

export default SunbjectScreen