import { View, FlatList } from 'react-native'
import React from 'react'
import {ItemCategory} from '../components/IItemCategory'
import { Categories } from '../model/data/dummyData'

export const CategoriesScreen = ({navigation: {navigate}}:any) => {
    const handlerPress = (id:string) => {
        navigate('Details',{
            categoryId:id,
        })
    }
    const renderCategoryItem = (category: any) => {
        return(<ItemCategory category={category.item}
            handlerPress={() => handlerPress(category.item.id)}/>)
    }
    return(
        <View style={{backgroundColor:'#5fffff',height:'100%'}}>  
        <FlatList data={Categories}
            keyExtractor={(category) => category.id}
            renderItem = {renderCategoryItem}
            numColumns={2}
        />
        </View>
    )
}