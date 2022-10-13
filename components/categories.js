import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import sanityClient, { urlFor } from '../sanity'
const Categories = () => {
  const [categories,useCategories]=useState([])
  useEffect(()=>{
    sanityClient.fetch(`
    *[_type=="category"]`).then(data=>{
      useCategories(data)})
  },[])
  return (
    <ScrollView horizontal
    contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop:10
    }}
    showsHorizontalScrollIndicator={false}>
        {/**Category Card */}
        {categories?.map((category)=>(
 <CategoryCard
 key={category._id}
 imgurl={urlFor(category.image).width(200).url()} 
 title={category.name}/>
        ))}
       
    </ScrollView>
  )
}

export default Categories