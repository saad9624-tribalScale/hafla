import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../utils";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.black
    },
    cover: {
        width: '90%',
        height: 270,
        resizeMode: 'stretch',
        alignSelf: 'center',
        marginHorizontal: 10
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
        fontSize: 10
    },
    row: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    requestBtn: {
        backgroundColor: Colors.pink,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: 30,
        width: 100,
        flexDirection: 'row',


    },
    requetTxt: {
        color: 'white',
        fontFamily: Fonts.semiBold,
        paddingVertical: 2,
        fontSize: 10,
    },
    profileDetail: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10
    },
    partyDetail: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    descriptionView: {
        paddingHorizontal: 20,
        marginVertical: 20
    },
    partyType: {
        color: Colors.pink,
        fontFamily: Fonts.semiBold,
        fontSize: 14
    },
    partyTitle: {
        color: Colors.white,
        fontFamily: Fonts.semiBold,
        fontSize: 20
    },
    entry: {
        color: Colors.white,
        fontFamily: Fonts.medium,
        fontSize: 12
    },
    entryFee: {
        color: Colors.pink,
        fontFamily: Fonts.semiBold,
        fontSize: 20
    },
    chat: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        marginRight: 5
    },
    detailView: {
        backgroundColor: Colors.lightBlack,
        height: 70,
        width: '80%',
        alignSelf: 'center',
        borderRadius: 10,
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20
    },
    line: {
        width: 1,
        height: 40,
        backgroundColor: 'white',

    },
    alignRow: {
        alignItems: 'center',
    },
    number: {
        color: Colors.white,
        fontFamily: Fonts.semiBold,
        fontSize: 14
    },
    value: {
        color: Colors.grey,
        fontFamily: Fonts.semiBold,
        fontSize: 12,
        marginTop: 5
    },
    description: {
        backgroundColor: Colors.lightBlack,
        width: '90%',
        alignSelf: 'center',
        marginTop: 15,
        borderRadius: 5,
        padding: 10
    },
    descriptionText: {
        color: Colors.white,
        fontFamily: Fonts.semiBold,
        fontSize: 16,
    },
    detailText: {
        color: Colors.white,
        fontFamily: Fonts.regular,
        fontSize: 10,
        lineHeight: 16,
        marginTop: 5
    },
    locationView: {
        paddingHorizontal: 20,
        marginVertical: 20
    },
    map: {
        width: '100%',
        height: 120,
        resizeMode: 'contain',
        marginTop: 10
    }

})