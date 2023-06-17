import React, { useState } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import styles from '../../assets/styles/styles';
import ListGen from '../components/ListGen';

interface ListDataProps {
item: {
name: string;
address: string;
bedrooms: number;
bathrooms: number;
squareFootage: number;
price: number;
like: boolean;
photo: string;
score: number;
};
}

const ListData: React.FC<ListDataProps> = ({ item }) => {
const stylesBBSF = [styles.containerBBSF, styles.iconsBBSF, styles.inTitle];
const stylesAddr = [styles.infoAddress, styles.logoLocation, styles.address];
const [stateLike, setLike] = useState(item.like);
const statusChange = () => {
item.like = !stateLike;
setLike(!stateLike);
};
return (
<View style={styles.listData}>
<Text style={styles.nameEstate}>{item.name}</Text>
<ListGen
feature={item.address}
image={require('../../assets/icons/pin.png')}
styleFtr={stylesAddr}
/>
<View style={styles.infoBBSF}>
<ListGen
feature={item.bedrooms}
image={require('../../assets/icons/bed.png')}
styleFtr={stylesBBSF}
/>
<ListGen
feature={item.bathrooms}
image={require('../../assets/icons/bathtub.png')}
styleFtr={stylesBBSF}
/>
<ListGen
feature={item.squareFootage + ' ft'}
image={require('../../assets/icons/blueprint.png')}
styleFtr={stylesBBSF}
ft={true}
/>
</View>
<View style={styles.infoPL}>
<Text style={styles.price}>${item.price}/m</Text>
<TouchableHighlight underlayColor="transparent" onPress={statusChange}>
<Image
style={styles.iconHeart}
source={
stateLike
? require('../../assets/icons/heart-like.png')
: require('../../assets/icons/heart.png')
}
/>
</TouchableHighlight>
</View>
</View>
);
};

export default ListData;
