

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const Reserva = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reason, setReason] = useState('');

  const handleReservation = () => {
    // Aquí puedes implementar la lógica para enviar los detalles de la reserva

    if (name === '' || date === '' || time === '' || reason === '') {
      Alert.alert('Campos vacíos', 'Por favor completa todos los campos');
      return;
    }

    // Simulación de envío exitoso
    Alert.alert('Reserva Exitosa', 'Tu reserva ha sido realizada con éxito');
    // Aquí puedes enviar los datos al servidor o realizar otras acciones necesarias

    // Reiniciar el formulario después de la reserva
    setName('');
    setDate('');
    setTime('');
    setReason('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reserva Médica</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre y Apellido"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha (dd/mm/aaaa)"
        value={date}
        onChangeText={(text) => setDate(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Hora (hh:mm)"
        value={time}
        onChangeText={(text) => setTime(text)}
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Describa su motivo "
        multiline
        value={reason}
        onChangeText={(text) => setReason(text)}
      />
      <Button title="Reservar" onPress={handleReservation} />
    </View>
  );
};

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 30,
    marginBottom:20,
    color: 'white',
    textAlign: 'center',
    textShadowColor: 'red',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },

  input: {
    height: 40,
    borderColor: 'blue',
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 10,
    width: '100%',
    marginBottom: 10,
    borderRadius: 15,
  },
});

export default Reserva;



