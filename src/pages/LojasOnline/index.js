import { View, Text, Image, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import TopHeader from '../../components/TopHeader'
import { style } from './style'
import axios from 'axios'
export default function LojasOnline() {


    const [data, setData] = useState([])


    const fetchData = async () => {
        try {
            const response = await axios.post(
                'https://sa-east-1.aws.data.mongodb-api.com/app/data-ojxdg/endpoint/data/v1/action/find',
                {
                    collection: 'lojasonlines',
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

            console.log(response.data.documents);
            setData(response.data.documents)
        } catch (error) {
            console.log(error);
        }
    };
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
                        source={require("../../assets/lojas-online.png")} />
                </View>
                <Text
                    style={style.screenDetailsText}>
                    Lojas online
                </Text>
                <View style={{ flex: 1 }}>


                    <View style={style.tableFilterView}>
                        <Text style={style.textTableFilter}>Nome</Text>
                        <Text style={style.textTableFilter}>Link</Text>

                    </View>
                    <View style={{
                        borderRadius: 6,
                        borderWidth: 1,
                        borderTopWidth: 0,
                        borderTopRightRadius: 0,
                        borderTopLeftRadius: 0,


                        borderColor: "#DDDBDB",
                        flex: 1,
                        width: "90%"
                    }}>
                        <FlatList data={data} renderItem={(data) => (
                            <View
                                style={{
                                    flexDirection: 'row',
                                    width: '100%',


                                }}>
                                <View style={[style.column, { width: '50%' }]}>
                                    <Text style={[style.text, { fontWeight: 'bold', }]}>
                                        {data.item.nome}
                                    </Text>
                                </View>
                                <View style={[style.column, { width: '50%' }]}>
                                    <Text style={[style.text, { fontWeight: 'bold', }]}>
                                        {data.item.link}
                                    </Text>
                                </View>

                            </View>

                        )} />
                    </View>
                </View>
            </View>
            <View style={style.bottomView} />
        </View>
    )
}

