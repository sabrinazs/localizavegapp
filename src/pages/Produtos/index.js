import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native'


import React, { useState, useEffect } from 'react'
import TopHeader from '../../components/TopHeader'
import { style } from './style'
import axios from 'axios'


export default function Produtos() {
    const [data, setData] = useState([])

    //CHAMADA DA API PASSANDO OS DADOS PARA O USESTATE SETDATA
    const fetchData = async () => {
        try {
            const response = await axios.post(
                'https://sa-east-1.aws.data.mongodb-api.com/app/data-ojxdg/endpoint/data/v1/action/find',
                {
                    collection: 'produtos',
                    database: 'LocalizaVeg',
                    dataSource: 'Cluster',

                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Request-Headers': '*',
                        'api-key': 'jUsdXM0EnNfNEJnYJYBTJCZ1t1zlMQxWEpAIGJEebwhjtbqS6hCAA3g61m1OLd9p'
                    }
                }
            );

            //SETANDO OS DADOS
            setData(response.data.documents)
        } catch (error) {
            console.log(error);
        }
    };
    //AO ENTRAR NA TELA CHAMA O FETCHDATA PARA SALVAR E RENDERIZAR OS DADOS
    useEffect(() => {
        fetchData()

    }, [])

    return (
        <View style={style.container}>
            <TopHeader />
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                    gap: 10
                }}>
                <View
                    style={style.imageContainer}>
                    <Image
                        style={style.image}
                        source={require("../../assets/produtos.png")} />
                </View>
                <Text
                    style={style.screenDetailsText}>
                    Produtos vendidos em Recife - PE
                </Text>
                <View style={{ flex: 1, justifyContent: 'center' }}>

                    <FlatList data={data}
                        ItemSeparatorComponent={() => (
                            <View style={{ height: 10 }} />
                        )}
                        renderItem={(data) => (
                            <View
                                style={{
                                    flexDirection: 'row',
                                    width: '92%',
                                    borderRadius: 5,
                                    borderWidth: 1,
                                    borderColor: '#DDDBDB',
                                    padding: 15,
                                    alignSelf: 'center',
                                    gap: 16,
                                    height: 250
                                    ,
                                }}>
                                <View style={{ width: "50%", gap: 15, alignItems: 'center', justifyContent: 'center' }}>
                                    <Image style={{ height: 145, width: 145 }} source={{
                                        uri: `${data.item.image}`
                                    }} />
                                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}> {data.item.nome} </Text>
                                </View>
                                <View style={{ justifyContent: 'space-evenly', width: "50%" }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Onde encontrar?</Text>
                                    <Text numberOfLines={10}> {data.item.localSearch}</Text>
                                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Faixa de preço</Text>
                                    <Text numberOfLines={4}> {data.item.price}</Text>
                                </View>

                            </View>

                        )} />
                </View>

            </View>
            <View style={style.bottomView} />
        </View>
    )
}

