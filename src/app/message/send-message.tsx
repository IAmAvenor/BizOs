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

const customersData = [
  { id: '1', name: 'muhammad suleiman', email: 'muhammad@gmail.com', number:'08011223344', Icon:'message-text-outline', IconBg:"#DCFCE7", IconColor: "#16A34A", icon: require('../../../assets/images/mine.png'),bgColor: '#EFF6FF' },
  { id: '2', name: 'Sarah johnson', email: 'sarah@gmail.com', number:'08011223344',Icon:'message-text-outline', IconBg:"#DCFCE7", IconColor: "#16A34A", icon: require('../../../assets/images/sarah.png'),bgColor: '#EFF6FF' },
  { id: '3', name: 'Micheal Brown', email: 'micheal@gmail.com', number:'08011223344', Icon:'message-text-outline', IconBg:"#DCFCE7", IconColor: "#16A34A", icon: require('../../../assets/images/No-2.png'), bgColor: '#EFF6FF' },
  { id: '4', name: 'David Wilson', email: 'david@gmail.com',  number:'08011223344', Icon:'message-text-outline', IconBg:"#DCFCE7", IconColor: "#16A34A",icon: require('../../../assets/images/No-3.png'), bgColor: '#EFF6FF' },
  { id: '5', name: 'Emily Davis', email: 'emily@gmail.com',  number:'08011223344', Icon:'message-text-outline', IconBg:"#DCFCE7", IconColor: "#16A34A",icon: require('../../../assets/images/No-4.png'),bgColor: '#EFF6FF' },
  { id: '6', name: 'James Anderson', email: 'james@gmail.com', number:'08011223344',Icon:'message-text-outline', IconBg:"#DCFCE7", IconColor: "#16A34A", icon: require('../../../assets/images/No-5.png'), bgColor: '#EFF6FF' },
];


 const { width } = Dimensions.get('window');
export default function SendmessageScreen() {
    const { customerId } = useLocalSearchParams();

    const selectedCustomer = customersData.find(
  (customer) => customer.id === customerId
);

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
            <View style={{marginTop:20}}>
            <Text>Message</Text>
            </View>
            <View>
                <TextInput style={{borderWidth:1, borderRadius:12, maxWidth:'100%', maxHeight:'auto', flexDirection:'column'}} maxLength={500}>
              <Text>Hi, user</Text>
              <Text>your recent order is ready for pickup</Text>
              <Text>Thanks!</Text>

                </TextInput>
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