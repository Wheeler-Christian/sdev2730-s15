import { Text, View, StyleSheet } from "react-native";

function Card({ id, name, description }) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>
        {id}: {name}
      </Text>
      <Text style={styles.text}>{description}</Text>
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#555",
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 10,
  },
  text: {
    color: "white",
  },
});
