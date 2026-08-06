import { View, Text,SafeAreaView, StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Pressable,
  FlatList , } from "react-native";
 import { MaterialCommunityIcons } from "@expo/vector-icons";
 import { IconButton, Badge, Avatar } from 'react-native-paper';

 const { width } = Dimensions.get('window');
export default function MoreScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8FAFC" }}>
  <ScrollView
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{ padding: 20, paddingBottom: 50 }}
  >
    <View style={styles.headerRow}>
        <View style={{flex:1}}>
          <Text style={styles.subGreeting}>Menu</Text>
          <Text style={styles.mainGreeting}>Manage your business and account</Text>
        </View>
        <View style={styles.avatar}>
            <IconButton icon="bell" size={30}
        onPress={() => console.log('Notifications pressed')}
        accessibilityLabel="show new notifications"></IconButton>
        <Badge visible={true} size={8} style={styles.badge}/>
        </View>
        <View>
          <Avatar.Image size={50} source={require("@/assets/images/mine.png")} style={{backgroundColor:"gray"}} />
        </View>
      </View>
      <View style={{justifyContent:"center",alignItems:'center', marginTop:20,}}>
          <View style={{width:'100%',backgroundColor:'white', height:240, borderRadius:12, shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 4,flexDirection:'row', padding:15}}>
      <MaterialCommunityIcons
  name="briefcase-outline"
  size={24}
  color="#00A86B"
/>
      <Text>Business</Text>
    </View>
          </View>
      </ScrollView>
      </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  scrollContainer: {
    flex: 2,
    backgroundColor: '#f8fafc',
    paddingHorizontal: 20,
  },
  
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  subGreeting: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
  },
  mainGreeting: {
    fontSize: 12,
    fontWeight: '500',
    color: 'gray',
    marginTop: 2,
  },
  avatar: {
   position:"relative",
   alignSelf:"flex-start",
  },
  badge:{
     position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#00A86B',    
  },
});