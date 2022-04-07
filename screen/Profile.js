import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';

export default function Profile() {
  const route = useRoute()
  console.log(route)
  
     const {username, userEmail, userPassword} = route.params;
     console.log(route.params)
  return (
    <View>
      <Text>Name : {username}</Text>
      <Text>Email : {userEmail}</Text>
      <Text>Password  : {userPassword}</Text>
    </View>
  )
}     