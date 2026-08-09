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
export default function ProfileScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8FAFC" }}>
  <ScrollView
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{ padding: 20, paddingBottom: 50 }}
  >
            <View style={{marginTop:40, gap:12}}> 
          <View style={{flexDirection:'row', gap:120, alignItems:'center', marginBottom:20 }}>
              <TouchableOpacity onPress={() => router.back()}>
          <MaterialCommunityIcons
            name="arrow-left"
            size={24}
            color="#0F172A"
          />
            </TouchableOpacity>

            <Text style={{fontSize:20, fontWeight:"bold",}}>Profile</Text>
          </View>
         <View
  style={{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
    backgroundColor: "white",
    width: "100%",
    height: 220,
    borderRadius: 12,
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
    gap: 15,
  }}
>
  {/* Avatar + Camera */}
  <View style={{ position: "relative" }}>
    <Avatar.Image
      size={80}
      source={require("@/assets/images/mine.png")}
      style={{ backgroundColor: "gray" }}
    />

    <TouchableOpacity
      style={{
        position: "absolute",
        right: -2,
        bottom: -2,
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: "#10B981",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "white",
      }}
    >
      <MaterialCommunityIcons
        name="camera"
        size={15}
        color="white"
      />
    </TouchableOpacity>
  </View>

  {/* User information */}
  <View style={{ alignItems: "center" }}>
    <Text style={{ fontWeight: "bold" }}>
      Muhammad Suleiman
    </Text>

    <Text style={{ fontSize: 10, color: "gray" }}>
      muhammad@gmail.com
    </Text>
  </View>
  <View style={{backgroundColor:"#ECFDF5",width:'50%', height:40, borderRadius:12,flexDirection:'row', alignItems:'center',justifyContent:'center', gap:4}}>
    <MaterialCommunityIcons
      name="crown-outline"
      size={18}
      color="#10B981"
    />
    <Text style={{color:'#10B981'}}>Business Owner</Text>
  </View>
</View>
        <View style={{flexDirection:'row', gap:4, alignItems:'center',}}>
           <View style={{height:30, width:30, backgroundColor:'#ECFDF5', justifyContent:'center', alignItems:'center', borderRadius:12 }}>
          <MaterialCommunityIcons name="account-outline" size={24}
      color="#10B981" />
       </View>
      <Text style={{fontSize:16, fontWeight:'bold'}}>Personal Information</Text>
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
        <View style={{height:50, width:50, backgroundColor:'#ECFDF5', justifyContent:'center', alignItems:'center', borderRadius:12 }}>
          <MaterialCommunityIcons name="account-outline" size={30}
      color="#10B981" />
       </View>
   <View style={{flexDirection:'column'}}>
  <Text style={{fontSize:18, color:'gray', fontWeight:'bold'}}>Full Name</Text>
  <Text style={{fontSize:18, }}>Muhammad suleiman</Text>
  </View>
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
        <View style={{height:50, width:50, backgroundColor:'#ECFDF5', justifyContent:'center', alignItems:'center', borderRadius:12 }}>
          <MaterialCommunityIcons name="email-outline" size={30}
      color="#10B981" />
       </View>
   <View style={{flexDirection:'column'}}>
  <Text style={{fontSize:18, color:'gray', fontWeight:'bold'}}>Email</Text>
  <Text style={{fontSize:18, }}>pinnacle@business.com</Text>
  </View>
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
        <View style={{height:50, width:50, backgroundColor:'#ECFDF5', justifyContent:'center', alignItems:'center', borderRadius:12 }}>
          <MaterialCommunityIcons name="phone-outline" size={30}
      color="#10B981" />
       </View>
   <View style={{flexDirection:'column'}}>
  <Text style={{fontSize:18, color:'gray', fontWeight:'bold'}}>Phone Number</Text>
  <Text style={{fontSize:18, }}>+234 800 123 4567</Text>
  </View>
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
    <View style={{marginTop:4}}>
          <TouchableOpacity style={{width:'100%',height:50, backgroundColor:'white', borderRadius:12, borderWidth:1, borderColor:'#00A86B',justifyContent:'center', alignItems:'center', flexDirection:'row', gap:4}}>
            <MaterialCommunityIcons name="pencil-outline" size={24}
      color="#10B981" />
         <Text style={{fontSize:20, color:'#00A86B'}}>Edit Profile</Text>
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