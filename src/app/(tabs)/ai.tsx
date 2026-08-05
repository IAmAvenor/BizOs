import { StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Pressable,
  FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
 import { IconButton,} from 'react-native-paper';
const { width } = Dimensions.get('window');
  const gridCardWidth = (width - 40 - 12) / 2; 
  const mediumCardWidth = (width - 40 - 24) / 3; 
  const smallCardWidth = (width - 40 - 42) / 4; 

export default function AiScreen() {
  return (
   <SafeAreaView style={{ flex: 1, backgroundColor: "#F8FAFC" }}>
  <ScrollView
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{ padding: 20, paddingBottom: 50 }}
  >
      
        <View style={{ marginTop:40,}}>
          <View>
            <TouchableOpacity>
          <MaterialCommunityIcons
            name="arrow-left"
            size={24}
            color="#0F172A"
          />
            </TouchableOpacity>
      </View>
        <View style={{flexDirection:"row", justifyContent:'space-between'}}>
          <Text style={{fontSize:20, fontWeight:'bold',}}>AI Assistant</Text>
          <TouchableOpacity style={{height:25, width:35, borderRadius:12, backgroundColor:'#00A86B', justifyContent:'center', alignItems:'center',}}>
            <Text style={{color:'white'}}>Pro</Text>
          </TouchableOpacity>
        </View>
        </View>

        <View style={{maxWidth:'70%', backgroundColor:'#FFFFFF', alignSelf:'flex-start', marginTop:20, shadowColor: "#000",shadowOffset: {
  width: 0,
  height: 2,
},
shadowOpacity: 0.05,
shadowRadius: 6,
elevation: 8 , padding:15, gap:4, borderRadius:12}}>
          <Text>Hi john! 👋</Text>
          <Text>How can i help you grow </Text>
          <Text>your business today?</Text>
        </View>
        <View style={{maxWidth:'70%', backgroundColor:'#00A86B', alignSelf:'flex-end',marginTop:25, padding:15, gap:4, borderRadius:12}}>
           <Text style={{color:'white'}}>How much profit did i</Text>
          <Text style={{color:'white'}}>make this month?</Text>
        </View>
        <View style={{maxWidth:'80%', backgroundColor:'#FFFFFF', alignSelf:'flex-start', marginTop:25, shadowColor: "#000",shadowOffset: {
  width: 0,
  height: 2,
},
shadowOpacity: 0.05,
shadowRadius: 6,
elevation: 8 , padding:18, gap:4, borderRadius:12}}>

            <Text style={{fontSize:15, fontWeight:"500",}}>Your profit for july 2026 is</Text>
            <Text style={{fontSize:20, fontWeight:"bold",}}> $8,430.00</Text>
            <Text style={{ color: "#22C55E", fontSize:12, marginTop:8 }}>
    ▲10.3%
    <Text style={{ color: "#64748B" }}> vs june 2026</Text>
  </Text>

  <TouchableOpacity style={{backgroundColor:'white', borderWidth:1, borderColor:"#00A86B", marginTop:20, padding:10, borderRadius:12, justifyContent:'center', alignItems:"center", shadowColor: "#000",shadowOffset: {
  width: 0,
  height: 2,
},
shadowOpacity: 0.05,
shadowRadius: 6,
elevation: 2 , }}>
      <Text style={{color:"#00A86B"}}>View detailed report</Text>
  </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between', gap:4, marginTop:40}}>

              <TouchableOpacity style={{shadowColor: "#000",shadowOffset: {},shadowOpacity: 0.05,
shadowRadius: 6,
elevation: 2, backgroundColor:'white',borderRadius:20,justifyContent:'center', alignItems:"center", padding:10}}>
  <Text style={{fontSize:12, fontWeight:'bold'}}>Generate invoice</Text>
</TouchableOpacity>
              <TouchableOpacity style={{shadowColor: "#000",shadowOffset: {},shadowOpacity: 0.05,
shadowRadius: 6,
elevation: 2, backgroundColor:'white',borderRadius:20,justifyContent:'center', alignItems:"center", padding:10}}>
  <Text style={{fontSize:12, fontWeight:'bold'}}>Analyze sales</Text>
</TouchableOpacity>
              <TouchableOpacity style={{shadowColor: "#000",shadowOffset: {},shadowOpacity: 0.05,
shadowRadius: 6,
elevation: 2, backgroundColor:'white',borderRadius:20,justifyContent:'center', alignItems:"center", padding:10}}>
  <Text style={{fontSize:12, fontWeight:'bold'}}  >write ad copy</Text>
</TouchableOpacity>
        </View>

     <View
  style={{
    marginTop: 60,
    backgroundColor: "white",
    borderRadius: 20,
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  }}
>
  <TextInput
    placeholder="Ask anything..."
    placeholderTextColor="gray"
    style={{
      flex: 1,
      fontSize: 15,
      color:'black'
    }}
  />

  <MaterialCommunityIcons
    name="microphone"
    size={22}
    color="gray"
    style={{ marginRight: 12 }}
  />

  <View
    style={{
      width: 34,
      height: 34,
      borderRadius: 17,
      backgroundColor: "#E2E8F0",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <MaterialCommunityIcons
      name="arrow-right"
      size={18}
      color="#64748B"
    />
  </View>
</View>
    
  </ScrollView>
   </SafeAreaView>
  );
}