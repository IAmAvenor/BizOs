import { View, Text, StyleSheet, FlatList, TextInput,  SafeAreaView,Image,TouchableOpacity,Dimensions,} from 'react-native';
import { useState } from 'react';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const customersData = [
  { id: '1', info: 'Payment received', about: 'Invoice #INV-2026-125 has been\npaid by Sarah Johnson', time: '2m ago', icon:'check-circle-outline',iconColor: '#16A34A',bgColor: '#DCFCE7', },
  { id: '2', info: 'Low stock alert', about: 'Smart series watch is running\nlow on stock (15 left)', time: '1h ago',icon:'alert-outline',  iconColor: '#D97706',bgColor: '#FEF3C7',},
  { id: '3', info: 'New customer', about: 'Micheal Brown has registered\nas a new customer ', time: '3h ago',icon: 'account-plus-outline', iconColor: '#9333EA', bgColor: '#F3E8FF', },
  { id: '4', info: 'Monthly report ready', about: 'Your business report for may\nis ready to view', time: '5h ago',icon:'file-chart-outline',iconColor: '#2563EB',bgColor: '#DBEAFE', },
  { id: '5', info: 'System update', about: 'We have updated our terms and\nprivacy policy',time: '1d ago',icon:'update',  iconColor: '#2563EB',
  bgColor: '#DBEAFE',},
];

const { width } = Dimensions.get('window');
  const gridCardWidth = (width - 40 - 12) / 2; 
  const mediumCardWidth = (width - 40 - 24) / 3; 
  const smallCardWidth = (width - 40 - 42) / 4; 

export default function NotificationScreen() {
    const [filteredData, setFilteredData] = useState(customersData);

  return (
   <SafeAreaView style={{ flex: 1, backgroundColor: "#F8FAFC" }}>
      <View style={styles.container}>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Text style ={styles.headertext}>Notifications</Text>
        <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}}>
          <Text style={{color:'#00A86B', fontSize:15}}>Mark all as read</Text>
        </TouchableOpacity>
        </View>
      <FlatList
       data={filteredData}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20, gap:4 }}
        renderItem={({ item }) => {
           return(

          <View style={styles.card}>
            <View style={styles.leftSection}>
             <View
              style={[
                styles.iconPlaceholder,
                {
                  backgroundColor: item.bgColor,
                },
              ]}
            >
              <MaterialCommunityIcons
                name={item.icon}
                size={24}
                color={item.iconColor}
              />
            </View>
              <View>
                <Text style={styles.subjectName}>{item.info}</Text>
                <Text style={styles.topicsText}>{item.about}</Text>
              </View>
            </View>

            <View style={styles.rightSection}>
              <Text style={[styles.percentageText]}>{item.time}</Text>
            </View>
          </View>
        );
      }}
      />
    </View>
       </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    paddingHorizontal: 16,
    paddingTop:60
  },
  header:{
    flexDirection:'row',
    alignItems:'flex-start',
    justifyContent:'space-between', 
    gap:6
  },
  headertext:{
    fontSize:28,
    fontWeight:'bold',
    paddingBottom:16
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
     shadowColor: "#000",shadowOffset: 
     {},shadowOpacity: 0.05,
shadowRadius: 6,
elevation: 5 ,
height:120
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F0F8FF',
    justifyContent:'center',
    alignItems:'center',
  },
  subjectName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  topicsText: {
    fontSize: 12,
    color: '#7A7A7A',
    marginTop: 2,
  },
  rightSection: {
    alignItems: 'flex-end',
    gap: 12,
  },
  progressBarBg: {
    width: 60,
    height: 6,
    backgroundColor: '#EBEBEB',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#3B82F6',
    borderRadius: 3,
  },
  percentageText: {
    fontSize: 12,
    color: '#7A7A7A',
  },
  searchInput: {
    height: 40,
    width:'80%',
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor:'#FFFFFF',
    justifyContent:'flex-start',
    alignItems:'flex-start',
    color:'#1F2937',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 }, 
   
    shadowOpacity: 0.06, 

    shadowRadius: 8, 

    elevation: 5, 
    padding:12,
  },
});

