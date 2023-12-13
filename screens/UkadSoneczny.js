import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import TopNav_2 from '../components/TopNav_2';
import BottomNav from '../components/BottomNav';

const { width, height } = Dimensions.get('window');
const sunRadius = 40;
const orbitRadiusMultiplier = 40; // Multiplier to set orbits' radius

const UkadSloneczny = () => {
  const planets = [
    { name: 'Merkury', color: 'gray', radius: 5, orbitRadius: 1.3 },
    { name: 'Wenus', color: 'orange', radius: 8, orbitRadius: 1.7 },
    { name: 'Ziemia', color: 'blue', radius: 8, orbitRadius: 2.2 },
    { name: 'Mars', color: 'red', radius: 6, orbitRadius: 2.6 },
    { name: 'Jowisz', color: 'orange', radius: 18, orbitRadius: 3.5 },
    { name: 'Saturn', color: 'goldenrod', radius: 12, orbitRadius: 4.5 },
    { name: 'Uran', color: 'cyan', radius: 8, orbitRadius: 5.3 },
    { name: 'Neptun', color: 'deepskyblue', radius: 8, orbitRadius: 5.9 },
  ];

  return (
    <>
    <View style={styles.container}>
      <View
        style={[
          styles.sun,
          { width: sunRadius * 2, height: sunRadius * 2, borderRadius: sunRadius },
        ]}
      />
      <View style={styles.orbitsContainer}>
        {planets.map((planet, index) => (
          <View
            key={index}
            style={[
              styles.orbit,
              {
                width: planet.orbitRadius * orbitRadiusMultiplier * 2,
                height: planet.orbitRadius * orbitRadiusMultiplier * 2,
                borderRadius: planet.orbitRadius * orbitRadiusMultiplier,
              },
            ]}
          >
            {index === 5 ? (
              <View
                style={[
                  styles.planet,
                  {
                    width: planet.radius * 2,
                    height: planet.radius * 2,
                    borderRadius: planet.radius,
                    marginTop: -planet.radius,
                    marginLeft: planet.orbitRadius * orbitRadiusMultiplier - planet.radius,
                    backgroundColor: planet.color,
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                ]}
              >
                <View style={styles.ring} />
              </View>
            ) : (
              <View
                style={[
                  styles.planet,
                  {
                    width: planet.radius * 2,
                    height: planet.radius * 2,
                    borderRadius: planet.radius,
                    marginTop: -planet.radius,
                    marginLeft: planet.orbitRadius * orbitRadiusMultiplier - planet.radius,
                    backgroundColor: planet.color,
                  },
                ]}
              >
              </View>
            )}
          </View>
        ))}
      </View>
    </View>
    <TopNav_2 />
    <BottomNav />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  sun: {
    backgroundColor: 'yellow',
    position: 'absolute',
    zIndex: 1,
  },
  orbitsContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height,
  },
  orbit: {
    position: 'absolute',
    borderColor: 'white',
    borderWidth: 1,
  },
  planet: {
    backgroundColor: 'gray',
    position: 'absolute',
  },
  ring: {
    width: 35,
    height: 35,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.7)',
    position: 'absolute',
  },
  planetName: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default UkadSloneczny;
