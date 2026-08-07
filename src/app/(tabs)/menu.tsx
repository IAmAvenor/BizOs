import { View, Text,SafeAreaView, StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Pressable,
  FlatList , Image } from "react-native";
 import { MaterialCommunityIcons } from "@expo/vector-icons";
 import { IconButton, Badge, Avatar } from 'react-native-paper';
import { router } from "expo-router";

 const { width } = Dimensions.get('window');
export default function MoreScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8FAFC" }}>
  <ScrollView
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{ padding: 20, paddingBottom: 50 }}
  >
            <View style={{marginTop:40, gap:12}}> 
          <View style={{flexDirection:'row', gap:10, alignItems:'center', marginBottom:40 }}>
              <TouchableOpacity onPress={() => router.back()}>
          <MaterialCommunityIcons
            name="arrow-left"
            size={24}
            color="#0F172A"
          />
            </TouchableOpacity>

            <Text style={{fontSize:20, fontWeight:"600"}}>Menu</Text>
          </View>
          <View style={{ shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 8, backgroundColor:'white', width:'100%', height:120, borderRadius:12, flexDirection:'row', alignItems:'center', padding:20, gap:15
    
    }}>
      <TouchableOpacity onPress={() => router.push("/profile")}>
     <Avatar.Image size={80} source={require("@/assets/images/mine.png")} style={{backgroundColor:"gray"}} />
      </TouchableOpacity >
      <View>
      <Text style={{fontWeight:'bold'}}>Muhammad Suleiman</Text>
      <Text style={{fontSize:10, color:"gray"}}>muhammad@gmail.com</Text>
      </View>
        </View>
          <View style={{ shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2, backgroundColor:'white', width:'100%', height:90, borderRadius:12, flexDirection:'row', justifyContent:'space-between', alignItems:'center', padding:10
    
    }}>
      <View style={{flexDirection:'row', gap:8}}>
        <MaterialCommunityIcons
  name="package-variant-closed"
  size={30}
  color="#00A86B"
/>

  <Text style={{fontSize:20, color:'#00A86B', fontWeight:'bold'}}>Inventory</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => router.push("/inventory")}>
         <MaterialCommunityIcons
  name="chevron-right"
  size={30}
  color="gray"
/>
        </TouchableOpacity>
      </View>
    </View>
          <View style={{ shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2, backgroundColor:'white', width:'100%', height:90, borderRadius:12, flexDirection:'row', justifyContent:'space-between', alignItems:'center', padding:10
    
    }}>
      <View style={{flexDirection:'row', gap:8}}>
        <MaterialCommunityIcons
  name="file-document-outline"
  size={30}
  color="#00A86B"
/>

  <Text style={{fontSize:20, color:'#00A86B', fontWeight:'bold'}}>Invoices</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => router.push("/invoices")}>
         <MaterialCommunityIcons
  name="chevron-right"
  size={30}
  color="gray"
/>
        </TouchableOpacity>
      </View>
    </View>
          <View style={{ shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2, backgroundColor:'white', width:'100%', height:90, borderRadius:12, flexDirection:'row', justifyContent:'space-between', alignItems:'center', padding:10
    
    }}>
      <View style={{flexDirection:'row', gap:8}}>
        <MaterialCommunityIcons
  name="bullhorn-outline"
  size={30}
  color="#00A86B"
/>

  <Text style={{fontSize:20, color:'#00A86B', fontWeight:'bold'}}>Marketing</Text>
      </View>
      <View>
         <TouchableOpacity onPress={() => router.push("/marketing")}>
         <MaterialCommunityIcons
  name="chevron-right"
  size={30}
  color="gray"
/>
        </TouchableOpacity>
      </View>
    </View>
          <View style={{ shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2, backgroundColor:'white', width:'100%', height:90, borderRadius:12, flexDirection:'row', justifyContent:'space-between', alignItems:'center', padding:10
    
    }}>
      <View style={{flexDirection:'row', gap:8}}>
        <MaterialCommunityIcons
  name="cog-outline"
  size={30}
  color="#00A86B"
/>

  <Text style={{fontSize:20, color:'#00A86B', fontWeight:'bold'}}>Settings</Text>
      </View>
      <View>
         <TouchableOpacity onPress={() => router.push("/settings")}>
         <MaterialCommunityIcons
  name="chevron-right"
  size={30}
  color="gray"
/>
        </TouchableOpacity>
      </View>
    </View>
      <View style={{justifyContent:'center', alignItems:'center', marginTop:24, fontWeight:'bold'}}>
     <TouchableOpacity onPress={() => router.replace("/(auth)/sign-in")}>
        <Text style={{color:'red', fontSize:18}}>Log Out</Text>
        </TouchableOpacity>     
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
});