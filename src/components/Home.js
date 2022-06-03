import * as React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, ScrollView} from 'react-native';
import getImage from '../service/serviceApi'
import ImagesGallery from './Images'



export default function Home() {

    const [images, setImages] = useState()
    useEffect(() => {
     getImage().then(r => setImages(r))
    }, []);

    console.log(images)
    return (
      <ScrollView>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {!images? <Text style={{textAlign: 'center', fontSize: 25}}>Please add an image and try again</Text> : <ImagesGallery images={images}></ImagesGallery> }
      </View>
      </ScrollView>
    );
  }