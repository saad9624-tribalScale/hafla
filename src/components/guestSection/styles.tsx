import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../utils";

export default StyleSheet.create({
    heading: {
        color: Colors.white,
        fontFamily: Fonts.semiBold,
        fontSize: 16,
    },
    container: {
        margin: 20
    },
    profile: {
        width: 35,
        height: 35,
        resizeMode: 'contain',
        marginRight: 10
    },
    userName: {
        color: 'white',
        fontFamily: Fonts.medium,
        fontSize: 14
    },
    guestItem: {
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 0.7,
        borderBottomColor: Colors.grey,
        paddingBottom: 14
    },
    row: {
        alignItems: 'center',
        flexDirection: 'row',

    },
    btn: {
        backgroundColor: Colors.lightBlack,
        borderRadius: 20

    },
    btnText: {
        padding: 5,
        paddingHorizontal: 15,
        color: 'white',
        fontFamily: Fonts.medium,
        fontSize: 12

    }
})