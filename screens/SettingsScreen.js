import React from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import { connect } from "react-redux";

class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: "My Account",
    headerTintColor: "#fff",
    headerStyle: {
      backgroundColor: "#ff5207"
    }
  };

  _signOut = async () => {
    this.props.navigation.navigate("Auth");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.currentUser}</Text>
        <Button
          style={{ backgroundColor: "#ff5207" }}
          title="Sign out"
          color="#ff5207"
          onPress={this._signOut}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  sectionList: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

function mapStateToProps(state) {
  return {
    currentUser: state.user.currentUser
  };
}

export default connect(mapStateToProps)(SettingsScreen);
