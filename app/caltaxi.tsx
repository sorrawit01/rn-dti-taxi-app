import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
export default function Taxi() {
  const [distance, setDistance] = useState('');
  const [waitingTime, setWaitingTime] = useState('');
  const [result, setResult] = useState(0);
  const [distFare, setDistFare] = useState(0); 
  const [timeFare, setTimeFare] = useState(0);

  const handleCalculate = () => {
  if (!distance || parseFloat(distance) === 0) {
    setResult(0);
    setDistFare(0);
    setTimeFare(0);
    return;
  }

  const dist = parseFloat(distance) || 0;
  const time = parseFloat(waitingTime) || 0;

  let fare = 35; 
  let remaining = dist - 1;

  // คำนวณตามระยะทาง
  if (remaining > 0) {
    let d = Math.min(remaining, 9);
    fare += d * 6.50;
    remaining -= d;
  }
  if (remaining > 0) {
    let d = Math.min(remaining, 10);
    fare += d * 7.00;
    remaining -= d;
  }
  if (remaining > 0) {
    let d = Math.min(remaining, 20);
    fare += d * 8.00;
    remaining -= d;
  }
  if (remaining > 0) {
    let d = Math.min(remaining, 20);
    fare += d * 8.50;
    remaining -= d;
  }
  if (remaining > 0) {
    let d = Math.min(remaining, 20);
    fare += d * 9.00;
    remaining -= d;
  }
  if (remaining > 0) {
    fare += remaining * 10.50;
  }

  const timeCharge = time * 3.00;

  setDistFare(fare);       
  setTimeFare(timeCharge);  


  const total = Math.ceil(fare + timeCharge);
  setResult(total);
};

  const handleReset = () => {
    setDistance('');
    setWaitingTime('');
    setResult(0);
    setDistFare(0);
    setTimeFare(0);
  };

  return (
    <View>
        <View>
      <Image source={require("../assets/images/taxi.png")} style={styles.image}/>
      <Text style={{ 
        fontSize: 30, 
        textAlign: "center", 
        marginTop: 10, 
        fontFamily: "Kanit_700Bold" ,
        color: "#fce621" }}>คำนวณค่าแท็กซี่</Text>
      <View style={styles.container}>
      {/* ป้อนระยะทาง */}
        <Text style={styles.text}>ระยะทาง (กิโลเมตร)</Text>
        <TextInput
            value={distance}
            onChangeText={setDistance}
            placeholder="0.0"
            placeholderTextColor="#939393"
            keyboardType="numeric"
            style={styles.input}
          /> 
          <Text style={styles.text}>เวลารถติด (นาที)</Text>
        <TextInput
            value={waitingTime}
            onChangeText={setWaitingTime}
            placeholder="0.0"
            placeholderTextColor="#939393"
            keyboardType="numeric"
            style={styles.input}
          />

      {/* คำนวณและล้างค่า  */}
        <View style={{flexDirection: "row", width: "100%", padding: 20}}>
        <TouchableOpacity 
          onPress={handleCalculate}
          style={styles.buttom70}><Text style={{fontFamily: "Kanit_700Bold", fontSize: 20, color: "white"}}>คำนวณราคา</Text></TouchableOpacity>
        <TouchableOpacity 
          onPress={handleReset}
          style={styles.buttom30}><Text style={{fontFamily: "Kanit_700Bold", fontSize: 20, color: "red"}}>ล้างค่า</Text></TouchableOpacity>
        </View>
      </View>
      {/* แสดงผล */}
      <View style={styles.resultcontainer}>
        <Text style={{fontFamily: "Kanit_700Bold", fontSize: 15, color: "#cacaca", marginTop: 20}}>ค่าโดยสารโดยประมาณ</Text>
        <Text style={{ fontFamily: "Kanit_700Bold", color: "#fce621" }}>
          <Text style={{ fontSize: 40 }}>{result.toFixed(2)}</Text>
          <Text style={{ fontSize: 20 }}>  บาท</Text>
        </Text>
        <View style={{
          height: 1,              
          backgroundColor: '#cacaca',
          marginVertical: 20,   
          width: '90%',
        }} />
        <View style={{flexDirection: "row"}}>
        <Text style={styles.detail}>ค่าโดยสารทั้งหมด</Text>
        <Text style={styles.resultdetail}>{distFare.toFixed(2)} ฿</Text>
        </View>
        <View style={{flexDirection: "row"}}>
        <Text style={styles.detail}>ค่ารถติด ( นาที )</Text>
        <Text style={styles.resultdetail}>    {timeFare.toFixed(2)} ฿</Text>
        </View>
      </View>
      </View>
      </View>
  )
}
const styles = StyleSheet.create({
  resultdetail: {
    fontFamily: "Kanit_700Bold",
    fontSize: 15,
    color: "#cacaca",
  },
  detail: {
    fontFamily: "Kanit_700Bold",
    fontSize: 15,
    color: "#cacaca",
    marginBottom: 10,
    marginRight: 130
  },
  resultcontainer: {
    marginTop: 20,
    marginLeft: 20,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#252525",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 5,
    shadowOpacity: 0.25,
    elevation: 5,
    borderRadius: 10
  },
  buttom30: {
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "red",
    backgroundColor: "#ffffff",
    fontFamily: "Kanit_700Bold",
    color: "red",
  },
  buttom70: {
    width: "67%",
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 10,
    backgroundColor: "#0dbe57",
    fontFamily: "Kanit_700Bold",
    color: "white",
  },
  text: {
    alignSelf: "flex-start",
    marginLeft: 20,
    marginTop: 10,
    fontSize: 17,
    fontFamily: "Kanit_400Regular"
  },
  input: {
    width: "90%",
    height: 40,
    margin: 12,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#e9e9e9",
    fontFamily: "Kanit_400Regular"
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginTop: 30
  },
  container: {
    marginTop: 20,
    marginLeft: 20,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 5,
    shadowOpacity: 0.25,
    elevation: 5,
    borderRadius: 10
  },
})