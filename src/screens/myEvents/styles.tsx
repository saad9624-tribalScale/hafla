import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../utils";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.black
    },
    tab: {
        height: 30,
        backgroundColor: '#373636',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        borderRadius: 5
    },
    tabView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20
    },
    row: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 5

    },
    itemContainer: {
        height: 90,
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginVertical: 10,
        marginHorizontal: 20,
        backgroundColor: Colors.lightBlack,
        borderRadius: 10,
        padding: 10
    },
    rowJustified: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        backgroundColor: Colors.pink,
        margin: 1,
        borderRadius: 5,
        flexDirection: 'row',
        paddingHorizontal: 5

    },
    btnView: {
        marginStart: 15,
        flex: 2
    },
    time: {
        color: Colors.grey,
        fontFamily: Fonts.medium,
        fontSize: 10
    },
    name: {
        color: Colors.white,
        fontFamily: Fonts.semiBold,
        fontSize: 16
    },
    userProfile: {
        width: '100%',
        height: '100%',
        flex: 0.7,
        borderRadius: 5,
    },
    btnText: {
        fontFamily: Fonts.semiBold,
        fontSize: 14,
        color: 'white'
    },
    heading: {
        color: 'white',
        fontFamily: Fonts.medium,
        marginHorizontal: 20,
        fontSize: 18,
        marginVertical: 15
    },
    profile: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
        marginRight: 10
    },
    userName: {
        color: 'white',
        fontFamily: Fonts.medium,
        fontSize: 10
    },
    attended: {
        color: Colors.grey,
        fontFamily: Fonts.italic,
        fontSize: 12
    },
    type: {
        color: Colors.pink,
        fontFamily: Fonts.semiBold
    },
    addBtn: {
        width: 15,
        height: 15, resizeMode: 'contain',
        marginRight: 8
    },
    day: {
        color: Colors.grey,
        marginHorizontal: 20,
        marginTop: 10
    }
})