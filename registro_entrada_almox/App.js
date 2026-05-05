import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function App() {
  const [material, setMaterial] = useState("");
  const [quantidade, setQuantidade] = useState("");

  function confirmarRecebimento() {
    Alert.alert(
      "Registro",
      `Material: ${material}\nQuantidade: ${quantidade}`
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Registro de Entrada de Almoxarifado
      </Text>

      <Text style={styles.label}>Material:</Text>
      <TextInput
        style={styles.input}
        value={material}
        onChangeText={setMaterial}
      />

      <Text style={styles.label}>Quantidade:</Text>
      <TextInput
        style={styles.input}
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={confirmarRecebimento}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>
          Confirmar Recebimento
        </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  button: {
    marginTop: 30,
    backgroundColor: "#2f6db3",
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});