import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "space-between",

    },
    selectScreenViewGroup: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "center",

    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',

    },
    bottomView: {
        width: '100%',
        height: 60,
        backgroundColor: '#238939'
    }
})