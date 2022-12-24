import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../utils";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.black
    },
    searchBar: {
        flexDirection: 'row',
        height: 50,
        backgroundColor: Colors.lightBlack,
        paddingHorizontal: 20,
        width: '90%',
        alignSelf: 'center',
        marginVertical: 15,
        borderRadius: 5,
        alignItems: 'center'
    },
    input: {
        color: 'white',
        fontFamily: Fonts.medium,
        fontSize: 14

    },
    watchText: {
        fontSize: 15,
        color: 'white',
        fontFamily: Fonts.semiBold,
        paddingHorizontal: 20
    },
    videoContainer: {
        marginVertical: 15,
        paddingHorizontal: 20,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center'
    },
    categoryView: {
        marginVertical: 15,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    search: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        marginRight: 10
    }
})