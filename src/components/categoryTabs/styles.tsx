import { StyleSheet } from "react-native"
import { Colors, Fonts } from "../../utils"

export default StyleSheet.create({
    container: {
        height: 30,
        width: 80,
        borderRadius: 10,
        borderColor: Colors.pink,
        borderWidth: 1,
        marginRight: 8,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    tabName: {
        color: 'white',
        fontFamily: Fonts.semiBold,
        fontSize: 12
    },
    image: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
        marginRight: 5
    }
})