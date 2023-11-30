import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import Card from "./components/Card";

const courses = [
  {
    id: "SDEV1022",
    name: "HTML CSS Basics",
    description: "Uses HTML5 and CSS3 to create web sites",
  },
  {
    id: "SDEV1032",
    name: "Programming Basics",
    description:
      "Teaches basic programming algorithms of sequence, selection, and repetition",
  },
  {
    id: "SDEV1041",
    name: "SQL Basics",
    description: "Database fundamentals using MySQL and MariaDB",
  },
  {
    id: "SDEV1090",
    name: "Version Control",
    description: "Learn Git and GitHub to control versions of development",
  },
  {
    id: "SDEV2730",
    name: "Mobile Development",
    description: "Cross-platform development of mobile apps with React Native",
  },
];

function renderItem({ item }) {
  return (
    <View>
      <Card id={item.id} name={item.name} description={item.description} />
    </View>
  );
}

function courseSeparator() {
  return <View style={styles.separator} />;
}

export default function App() {
  const [fontsLoaded] = useFonts({
    "neucha-regular": require("./assets/fonts/Neucha-Regular.ttf"),
    "russo-one": require("./assets/fonts/RussoOne-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.h1}>Course Listing</Text>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={courseSeparator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    alignItems: "center",
    padding: 10,
  },
  h1: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 40,
    marginBottom: 20,
  },
  separator: {
    backgroundColor: "#777",
    height: 2,
    margin: 7,
  },
});
