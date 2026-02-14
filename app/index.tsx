import { router } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/caltaxi");
    }, 3000);

    return () => clearTimeout(timer);
  });

  return (
    <View style={styles.maincontainer}>
      <View style={styles.container}>
      <Image
        source={require("../assets/images/taxi.png")}
        style={{ width: 150, height: 150 }}
      />
      <Text style={{ 
        color: "black",
        marginTop: 20,
        fontFamily: "Kanit_700Bold",
        fontSize: 40}}>TAXI METER</Text>
      <Text style={{ 
        color: "#24dc2a",
        marginTop: 20,
        fontFamily: "Kanit_700Bold",
        fontSize: 20}}>THAI FAIR CALCULATOR</Text>
      <ActivityIndicator
        size="large"
        color="#24dc2a"
        style={{ marginTop: 20 }}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '95%',              
    aspectRatio: 1,         
    backgroundColor: '#fde979',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  maincontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#efd916",
  },
});