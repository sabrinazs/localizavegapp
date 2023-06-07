import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import TopHeader from '../../components/TopHeader'
import { style } from './style'

export default function Sobre() {






    return (
        <View style={style.container}>
            <TopHeader />
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                    gap: 30,
                    paddingHorizontal: 10
                }} >


                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: "#3E3E3E"
                    }}>Problemas para encontrar opções de serviços e espaços veganos na cidade do Recife?</Text>
                <Image
                    style={{
                        width: 330,
                        height: 210,
                        borderRadius: 8
                    }}
                    source={require('../../assets/sol.jpg')} />
                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: "#3E3E3E"
                    }}>Nesse espaço você encontrará opções atualizadas de lojas, restaurantes e espaços que atendem as necessidades de veganos e vegetarianos.</Text>

                <View style={{ height: 1, backgroundColor: "#000", width: 330 }} />
                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 14,
                        fontWeight: 'bold',
                        color: "#3E3E3E"
                    }}>Quer saber mais? Segue a gente!</Text>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: "center",
                        gap: 80
                    }}>
                    <Image style={{ width: 45, height: 45 }} source={require('../../assets/facebook.png')} />
                    <Image style={{ width: 45, height: 45 }} source={require('../../assets/instagram.png')} />
                </View>
            </View>



        </View>
    )
}

