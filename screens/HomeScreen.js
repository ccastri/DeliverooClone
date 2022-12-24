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
            <Text className=' text-red-300'>My first native app I'm trippin'!!!</Text>
        </SafeAreaView>
    )
}

export default HomeScreen