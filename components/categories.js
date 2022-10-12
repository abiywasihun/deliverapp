import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView horizontal
    contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop:10
    }}
    showsHorizontalScrollIndicator={false}>
        {/**Category Card */}
        <CategoryCard
         imgurl="https://links.papareact.com/gn7" 
         title="testing 1"/>
        <CategoryCard 
        imgurl="https://links.papareact.com/gn7" 
        title="testing 2"/>
        <CategoryCard 
        imgurl="https://links.papareact.com/gn7" 
        title="testing 3"/>
        <CategoryCard
         imgurl="https://links.papareact.com/gn7" 
         title="testing 4"/>
        <CategoryCard 
        imgurl="https://links.papareact.com/gn7" 
        title="testing 5"/>
        <CategoryCard 
        imgurl="https://links.papareact.com/gn7" 
        title="testing 6"/>
    </ScrollView>
  )
}

export default Categories