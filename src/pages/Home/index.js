import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { style } from './style'
import SelectScreen from '../../components/SelectScreen'
import TopHeader from '../../components/TopHeader'
export default function Home({ navigation }) {

    const goScreen = async (routeName) => {
        //baseado no que o titulo do componente me retornar muda a o routename 
        navigation.navigate(routeName)
    }
    return (
        <>
            <StatusBar backgroundColor={"#238939"} />
            <View style={style.container}>
                <TopHeader />
                <View style={{ alignItems: 'center', gap: 25, }}>
                    <Text style={style.text}>Olá, Veg! O que você procura?</Text>
                    <View style={style.selectScreenViewGroup}>
                        <SelectScreen
                            navigation={(value) => goScreen(value)}
                            title={"Restaurantes"} />
                        <SelectScreen
                            navigation={(value) => goScreen(value)}
                            title={"Produtos"} />
                        <SelectScreen
                            navigation={(value) => goScreen(value)}
                            title={"Lojas Online"} />
                        <SelectScreen
                            navigation={(value) => goScreen(value)}
                            title={"Lojas Fisicas"} />
                    </View>
                </View>
                <View style={style.bottomView} />
            </View>
        </>
    )
}