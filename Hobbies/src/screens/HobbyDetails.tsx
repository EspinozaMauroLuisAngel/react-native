import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native'
import HobbyItem from '../components/HobbyItem';
import { Categories, Hobbies } from '../model/data/dummyData';

const Styles = StyleSheet.create({
    container: {
        flex:1,
        padding:20
    }
});

export const HobbyDetails = ({route, navigation}:any) => {
    const categoryId = route.params.categoryId;
    const hobbiesByCategory = Hobbies.filter((hobby) =>{
        return hobby.categoryIds.indexOf(categoryId) >= 0;
    });
    useLayoutEffect(()=>{
        const categoryTitle = Categories.find(
            (currentCategory) => currentCategory.id === categoryId
        )?.title;
        if (categoryTitle != undefined) {
            navigation.setOptions({
                title: categoryTitle,
            });
        }
    },[categoryId]);
    const renderHobbyItem = (hobby: any) =>{
        return(<HobbyItem {...hobby.item}/>)
    }
    
    return(
        <View style={Styles.container}>
            <FlatList
                data = {hobbiesByCategory}
                keyExtractor={(hobby)=>hobby.id}
                renderItem={renderHobbyItem}
            />
        </View>
    );
}
export default HobbyDetails;