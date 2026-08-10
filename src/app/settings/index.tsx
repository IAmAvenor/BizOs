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
          <View style={{flexDirection:'row', gap:50, alignItems:'center', marginBottom:20 }}>
              <TouchableOpacity onPress={() => router.back()}>
          <MaterialCommunityIcons
            name="arrow-left"
            size={24}
            color="#0F172A"
          />
            </TouchableOpacity>
              <View style={{flexDirection:"column",alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:20, fontWeight:"bold",}}>Settings</Text>
            <Text style={{fontSize:10, fontWeight:"bold",}}>Manage your preferences and app settings</Text>    
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
      <View style={{flexDirection:'row', gap:8, alignItems:'center'}}>
        <View style={{height:50, width:50, backgroundColor:'#ECFDF5', justifyContent:'center', alignItems:'center', borderRadius:12, }}>
          <MaterialCommunityIcons name="lock-outline" size={30}
      color="#10B981" />
       </View>
   <View style={{flexDirection:'column'}}>
  <Text style={{fontSize:18, color:'gray', fontWeight:'bold'}}>Change Password</Text>
  <Text style={{fontSize:15, }}>Update your account password</Text>
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
      <View style={{flexDirection:'row', gap:8, alignItems:'center'}}>
        <View style={{height:50, width:50, backgroundColor:'#ECFDF5', justifyContent:'center', alignItems:'center', borderRadius:12, }}>
          <MaterialCommunityIcons name="lock-outline" size={30}
      color="#10B981" />
       </View>
   <View style={{flexDirection:'column'}}>
  <Text style={{fontSize:18, color:'gray', fontWeight:'bold'}}>Change Password</Text>
  <Text style={{fontSize:15, }}>Update your account password</Text>
  </View>
  <TouchableOpacity style={{alignSelf:'flex-end', marginLeft:20 }}>
       <MaterialCommunityIcons name="chevron-right" size={24}
      color="#10B981" />
      </TouchableOpacity>
      </View>
    </View>
           
        
    <View style={{flexDirection:'row', gap:4, alignItems:'center',}}>
           <View style={{height:30, width:30, backgroundColor:'#ECFDF5', justifyContent:'center', alignItems:'center', borderRadius:12 }}>
          <MaterialCommunityIcons name="shield-outline" size={24}
      color="#10B981" />
       </View>
      <Text style={{fontSize:16, fontWeight:'bold'}}>Account</Text>
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
      <View style={{flexDirection:'row', gap:8, alignItems:'center'}}>
        <View style={{height:50, width:50, backgroundColor:'#ECFDF5', justifyContent:'center', alignItems:'center', borderRadius:12, }}>
          <MaterialCommunityIcons name="lock-outline" size={30}
      color="#10B981" />
       </View>
   <View style={{flexDirection:'column'}}>
  <Text style={{fontSize:18, color:'gray', fontWeight:'bold'}}>Change Password</Text>
  <Text style={{fontSize:15, }}>Update your account password</Text>
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
      <View style={{flexDirection:'row', gap:8, alignItems:'center'}}>
        <View style={{height:50, width:50, backgroundColor:'#ECFDF5', justifyContent:'center', alignItems:'center', borderRadius:12, }}>
          <MaterialCommunityIcons name="account-lock-outline" size={30}
      color="#10B981" />
       </View>
   <View style={{flexDirection:'column'}}>
  <Text style={{fontSize:18, color:'gray', fontWeight:'bold'}}>Login Activity</Text>
  <Text style={{fontSize:15, }}>View your active sessions</Text>
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
      <View style={{flexDirection:'row', gap:8, alignItems:'center'}}>
        <View style={{height:50, width:50, backgroundColor:'#ECFDF5', justifyContent:'center', alignItems:'center', borderRadius:12, }}>
          <MaterialCommunityIcons name="account-lock-outline" size={30}
      color="#10B981" />
       </View>
   <View style={{flexDirection:'column'}}>
  <Text style={{fontSize:18, color:'gray', fontWeight:'bold'}}>Login Activity</Text>
  <Text style={{fontSize:15, }}>View your active sessions</Text>
  </View>
  <TouchableOpacity style={{alignSelf:'flex-end', marginLeft:20 }}>
       <MaterialCommunityIcons name="chevron-right" size={24}
      color="#10B981" />
      </TouchableOpacity>
      </View>
    </View>
     <View style={{flexDirection:'row', gap:4, alignItems:'center',}}>
           <View style={{height:30, width:30, backgroundColor:'#ECFDF5', justifyContent:'center', alignItems:'center', borderRadius:12 }}>
          <MaterialCommunityIcons name="shield-outline" size={24}
      color="#10B981" />
       </View>
      <Text style={{fontSize:16, fontWeight:'bold'}}>Account</Text>
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
      <View style={{flexDirection:'row', gap:8, alignItems:'center'}}>
        <View style={{height:50, width:50, backgroundColor:'#ECFDF5', justifyContent:'center', alignItems:'center', borderRadius:12, }}>
          <MaterialCommunityIcons name="account-lock-outline" size={30}
      color="#10B981" />
       </View>
   <View style={{flexDirection:'column'}}>
  <Text style={{fontSize:18, color:'gray', fontWeight:'bold'}}>Login Activity</Text>
  <Text style={{fontSize:15, }}>View your active sessions</Text>
  </View>
  <TouchableOpacity style={{alignSelf:'flex-end', marginLeft:20 }}>
       <MaterialCommunityIcons name="chevron-right" size={24}
      color="#10B981" />
      </TouchableOpacity>
      </View>
    </View>



    
    <View style={{flexDirection:'row', gap:4, alignItems:'center',}}>
           <View style={{height:30, width:30, backgroundColor:'#ECFDF5', justifyContent:'center', alignItems:'center', borderRadius:12 }}>
          <MaterialCommunityIcons name="shield-outline" size={24}
      color="#10B981" />
       </View>
      <Text style={{fontSize:16, fontWeight:'bold'}}>Account</Text>
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
      <View style={{flexDirection:'row', gap:8, alignItems:'center'}}>
        <View style={{height:50, width:50, backgroundColor:'#ECFDF5', justifyContent:'center', alignItems:'center', borderRadius:12, }}>
          <MaterialCommunityIcons name="account-lock-outline" size={30}
      color="#10B981" />
       </View>
   <View style={{flexDirection:'column'}}>
  <Text style={{fontSize:18, color:'gray', fontWeight:'bold'}}>Login Activity</Text>
  <Text style={{fontSize:15, }}>View your active sessions</Text>
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
      <View style={{flexDirection:'row', gap:8, alignItems:'center'}}>
        <View style={{height:50, width:50, backgroundColor:'#ECFDF5', justifyContent:'center', alignItems:'center', borderRadius:12, }}>
          <MaterialCommunityIcons name="account-lock-outline" size={30}
      color="#10B981" />
       </View>
   <View style={{flexDirection:'column'}}>
  <Text style={{fontSize:18, color:'gray', fontWeight:'bold'}}>Login Activity</Text>
  <Text style={{fontSize:15, }}>View your active sessions</Text>
  </View>
  <TouchableOpacity style={{alignSelf:'flex-end', marginLeft:20 }}>
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