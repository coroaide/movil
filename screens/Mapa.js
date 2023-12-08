import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => {
  const [showMap, setShowMap] = React.useState(false);

  const handleMapToggle = () => {
    setShowMap(!showMap);
  };

  return (
    <View style={styles.container}>
      {showMap && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -19.5833, // Coordenadas de Potosí
            longitude: -65.75,
            latitudeDelta: 0.1, // Ajuste del zoom (menor valor, mayor zoom)
            longitudeDelta: 0.1,
          }}
        >
          {/* Marcador para la ciudad */}
          <Marker
            coordinate={{ latitude: -19.5833, longitude: -65.75 }}
            title="Potosí"
            description="Ciudad de Potosí"
          />
          {/* Puedes agregar más marcadores según sea necesario */}
        </MapView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapScreen;


