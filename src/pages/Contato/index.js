import { View, Text, StatusBar, TouchableOpacity, TextInput, KeyboardAvoidingView, Image } from 'react-native'
import React from 'react'
import TopHeader from '../../components/TopHeader'
import { Entypo } from '@expo/vector-icons';
export default function Contato() {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={"#EEEBEB"} barStyle={'dark-content'} />

            <View style={{ height: 200, width: '100%', backgroundColor: '#EEEBEB' }}>
                <TopHeader justmenu={true} />
                <View style={{ paddingLeft: 25, gap: 26 }}>
                    <Text
                        style={{
                            color: "#353535",
                            fontSize: 34,
                            fontWeight: 'bold'
                        }}>Fale conosco</Text>
                    <View style={{
                        height: 1,
                        width: 315,
                        backgroundColor: "#CBCBCB"
                    }} />
                    <Text
                        style={{
                            color: "#353535",
                            fontSize: 15,
                            fontWeight: 'bold'
                        }}>Alguma dúvida ou sugestão? Manda pra gente!</Text>
                </View>
            </View>
            <KeyboardAvoidingView style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFF', gap: 18, paddingVertical: 30 }}>


                <TextInput
                    style={{
                        width: '90%',
                        height: 44,
                        backgroundColor: '#FFF',
                        borderRadius: 5,
                        borderColor: "#DDDBDB",
                        borderWidth: 1,
                        paddingLeft: 15,
                        fontWeight: '600',
                    }}
                    cursorColor={"#DDD"}
                    placeholder='Nome'
                    placeholderTextColor={"#555555"}
                />
                <TextInput
                    style={{
                        width: '90%',
                        height: 44,
                        backgroundColor: '#FFF',
                        borderRadius: 5,
                        borderColor: "#DDDBDB",
                        borderWidth: 1,
                        paddingLeft: 15,
                        fontWeight: '600',
                    }}
                    cursorColor={"#DDD"}
                    placeholder='E-mail'
                    placeholderTextColor={"#555555"}
                />
                <TextInput
                    style={{
                        width: '90%',
                        height: 44,
                        backgroundColor: '#FFF',
                        borderRadius: 5,
                        borderColor: "#DDDBDB",
                        borderWidth: 1,
                        paddingLeft: 15,
                        fontWeight: '600',
                    }}
                    cursorColor={"#DDD"}
                    placeholder='Assunto'
                    placeholderTextColor={"#555555"}
                />
                <TextInput
                    style={{
                        width: '90%',
                        height: 160,
                        backgroundColor: '#FFF',
                        borderRadius: 5,
                        borderColor: "#DDDBDB",
                        borderWidth: 1,
                        paddingLeft: 15,
                        fontWeight: '600',
                        textAlignVertical: 'top',
                        paddingTop: 15,
                    }}
                    cursorColor={"#DDD"}
                    placeholder='Nome'
                    placeholderTextColor={"#555555"}
                />


            </KeyboardAvoidingView>
            <TouchableOpacity
                style={{
                    backgroundColor: "#515151",
                    width: '90%',
                    height: 50,
                    borderRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                    marginBottom: 20
                }}>
                <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#FFF' }}>
                    Enviar
                </Text>
            </TouchableOpacity>
            <View
                style={{
                    backgroundColor: '#EEEBEB',
                    width: '100%',
                    height: 64,
                    flexDirection: 'row',
                    gap: 80,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>


                <Image style={{ width: 45, height: 45 }} source={require('../../assets/instagramgray.png')} />
                <Image style={{ width: 45, height: 45 }} source={require('../../assets/facebookkgray.png')} />

            </View>
        </View >
    )
}