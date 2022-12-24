import { StyleSheet } from "react-native"
import { Fonts } from "../../utils"

export default StyleSheet.create({
    container: {
        height: 60,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,

    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 25,
        backgroundColor: 'white',
        marginEnd: 10,

    },
    userName: {
        color: 'white',
        fontSize: 18,
        fontFamily: Fonts.semiBold
    },
    actionImage: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        tintColor: 'white',
        marginLeft: 15
    },
    back: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        marginRight: 10
    }
})