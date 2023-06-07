import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
    },
    imageContainer: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        backgroundColor: "#EEEBEB",
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 80,
        height: 80,
    },
    screenDetailsText: {
        fontSize: 24,
        fontWeight: 700
    },
    tableFilterView: {
        width: "90%",
        height: 54,
        backgroundColor: "#EEEBEB",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        borderRadius: 6,
        borderWidth: 1,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderColor: "#DDDBDB"
    },
    textTableFilter: {
        fontWeight: 600,
        color: "#333333"
    }, column: {

        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 25,
        flexWrap: 'wrap',


    },
    text: {
        fontSize: 14,
        color: '#000'
    },
    bottomView: {
        width: '100%',
        height: 60,
        backgroundColor: '#238939'
    }
})