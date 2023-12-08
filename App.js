import 'react-native-gesture-handler';

import React from 'react';
import { Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { AntDesign, SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';

// Importa pantallas
import Usuario from './screens/Usuario';
import Quienessomos from './screens/Quienessomos';
import Actividades from './screens/Actividades';
import Reserva from './screens/Reserva';
import Mapa from './screens/Mapa';
import Contacto from './screens/Contacto';

//imagen de logo
import User from "../app/assets/2.png";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => (
          <SafeAreaView>
            <Image
              source={User}
              style={{
                height: 130,
                width: 130,
                borderRadius: 65,
                marginTop: 20,
                alignSelf: 'center',
              }}
            />
            <DrawerItemList {...props} />
          </SafeAreaView>
        )}

        //edito del pading
        screenOptions={{
          draweStyle: {
            backgroundColor: "#fff",
            width: 250,
          },
          headerStyle: {
            backgroundColor: "blue",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          drawerActiveTintColor: "red",
          drawerLabelStyle: {
            color: "black",
          },
        }}
        //edito los menus
      >

        <Drawer.Screen
          name='Usuario'
          options={{
            drawerLabel: "Usuario",
            title: "Usuario",
            drawerIcon: ({ color, size }) => (
              <AntDesign name="user" size={size} color={color} />
            ),
          }}
          component={Usuario}
        />

        <Drawer.Screen
          name='Quienesomos'
          options={{
            drawerLabel: "Quienes Somos",
            title: "Quienes Somos",
            drawerIcon: ({ color, size }) => (
              <SimpleLineIcons name='home' size={size} color={color} />
            ),
          }}
          component={Quienessomos}
        />

        <Drawer.Screen
          name='Actividades'
          options={{
            drawerLabel: "Nuestras Actividades",
            title: "Nuestras Actividades",
            drawerIcon: ({ color, size }) => (
              <SimpleLineIcons name='trophy' size={size} color={color} />
            ),
          }}
          component={Actividades}
        />

        <Drawer.Screen
          name='Reserva'
          options={{
            drawerLabel: "Reserva",
            title: "Reserva",
            drawerIcon: ({ color, size }) => (
              <SimpleLineIcons name='note' size={size} color={color} />
            ),
          }}
          component={Reserva}
        />

        <Drawer.Screen
          name='Mapa'
          options={{
            drawerLabel: "Mapa",
            title: "Mapa",
            drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons name='map-marker' size={size} color={color} />
            ),
          }}
          component={Mapa}
        />

        <Drawer.Screen
          name='Contacto'
          options={{
            drawerLabel: "Contacto",
            title: "Contacto",
            drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons name='phone' size={size} color={color} />
            ),
          }}
          component={Contacto}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}






