import * as React from 'react';
import { View, ImageBackground, Dimensions} from 'react-native';



export default function FullImage (link) {

    const deviceHeight = Dimensions.get('window').height
    const deviceWidth = Dimensions.get('window').width


    return (
        <View>
            <ImageBackground source={{uri: link.route.params.url}} style={{height: deviceHeight, width: deviceWidth}}></ImageBackground>
        </View>
    )
}