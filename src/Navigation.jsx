import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { ListOfPhotos } from "./ListOfPhotos";
import { Photo } from "./Photo";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='ListOfPhotos'
          component={ListOfPhotos}
          options={{ title: 'Gallery' }}
        />

        <Stack.Screen
          name='Photo'
          component={Photo}
          options={{ title: 'Photo' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
