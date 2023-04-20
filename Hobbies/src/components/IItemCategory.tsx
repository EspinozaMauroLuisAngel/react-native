import { Pressable } from "react-native";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { IItemCategory } from "../model/interfaces/IItemCategory";

const Estilos = StyleSheet.create({
    defaultGrid: {
        flex:1,
    },
    ripple: {
        color:'#ccc'
    },
    gridItem: {
        flex: 1,
        margin: 16,
        height:150,
        borderRadius:8,
        elevation:4,
        shadowColor:'black',
        shadowOpacity: 0.25,
        shadowOffset: {width:0, height:2},
        shadowRadius:8
    },
    elementPressed: {
        opacity:0.1,
    },
    innerContainer: {
        flex:1,
        padding:16,
        borderRadius:8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15,
    }
});

export const ItemCategory = ({category, handlerPress}: IItemCategory) => {
    const {id, title, color} = category;
    
    
    const CategoryGridTile = ({category, handlerPress}: IItemCategory) => {
        const {id, title, color} = category;
    }
    return(
        <View style={Estilos.gridItem}>
            <Pressable android_ripple={ Estilos.ripple}
                style = {({pressed}) => [
                    Estilos.defaultGrid,
                    pressed ? Estilos.elementPressed : null,
                ]}
                onPress={() => handlerPress(id)}
            >
                <View style={[Estilos.innerContainer, {backgroundColor: color}]}>
                    <Text style={Estilos.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default IItemCategory







