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

        <View style={{maxWidth:'70%', backgroundColor:'#00A86B', alignSelf:'flex-start'}}></View>
        <View></View>
        <View></View>
    
  </ScrollView>
   </SafeAreaView>
  );
}