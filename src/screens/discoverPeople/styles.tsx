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

    },
    itemContainer: {
        height: 85,
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginVertical: 10,
        borderBottomColor: Colors.grey,
        borderBottomWidth: 0.7,
        marginHorizontal: 20
    },
    rowJustified: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 35,
        backgroundColor: Colors.pink,
        margin: 1,
        flex: 1,
        borderRadius: 5
    },
    btnView: {
        marginStart: 20,
        flex: 1
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
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
    btnText: {
        fontFamily: Fonts.regular,
        fontSize: 14,
        color: 'white'
    },
    heading: {
        color: 'white',
        fontFamily: Fonts.medium,
        marginHorizontal: 20,
        fontSize: 18,
        marginVertical: 15
    }
})