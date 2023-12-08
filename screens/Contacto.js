import React, { useState } from 'react';
import { View, Text, Linking, TouchableOpacity, TextInput, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';

const Contacto = () => {
  const [contactList, setContactList] = useState([
    { id: 1, phoneNumber: '168', description: 'Atención de Consultas médicas en línea del CCESD llame si se encuentra en caso de urgencio u emergencia' },
    // Puedes agregar más objetos de contacto aquí según sea necesario
  ]);

  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const handlePhonePress = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const handleAddContact = () => {
    if (newPhoneNumber && newDescription) {
      const newContact = {
        id: contactList.length + 1,
        phoneNumber: newPhoneNumber,
        description: newDescription,
      };
      setContactList([...contactList, newContact]);
      setNewPhoneNumber('');
      setNewDescription('');
    } else {
      // Manejar algún tipo de validación si los campos están vacíos
      alert('Por favor ingrese un número y una descripción.');
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {contactList.map((contact) => (
          <TouchableOpacity key={contact.id} onPress={() => handlePhonePress(contact.phoneNumber)}>
            <Text style={[styles.contactText, { color: contact.phoneNumber === newPhoneNumber ? 'blue' : 'black' }]}>
              {contact.description}: {contact.phoneNumber}
            </Text>
          </TouchableOpacity>
        ))}

        <TextInput
          style={[styles.input, { backgroundColor: 'lightblue' }]}
          placeholder="Número de teléfono"
          value={newPhoneNumber}
          onChangeText={(text) => setNewPhoneNumber(text)}
        />
        <TextInput
          style={[styles.input, styles.descriptionInput]}
          placeholder="Descripción"
          multiline
          value={newDescription}
          onChangeText={(text) => setNewDescription(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddContact}>
          <Text style={styles.addButtonText}>Agregar contacto</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 10,
    width: '100%',
    marginBottom: 10,
  },
  descriptionInput: {
    minHeight: 60,
    maxHeight: 120,
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 25,
  },
  addButtonText: {
    color: 'white',
    fontSize: 17,
    textAlign: 'center',
  },
  contactText: {
    fontSize: 15,
    marginBottom: 15,
    textAlign: 'left',
    backgroundColor: 'orange',
    color: 'red',
    padding: 5,
    borderRadius: 5,
  },
});

export default Contacto;
