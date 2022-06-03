import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';



export default function ImagesGallery(images) {
  console.log(images)
  const navigation = useNavigation();

  const deviceHeight = Dimensions.get('window').height
  const deviceWidth = Dimensions.get('window').width
  return (
    <View style = {{display:'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
      {images.images.map((item, id) =>
      <TouchableOpacity key={id}  onPress={()=>{navigation.navigate('FullImage', {url: item.urls.full})}}>
        <Image source={{uri: item.urls.raw}} style ={ {height : deviceHeight / 2, width: deviceWidth / 1.05, borderRadius: 10, margin: 10}}></Image>
        <Text style={{ textAlign: 'center', fontSize: 19, fontStyle: 'italic', color: 'black'}}>{item.user.name}</Text>
      </TouchableOpacity> )}
    </View>
  )
}