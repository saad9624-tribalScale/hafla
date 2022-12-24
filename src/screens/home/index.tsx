import { SafeAreaView, Text, TextInput, View, Image, ScrollView } from 'react-native'
import { CategoryTabs, DiscoverParty, Header, VideoClips, } from '../../components';
import { Images } from '../../utils';
import { categories } from '../../utils/constant';
import styles from './styles';

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header showNotification isHome />
            <ScrollView>
                <View style={styles.searchBar}>
                    <Image source={Images.search} style={styles.search} />
                    <TextInput placeholderTextColor='white' style={styles.input} placeholder='Search your favourite party' />
                </View>
                <Text style={styles.watchText}>Watch Video Clips</Text>
                <View style={styles.videoContainer} >
                    {['1', '2', '3', '4'].map((item, index) => <VideoClips item={item} index={index} />)}
                </View>
                <Text style={styles.watchText}>Categories</Text>
                <View style={styles.categoryView}>
                    {categories.map((item, index) => <CategoryTabs item={item} index={index} />)}
                </View>
                <Text style={styles.watchText}>Discover Parties</Text>
                {['Sunday Beach Party', "Zarr's Birthday Party", 'Diana Wedding Party'].map(item => <DiscoverParty item={item} />)}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home


