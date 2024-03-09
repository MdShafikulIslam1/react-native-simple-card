import { Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* profile section */}
      <View style={styles.profile}>
        <View style={styles.imgCard}>
          <Image style={styles.img} source={require("./assets/shofik.png")} />
        </View>
        <View style={styles.info}>
          <Text style={styles.textHeading}>Shafikul Islam</Text>
          <Text style={styles.textBio}>Full stack developer</Text>
          <Text>Joined 02 March 2024</Text>
        </View>
      </View>
      {/* bio */}
      <View>
        <Text style={{ marginBottom: 4 }}>About Me</Text>
        <Text style={styles.textBio}>
          I am a full stack developer with a passion for learning new
          technologies. I am currently learning React Native.
        </Text>
      </View>
      {/* overview section */}
      <View style={styles.overview}>
        <View style={styles.box}>
          <Text>Repos</Text>
          <Text style={styles.numeric}>8</Text>
        </View>
        <View style={styles.box}>
          <Text>Followers</Text>
          <Text style={styles.numeric}>122</Text>
        </View>
        <View style={styles.box}>
          <Text>Following</Text>
          <Text style={styles.numeric}>120</Text>
        </View>
      </View>
      {/* social media section */}
      <View style={styles.socialContainer}>
        {/* location */}
        <View style={styles.socialInfoContainer}>
          <View style={styles.socialImageContainer}>
            <Image
              style={styles.socialImage}
              source={require("./assets/location.png")}
            />
          </View>
          <Text style={styles.socialLink}>Gaibandha,Rangpur,Dhaka</Text>
        </View>
        {/* linkedIn */}
        <View style={styles.socialInfoContainer}>
          <View style={styles.socialImageContainer}>
            <Image
              style={styles.socialImage}
              source={require("./assets/linkedIn.png")}
            />
          </View>
          <Text style={styles.socialLink}>
            https://www.linkedin.com/in/shafikul-islam-web-dev/
          </Text>
        </View>
        {/* github */}
        <View style={styles.socialInfoContainer}>
          <View style={styles.socialImageContainer}>
            <Image
              style={styles.socialImage}
              source={require("./assets/github.png")}
            />
          </View>
          <Text style={styles.socialLink}>
            https://github.com/MdShafikulIslam1
          </Text>
        </View>
        {/* email */}
        <View style={styles.socialInfoContainer}>
          <View style={styles.socialImageContainer}>
            <Image
              style={styles.socialImage}
              source={require("./assets/email.png")}
            />
          </View>
          <Text style={styles.socialLink}>mdshafikuli421@gmail.com</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9BB0C1",
    padding: 30,
    marginTop: 20,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  textHeading: {
    fontSize: 18,
    fontWeight: "medium",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  textBio: {
    fontSize: 14,
  },
  imgCard: {
    // backgroundColor: "tomato",
    overflow: "hidden",
    width: 94,
    borderRadius: 50,
  },
  img: {
    width: "100%",
    objectFit: "scale-down",
    // borderRadius: 50,
  },
  overview: {
    marginTop: 20,
    backgroundColor: "gray",
    padding: 20,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 10,
  },
  box: {
    textAlign: "center",
  },
  numeric: {
    textAlign: "center",
    marginTop: 10,
  },
  socialContainer: {
    marginTop: 40,
    gap: 15,
  },
  socialInfoContainer: {
    flexDirection: "row",
    gap: 15,
    // justifyContent: "center",
    alignItems: "center",
  },
  socialImageContainer: {
    width: 40,
    height: 40,

    // borderRadius: 20,
  },
  socialImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    borderRadius: 20,
  },
  socialLink: {
    width: 300,
  },
});
