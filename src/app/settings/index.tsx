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
export default function SettingsScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8FAFC" }}>
  <ScrollView
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{ padding: 20, paddingBottom: 50 }}
  >
            <View style={{marginTop:40, gap:12}}> 
          <View style={{flexDirection:'row', gap:30, alignItems:'center', marginBottom:20 }}>
              <TouchableOpacity onPress={() => router.back()}>
          <MaterialCommunityIcons
            name="arrow-left"
            size={24}
            color="#0F172A"
          />
            </TouchableOpacity>
              <View style={{flexDirection:"column",alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:20, fontWeight:"bold",}}>Settings</Text>
            <Text style={{fontSize:14, fontWeight:"400", color:'gray'}}>Manage your preferences and app settings</Text>    
            </View>
          </View>
        <View style={{}}>
      <Text style={{fontSize:16, fontWeight:'bold', color:'gray'}}>PREFERENCES</Text>
        </View>
          <View style={{ shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 6,
   backgroundColor:'white', width:'100%', height:90, borderRadius:12, flexDirection:'column', justifyContent:'center', alignItems:'self-start', padding:10
    
    }}>
      <View style={{flexDirection:'row',  gap:8, justifyContent:'space-between', alignItems:'center'}}>
        <View style={{height:50, width:50, backgroundColor:'#ECFDF5', justifyContent:'center', alignItems:'center', borderRadius:12, }}>
          <MaterialCommunityIcons name="bell-outline" size={30}
      color="#10B981" />
       </View>
   <View style={{flexDirection:'column', flex:1}}>
  <Text style={{fontSize:18, color:'gray', fontWeight:'bold'}}>Notifications</Text>
  <Text style={{fontSize:15, }}>Manage alerts</Text>
  </View>
  <TouchableOpacity style={{alignSelf:'flex-end', marginLeft:20 }}>
       <MaterialCommunityIcons name="chevron-right" size={24}
      color="#10B981" />
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
   backgroundColor:'white', width:'100%', height:90, borderRadius:12, flexDirection:'column', justifyContent:'center', alignItems:'self-start', padding:10
    
    }}>
      <View style={{flexDirection:'row',  gap:8, justifyContent:'space-between', alignItems:'center'}}>
        <View style={{height:50, width:50, backgroundColor:'#ECFDF5', justifyContent:'center', alignItems:'center', borderRadius:12, }}>
          <MaterialCommunityIcons name="white-balance-sunny" size={30}
      color="#10B981" />
       </View>
   <View style={{flexDirection:'column', flex:1}}>
  <Text style={{fontSize:18, color:'gray', fontWeight:'bold'}}>Appearance</Text>
  <Text style={{fontSize:15, }}>Choose your theme</Text>
  </View>
  <TouchableOpacity style={{alignSelf:'flex-end', marginLeft:20 }}>
       <MaterialCommunityIcons name="chevron-right" size={24}
      color="#10B981" />
      </TouchableOpacity>
      </View>
    </View>
           
        
    <View style={{}}>

      <Text style={{fontSize:16, fontWeight:'bold', color:'gray'}}>BUSINESS</Text>
        </View>
             <View style={{ shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 6,
   backgroundColor:'white', width:'100%', height:90, borderRadius:12, flexDirection:'column', justifyContent:'center', alignItems:'self-start', padding:10
    
    }}>
      <View style={{flexDirection:'row', gap:8, justifyContent:'space-between', alignItems:'center'}}>
        <View style={{height:50, width:50, backgroundColor:'#ECFDF5', justifyContent:'center', alignItems:'center', borderRadius:12, }}>
          <MaterialCommunityIcons name="office-building-outline" size={30}
      color="#10B981" />
       </View>
   <View style={{flexDirection:'column', flex:1}}>
  <Text style={{fontSize:18, color:'gray', fontWeight:'bold'}}>Business Information</Text>
  <Text style={{fontSize:15, }}>Business details</Text>
  </View>
  <TouchableOpacity style={{alignSelf:'flex-end', marginLeft:20 }}>
       <MaterialCommunityIcons name="chevron-right" size={24}
      color="#10B981" />
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
   backgroundColor:'white', width:'100%', height:90, borderRadius:12, flexDirection:'column', justifyContent:'center', alignItems:'self-start', padding:10
    
    }}>
      <View style={{flexDirection:'row',  gap:8, justifyContent:'space-between', alignItems:'center'}}>
        <View style={{height:50, width:50, backgroundColor:'#ECFDF5', justifyContent:'center', alignItems:'center', borderRadius:12, }}>
          <MaterialCommunityIcons name="account-group-outline" size={30}
      color="#10B981" />
       </View>
   <View style={{flexDirection:'column', flex:1}}>
  <Text style={{fontSize:18, color:'gray', fontWeight:'bold'}}>Team Members</Text>
  <Text style={{fontSize:15, }}>Manage your team</Text>
  </View>
  <TouchableOpacity style={{alignSelf:'flex-end', marginLeft:20 }}>
       <MaterialCommunityIcons name="chevron-right" size={24}
      color="#10B981" />
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
   backgroundColor:'white', width:'100%', height:90, borderRadius:12, flexDirection:'column', justifyContent:'center', alignItems:'self-start', padding:10
    
    }}>
      <View style={{flexDirection:'row', gap:8, justifyContent:'space-between', alignItems:'center'}}>
        <View style={{height:50, width:50, backgroundColor:'#ECFDF5', justifyContent:'center', alignItems:'center', borderRadius:12, }}>
          <MaterialCommunityIcons name="file-document-outline" size={30}
      color="#10B981" />
       </View>
   <View style={{flexDirection:'column', flex:1}}>
  <Text style={{fontSize:18, color:'gray', fontWeight:'bold'}}>Currency & Invoice</Text>
  <Text style={{fontSize:15, }}>Invoice preferences</Text>
  </View>
  <TouchableOpacity style={{alignSelf:'flex-end', marginLeft:20 }}>
       <MaterialCommunityIcons name="chevron-right" size={24}
      color="#10B981" />
      </TouchableOpacity>
      </View>
    </View>
     <View style={{}}>
      <Text style={{fontSize:16, fontWeight:'bold', color:'gray'}}>SECURITY</Text>
        </View>
           <View style={{ shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 6,
   backgroundColor:'white', width:'100%', height:90, borderRadius:12, flexDirection:'column', justifyContent:'center', alignItems:'self-start', padding:10
    
    }}>
      <View style={{flexDirection:'row', gap:8, justifyContent:'space-between', alignItems:'center'}}>
        <View style={{height:50, width:50, backgroundColor:'#ECFDF5', justifyContent:'center', alignItems:'center', borderRadius:12, }}>
          <MaterialCommunityIcons name="shield-check-outline" size={30}
      color="#10B981" />
       </View>
   <View style={{flexDirection:'column',flex:1}}>
  <Text style={{fontSize:18, color:'gray', fontWeight:'bold'}}>Security</Text>
  <Text style={{fontSize:15, }}>Protect your account</Text>
  </View>
  <TouchableOpacity style={{alignSelf:'flex-end', marginLeft:20 }}>
       <MaterialCommunityIcons name="chevron-right" size={24}
      color="#10B981" />
      </TouchableOpacity>
      </View>
    </View>



    
    <View style={{}}>
      <Text style={{fontSize:16, fontWeight:'bold', color:'gray'}}>SUPPORT</Text>
        </View>


        <View style={{ shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 6,
   backgroundColor:'white', width:'100%', height:90, borderRadius:12, flexDirection:'column', justifyContent:'center', alignItems:'self-start', padding:10
    
    }}>
      <View style={{flexDirection:'row', gap:8, justifyContent:'space-between', alignItems:'center'}}>
        <View style={{height:50, width:50, backgroundColor:'#ECFDF5', justifyContent:'center', alignItems:'center', borderRadius:12, }}>
          <MaterialCommunityIcons name="help-circle-outline" size={30}
      color="#10B981" />
       </View>
   <View style={{flexDirection:'column', flex:1, gap:2}}>
  <Text style={{fontSize:18, color:'gray', fontWeight:'bold'}}>Help & Support</Text>
  <Text style={{fontSize:15, }}>Get help</Text>
  </View>
  <TouchableOpacity style={{alignSelf:'flex-end',}}>
       <MaterialCommunityIcons name="chevron-right" size={24}
      color="#10B981" />
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
   backgroundColor:'white', width:'100%', height:90, borderRadius:12, flexDirection:'column', justifyContent:'center', alignItems:'self-start', padding:10
    
    }}>
      <View style={{flexDirection:'row', gap:8, justifyContent:'space-between', alignItems:'center'}}>
        <View style={{height:50, width:50, backgroundColor:'#ECFDF5', justifyContent:'center', alignItems:'center', borderRadius:12, }}>
          <MaterialCommunityIcons name="information-outline" size={30}
      color="#10B981" />
       </View>
   <View style={{flexDirection:'column', flex:1}}>
  <Text style={{fontSize:20, color:'gray', fontWeight:'bold'}}>About BizOs</Text>
  <Text style={{fontSize:15, }}>App information</Text>
  </View>
  <TouchableOpacity style={{alignSelf:'flex-end', }}>
       <MaterialCommunityIcons name="chevron-right" size={24}
      color="#10B981" />
      </TouchableOpacity>
      </View>
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