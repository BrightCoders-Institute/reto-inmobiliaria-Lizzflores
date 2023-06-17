import React from 'react';
import { View, ImageBackground } from 'react-native';
import styles from '../../assets/styles/styles';
import ListData from './ListData';
import ListGen from './ListGen';

interface StateViewProps {
item: { name: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  squareFootage: number;
  price: number;
  like: boolean;
  photo: string;
  score: number; };
}

const StateView: React.FC<StateViewProps> = ({ item }) => {
const stylesScore = [styles.score, styles.starIcon, styles.txtScore];
return (
<View style={styles.listView}>
<ImageBackground
source={{ uri: item.photo }}
style={styles.image}
imageStyle={styles.imageBorder}
>
<ListGen
feature={item.score}
image={require('../../assets/icons/star.png')}
styleFtr={stylesScore}
/>
</ImageBackground>
<ListData item={item} />
</View>
);
};

export default StateView;
