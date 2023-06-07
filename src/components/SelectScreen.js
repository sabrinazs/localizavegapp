import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function SelectScreen({ title, navigation }) {
    const [iconImage, setIconImage] = useState(); //depois colocar um retorno valido ou um loading

    //Verificação do titulo da componente para ajustar o tamanho dos icones
    const width = title === "Lojas Online" || title === "Lojas Fisicas" ? 90 : title === "Restaurantes" ? 100 : "100%";
    const height = title === "Lojas Online" || title === "Lojas Fisicas" ? 90 : title === "Restaurantes" ? 140 : "100%";


    //mapeia títulos de categorias para caminhos de imagens e, em seguida, atualiza a variável iconImage com base no título selecionado.
    const imageMapping = {
        'Restaurantes': require('../assets/restaurantes.png'),
        'Produtos': require('../assets/produtos.png'),
        'Lojas Online': require('../assets/lojas-online.png'),
        'Lojas Fisicas': require('../assets/lojas-fisicas.png'),

    };

    useEffect(() => {
        setIconImage(
            title in imageMapping ? imageMapping[title] : null
        );
    }, [title]);

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation(title)}
        >
            <View style={styles.imageContainer}>
                <Image style={{ width, height }} source={iconImage} />
            </View>
            <Text style={styles.titleScreen}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 180,
        height: 200,
        borderRadius: 160 / 2,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },

    titleScreen: {
        fontSize: 18,
        fontStyle: 'italic',
    },
    imageContainer: {
        backgroundColor: '#DDD',
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 150 / 2,
    },
});
