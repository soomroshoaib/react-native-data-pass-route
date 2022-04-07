import { View, Text , TouchableOpacity, TextInput, StyleSheet , Dimensions } from 'react-native'
import React , {useState} from 'react'
import {useNavigation} from '@react-navigation/native'


export default function HomeScreen() {


const navigationhook = useNavigation()

    const [name, setName] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    console.log(navigationhook)
  
    const  handlesubmit = () => {

        navigationhook.navigate('Profile',{
            username: name,
            userEmail: email,
            userPassword: password
        })
        // console.log("hello")
        // navigation.navigate('Profile',{
        //     username: name,
        //     userEmail: email,
        //     userPassword: password
        // })
    }
    
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={{textAlign:"center", marginBottom: 20}}>please inter your information </Text>
     
    <TextInput style={styles.input} 
     placeholder="Enter your Full Name " 
      value={name} onChangeText={(text) => setName (text)} 

      />
    <TextInput style={styles.input} 
     placeholder="Enter your email " 
     value={email}
      onChangeText={(text)=> setemail(text)} />
    <TextInput style={styles.input} 
     placeholder="Enter your password " 
     secureTextEntry={true}  value={password}
      onChangeText={(text)=> setpassword(text)} />


     <TouchableOpacity style={styles.submit} onPress={()=> handlesubmit()}>
         <Text style={{textAlign: 'center'}} >
             Submit
         </Text>
     </TouchableOpacity>
    
      {/* <TouchableOpacity onPress={()=> handle ("Screen1")}>
          <Text>Screeen1</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> handle ("Screen2")}>
          <Text>Screeen2</Text>
      </TouchableOpacity> */}
    </View>

  )
}
const {width} = Dimensions.get("screen")

const styles = StyleSheet.create({
    input:{

        width: width - 20,
        borderRadius: 10,
        borderWidth: 2,
        marginTop:20
    },
    submit: {
        width: width -20,
        backgroundColor: "lightblue",
        padding: 10,
        marginTop: 20,
        borderRadius: 20
    }
})