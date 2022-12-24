import { StyleSheet } from "react-native"
import { Colors, Fonts } from "../../utils"

export default StyleSheet.create({
    container: {
        width: '90%',
        height: 120,
        borderRadius: 5,
        marginRight: 8,
        alignSelf: 'center',
        backgroundColor: Colors.lightBlack,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingStart: 10
    },
    imageView: {
        backgroundColor: 'black',
        height: 100,
        flex: 0.8,
        borderRadius: 5
    },
    detailView: {
        flex: 2,
        alignItems: 'center',
        height: 100,
    },
    nameView: {
        flexDirection: 'row',
        flex: 1.5,
        justifyContent: 'space-between',
        width: '90%',
        alignItems: 'flex-start'
    },
    locationView: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        width: '90%',
    },
    actionView: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'space-between',
        width: '90%',
        marginTop: 5,
    },
    partyType: {
        color: Colors.grey,
        fontFamily: Fonts.semiBold,
        fontSize: 12
    },
    title: {
        color: 'white',
        fontFamily: Fonts.semiBold,
        fontSize: 14
    },
    entryBtn: {
        borderColor: Colors.pink,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0.6,
        borderRadius: 5,
        width: '90%',
        height: 25
    },
    requestBtn: {
        backgroundColor: Colors.pink,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0.6,
        borderRadius: 5,
        height: 25

    },
    entryText: {
        color: 'white',
        fontFamily: Fonts.semiBold,
        fontSize: 10,
        paddingVertical: 2
    },
    requetTxt: {
        color: 'white',
        fontFamily: Fonts.semiBold,
        paddingVertical: 2,
        fontSize: 10,
    },
    userName: {
        color: 'white',
        fontFamily: Fonts.medium,
        fontSize: 10
    },
    range: {
        color: 'white',
        fontFamily: Fonts.medium,
        fontSize: 10
    },
    likeView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    like: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        marginRight: 5

    },
    dot: {
        width: 16,
        height: 16,
        resizeMode: 'contain'
    },
    profile: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
        marginRight: 10
    },
    location: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
        marginHorizontal: 10
    },
    row: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }

})