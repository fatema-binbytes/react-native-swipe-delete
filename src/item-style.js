import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
      zIndex: 0
    },
    backRow: {
      position: "absolute",
      width: "100%",
      padding: 15,
      paddingTop: 22,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
    },
    animatedContainer: {
      flexDirection: "row",
      width: "100%",
      padding: 10,
      backgroundColor: "#FFF",
      borderBottomWidth: 1,
      borderColor: "lightgrey"
    },
    image: {
      height: 50,
      width: 50,
      zIndex: 1,
      borderRadius: 50
    },
    txt: {
      fontSize: 14,
      color: "black",
      fontWeight: "bold"
    },
    txtContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingBottom: 5
    },
    subContainer: {
      flex: 1,
      marginLeft: 10,
      justifyContent: "center"
    }
  });
  export default styles;