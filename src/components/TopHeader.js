import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



export default function TopHeader({ justmenu }) {
    const navigation = useNavigation()
    const [modalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };
    return (
        <>
            <Modal
                animationType="slide"

                transparent={true}
                visible={modalVisible}
                onRequestClose={toggleModal}
            >
                <TouchableOpacity style={style.modalOverlay} onPress={toggleModal} />

                <View style={style.modalContent}>
                    <TouchableOpacity
                        onPress={() => setModalVisible(!modalVisible)}
                        style={{ alignSelf: 'flex-end' }}>
                        <Entypo name="menu" size={54} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setModalVisible(!modalVisible)
                        navigation.navigate("Home")
                    }}>
                        <Text style={style.modalText}>Home</Text>
                    </TouchableOpacity>
                    <View style={{ width: '70%', height: 1, backgroundColor: "#000" }} />
                    <TouchableOpacity onPress={() => navigation.navigate("Sobre")}>
                        <Text style={style.modalText}>Sobre</Text>
                    </TouchableOpacity>

                    <View style={{ width: '70%', height: 1, backgroundColor: "#000" }} />
                    <TouchableOpacity onPress={() => navigation.navigate("Contato")}>
                        <Text style={style.modalText}>Contato</Text>
                    </TouchableOpacity>


                </View>
            </Modal>
            {
                justmenu ?
                    <TouchableOpacity
                        onPress={() => setModalVisible(!modalVisible)}
                        style={{ alignSelf: 'flex-end', marginRight: 25 }}
                    >
                        <Entypo name="menu" size={54} color="#626262" />
                    </TouchableOpacity> :
                    <View style={style.container}>

                        <View style={{ height: 80, flex: 1 }} />

                        <Image style={style.image} source={require('../assets/localizavegicon.png')} />
                        <TouchableOpacity
                            onPress={() => setModalVisible(!modalVisible)}
                            style={{ height: 80, flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                            <Entypo name="menu" size={54} color="black" />
                        </TouchableOpacity>


                    </View>
            }

        </>
    )
}
export const style = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        backgroundColor: '#238939',
        justifyContent: "space-between",
        flexDirection: 'row',
        alignItems: 'center',

    },
    image: {
        width: 55,
        height: 55,
    }, modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        width: '70%',
        backgroundColor: '#EEEBEB',
        padding: 16,
        gap: 8
    },
    modalText: {
        fontSize: 20,
        fontWeight: 'bold',

        color: "#333333"
    },
})
