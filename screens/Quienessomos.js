import React, { useState, useRef, useEffect } from 'react';
import { View, Text, FlatList, Image, Dimensions, Animated } from 'react-native';

const Quienessomos = () => {
  const screenWidth = Dimensions.get('window').width;
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const caruselData = [
    { id: '01', image: require('../assets/personal.png') },
    { id: '02', image: require('../assets/1.jpeg') },
    { id: '03', image: require('../assets/asistencia.png') },
  ];

  const scrollX = useRef(new Animated.Value(0)).current;

  const handleScroll = (event) => {
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffset / viewSize);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < caruselData.length - 1) {
        flatListRef.current.scrollToIndex({ index: currentIndex + 1, animated: true });
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        flatListRef.current.scrollToIndex({ index: 0, animated: true });
        setCurrentIndex(0);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const renderItem = ({ item }) => {
    return (
      <View style={{ width: screenWidth }}>
        <Image source={item.image} style={{ height: 300, width: '100%', borderRadius: 50 }} />
      </View>
    );
  };

  const renderDotIndicators = () => {
    return caruselData.map((_, index) => (
      <View
        key={index}
        style={{
          backgroundColor: index === currentIndex ? 'blue' : 'gray',
          height: 10,
          width: 10,
          borderRadius: 10,
          marginHorizontal: 6,
        }}
      />
    ));
  };

  return (
    <View>
      <Text style={styles.title}>Centro Coordinador de Emergencias en Salud Departamental Potosí CCESD</Text>
      
      <FlatList
        ref={flatListRef}
        data={caruselData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: false,
          listener: handleScroll,
        })}
        scrollEventThrottle={16}
      />

      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 30 }}>
        {renderDotIndicators()}
      </View>
      
    </View>
  );
};

const styles = {
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    textShadowColor: 'red',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
};

export default Quienessomos;



