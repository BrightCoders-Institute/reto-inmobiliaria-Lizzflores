import React from 'react';
import { FlatList, View, SafeAreaView } from 'react-native';
import realState from '../../data/realState.json';
import styles from '../../assets/styles/styles';
import StateView from '../components/StateView';

const HomeScreen: React.FC = () => {
return (
<SafeAreaView style={{ flex: 1 }}>
<View style={styles.container}>
<FlatList
data={realState}
renderItem={({ item }) => <StateView item={item} />}
keyExtractor={(item, index) => index.toString()}
showsVerticalScrollIndicator={false}
/>
</View>
</SafeAreaView>
);
}

export default HomeScreen;
