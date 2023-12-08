import React, { useState } from 'react';
import { View, Text, FlatList, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const tasksData = [];

const TaskItem = ({ title, image }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
      <Image source={image} style={{ width: 100, height: 100, marginRight: 10, borderRadius: 10 }} />
      <Text>{title}</Text>
    </View>

  );
};

const Actividades = () => {
  const [tasks, setTasks] = useState(tasksData);
  const [newTask, setNewTask] = useState('');
  const [newTaskImage, setNewTaskImage] = useState(null);

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const newTaskItem = {
        id: String(tasks.length + 1),
        title: newTask,
        image: newTaskImage,
      };
      setTasks([...tasks, newTaskItem]);
      setNewTask('');
      setNewTaskImage(null);
    } else {
      Alert.alert('Error', 'Por favor, ingresa una tarea válida.');
    }
  };

  const handleImageSelection = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert('Permiso necesario', 'Se requiere acceso a la galería para seleccionar una imagen.');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3], // Establece un aspecto específico según sea necesario
      quality: 1,
    });

    if (!pickerResult.cancelled) {
      setNewTaskImage(pickerResult.uri);
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskItem title={item.title} image={{ uri: item.image }} />}
      />

      <TouchableOpacity onPress={handleImageSelection} style={{ backgroundColor: 'gray', padding: 10, borderRadius: 5, marginBottom: 20, alignItems: 'center' }}>
        <Text style={{ color: 'white' }}>Seleccionar Imagen</Text>
      </TouchableOpacity>

      <TextInput
        placeholder="Nueva tarea"
        style={{ borderWidth: 1, borderColor: 'blue', padding: 10, marginBottom: 20 }}
        value={newTask}
        onChangeText={(text) => setNewTask(text)}
      />

      <TouchableOpacity onPress={handleAddTask} style={{ backgroundColor: 'blue', padding: 10, borderRadius: 20, alignItems: 'center' }}>
        <Text style={{ color: 'white' }}>Añadir</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Actividades;
