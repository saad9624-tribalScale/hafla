import { StyleSheet } from "react-native"
import { Colors, Fonts } from "../../utils"

export default StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        borderRadius: 50,
        borderColor: 'white',
        borderWidth: 1,
        marginRight: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    trendingContainer: {
        width: 65,
        height: 65,
        borderRadius: 32.5,
        borderColor: Colors.pink,
        borderWidth: 1,
        marginRight: 8,
        alignItems: 'center',
        justifyContent: 'center'

    },
    trendingNow: {
        width: 30,
        height: 30,
        resizeMode: 'contain'
    },
    text: {
        fontSize: 8,
        fontFamily: Fonts.medium,
        color: 'white',
        marginTop: 5
    },
    new: {
        position: 'absolute',
        backgroundColor: Colors.pink,
        bottom: -8,
        alignSelf: 'center',
        borderRadius: 2
    },
    newText: {
        color: 'white',
        fontFamily: Fonts.medium,
        fontSize: 12
    }

})