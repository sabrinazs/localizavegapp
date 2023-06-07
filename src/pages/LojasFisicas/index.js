import { View, Text, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import TopHeader from '../../components/TopHeader'
import { style } from './style'
import axios from 'axios'
export default function LojasFisicas() {


    const [data, setData] = useState([])


    const fetchData = async () => {
        try {
            const response = await axios.post(
                'https://sa-east-1.aws.data.mongodb-api.com/app/data-ojxdg/endpoint/data/v1/action/find',
                {
                    collection: 'lojasfisicas',
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
                        source={require("../../assets/lojas-fisicas.png")} />
                </View>
                <Text
                    style={style.screenDetailsText}>
                    Lojas Físicas em Recife - PE
                </Text>
                <View style={{ flex: 1 }}>


                    <View style={style.tableFilterView}>
                        <Text style={style.textTableFilter}>Nome</Text>
                        <Text style={style.textTableFilter}>Endereço</Text>
                        <Text style={style.textTableFilter}>Contato</Text>
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
                                    alignSelf: 'center',


                                }}>
                                <View style={[style.column, { width: '32%' }]}>
                                    <Text style={[style.text, { fontWeight: 'bold', }]}>
                                        {data.item.nome}
                                    </Text>
                                </View>
                                <View style={[style.column, { width: '35%' }]}>
                                    <Text style={style.text}>
                                        {data.item.endereco}
                                    </Text>
                                </View>
                                <View style={[style.column, { width: '34%', }]}>
                                    <Text style={style.text}>
                                        {data.item.contato}
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

