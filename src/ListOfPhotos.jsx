import { useEffect, useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { Item } from "./Item";

export const ListOfPhotos = ({ navigation }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const url = 'https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9'

    fetch(url)
      .then(response => response.json())
      .then(data => setPhotos(data))
      .catch(() => alert('Photos not loaded'))
  })

  return (
    <View>
      <FlatList data={photos} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => {
          navigation.navigate('Photo', { imgUrl: item.urls.regular })
        }}>
          <Item
            title={item.id}
            author={item.user.name}
            imgUrl={item.urls.small}
          />
        </TouchableOpacity>
      )} />
    </View>
  )
}
