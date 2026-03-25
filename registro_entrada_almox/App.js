import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";

export default function App() {
  const [material, setMaterial] = useState("");
  const [quantidade, setQuantidade] = useState("");

  // function confirmarRecebimento() {
  //   Alert.alert("Material: ", material, "\nQuantidade: ", quantidade)
  // }
  return (
    <View style={styles.container}>
      <Text>Registro de Entrada de Almoxarifado</Text>
      <Text>Material:</Text>
      <TextInput value={material} onChangeText={setMaterial} />
      <Text>Quantidade:</Text>
      <TextInput
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
      />
      <TouchableOpacity
      onPress={() => Alert.alert('Material: ', {material}, '\nQuantidade: ', {quantidade}, )}
      activeOpacity={0.3}
      >
        <Text>Confirmar Recebimento</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
