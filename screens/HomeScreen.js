import { useNavigation } from '@react-navigation/native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView, Text, View } from 'react-native'


//


const HomeScreen = () => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    return (
        <SafeAreaView>
            <Text className=' text-red-300'>Esto lo estoy escribiendo desde mi pc y como seria pues pa olernos 7 rayas y un garrafo</Text>
        </SafeAreaView>
    )
}

export default HomeScreen