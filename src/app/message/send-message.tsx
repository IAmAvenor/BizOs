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
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";


const customersData = [
  { id: '1', name: 'muhammad suleiman', email: 'muhammad@gmail.com', number:'08011223344', Icon:'message-text-outline', IconBg:"#DCFCE7", IconColor: "#16A34A", icon: require('../../../assets/images/mine.png'),bgColor: '#EFF6FF' },
  { id: '2', name: 'Sarah johnson', email: 'sarah@gmail.com', number:'08011223344',Icon:'message-text-outline', IconBg:"#DCFCE7", IconColor: "#16A34A", icon: require('../../../assets/images/sarah.png'),bgColor: '#EFF6FF' },
  { id: '3', name: 'Micheal Brown', email: 'micheal@gmail.com', number:'08011223344', Icon:'message-text-outline', IconBg:"#DCFCE7", IconColor: "#16A34A", icon: require('../../../assets/images/No-2.png'), bgColor: '#EFF6FF' },
  { id: '4', name: 'David Wilson', email: 'david@gmail.com',  number:'08011223344', Icon:'message-text-outline', IconBg:"#DCFCE7", IconColor: "#16A34A",icon: require('../../../assets/images/No-3.png'), bgColor: '#EFF6FF' },
  { id: '5', name: 'Emily Davis', email: 'emily@gmail.com',  number:'08011223344', Icon:'message-text-outline', IconBg:"#DCFCE7", IconColor: "#16A34A",icon: require('../../../assets/images/No-4.png'),bgColor: '#EFF6FF' },
  { id: '6', name: 'James Anderson', email: 'james@gmail.com', number:'08011223344',Icon:'message-text-outline', IconBg:"#DCFCE7", IconColor: "#16A34A", icon: require('../../../assets/images/No-5.png'), bgColor: '#EFF6FF' },
];


 const { width } = Dimensions.get('window');
  const mediumCardWidth = (width - 40 - 24) / 3; 

export default function SendmessageScreen() {


    const { customerId } = useLocalSearchParams();

    const selectedCustomer = customersData.find(
  (customer) => customer.id === customerId
);

  const [message, setMessage] = useState(
  "Hi Customer,\n\nYour recent order is ready for pickup.\n\nThanks!"
  );

  const maxLength = 500

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
            name="chevron-left"
            size={24}
            color="#0F172A"
          />
            </TouchableOpacity>
              <View style={{flexDirection:"column",alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:20, fontWeight:"bold",}}>Message Customer</Text>
            </View>
          </View>
          <View style={{flexDirection:'row', alignItems:'center', gap:28}}>

            <View style={{flexDirection:'row', alignItems:'center', gap:4}}>
                <Image
                source={selectedCustomer?.icon}
                style={{
                    width: 80,
                    height: 80,
                    borderRadius: 40,
                }}
                />
                    <View>
                <Text style={{fontWeight:'bold'}}>{selectedCustomer?.name}</Text>
               <Text style={{fontSize:12, color:'gray'}}>{selectedCustomer?.email}</Text>
               <Text style={{fontSize:12, color:'gray'}}>{selectedCustomer?.number}</Text>
               </View>
            </View>

            <View style={{flexDirection:'row', gap:8}}>
                <MaterialCommunityIcons name="whatsapp" size={24} color="#25D366" />
                <MaterialCommunityIcons name="phone-outline" size={24} color="#25D366" />
                <MaterialCommunityIcons name="email-outline" size={24} color="#25D366" />
            </View>
          </View>
            <View style={{marginTop:10, padding: 16,}}>
            <Text style={{fontSize: 15, fontWeight: '600', color: '#333333', marginBottom: 8,}}>Message</Text>
            
            <View style={{borderWidth:1, borderColor:'#E2E8F0', borderRadius:12, padding:16, backgroundColor:'#FAFAFA', minHeight:160, justifyContent:'space-between',}}>
                <TextInput style={{fontSize: 15,lineHeight: 22,color: '#1A1A1A',paddingTop: 0, paddingBottom: 20, textAlignVertical: 'top',}} maxLength={maxLength} multiline={true} value={message} onChangeText={setMessage} /> 

                <Text style={{alignSelf:'flex-end', fontSize:11, color:'#888888'}}>
                  {message.length}/{maxLength}
                  </Text> 
            </View>
            </View>
            <View>
                <Text style={{fontSize: 15, fontWeight: '600', color: '#333333', marginBottom: 8,}}>Send via</Text>
                <View style={{flexDirection:"row",gap:8, marginTop:10}}>
                  <TouchableOpacity style={{flexDirection:'row', gap:4, width:mediumCardWidth, backgroundColor:'#DCFCE7', justifyContent:'center', alignItems:'center', height:60, borderRadius:12}}>
                    <MaterialCommunityIcons name="whatsapp" size={20} color="#25D366"/>
                    <Text style={{fontSize:14, fontWeight:'bold', color:'#25D366'}}>WhatsApp</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{flexDirection:'row', gap:6, width:mediumCardWidth, borderWidth:0.1, justifyContent:'center', alignItems:'center', height:60, borderRadius:12}}>
                    <MaterialCommunityIcons name="email-outline" size={20} color="gray"/>
                    <Text style={{fontSize:14, fontWeight:'bold',}}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{flexDirection:'row', gap:4, width:mediumCardWidth,  borderWidth:0.1, justifyContent:'center', alignItems:'center', height:60, borderRadius:12}}>
                     <MaterialCommunityIcons name="message-processing-outline" size={20} color="#25d366"/>
                    <Text style={{fontSize:14, fontWeight:'bold',}}>SMS</Text>
                  </TouchableOpacity>
                </View>
            </View>
            <View style={{marginTop:30}}>
              <TouchableOpacity style={{flexDirection:'row', width:'100%', height:60, backgroundColor:'#00A86B', borderRadius:12,justifyContent:'center', alignItems:'center', gap:12}}>
                 <MaterialCommunityIcons name="send-outline" size={20} color="#fff"/>
                    <Text style={{fontSize:18, fontWeight:'bold', color:'#fff'}}>Send Message</Text>
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