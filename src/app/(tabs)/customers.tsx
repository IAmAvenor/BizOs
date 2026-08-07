import { View, Text, StyleSheet, FlatList, TextInput,  SafeAreaView,Image,TouchableOpacity,Dimensions,} from 'react-native';
import { useState } from 'react';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const customersData = [
  { id: '1', name: 'Sarah johnson', email: 'sarah@gmail.com', amount:'$1,240', percentage: 'VIP', percentageBg:"#FEF3C7", percentageColor: "#D97706", icon: require('../../../assets/images/sarah.png'),bgColor: '#EFF6FF' },
  { id: '2', name: 'Micheal Brown', email: 'micheal@gmail.com', amount:'$980', percentage: '$',icon: require('../../../assets/images/No-2.png'), bgColor: '#EFF6FF' },
  { id: '3', name: 'David Wilson', email: 'david@gmail.com', amount:'$750', percentage: '$',icon: require('../../../assets/images/No-3.png'), bgColor: '#EFF6FF' },
  { id: '4', name: 'Emily Davis', email: 'emily@gmail.com',amount:'$650', percentage: '$',icon: require('../../../assets/images/No-4.png'),bgColor: '#EFF6FF' },
  { id: '5', name: 'James Anderson', email: 'james@gmail.com', amount:'$620', percentage: '$',icon: require('../../../assets/images/No-5.png'), bgColor: '#EFF6FF' },
];
 
const { width } = Dimensions.get('window');
  const gridCardWidth = (width - 40 - 12) / 2; 
  const mediumCardWidth = (width - 40 - 24) / 3; 
  const smallCardWidth = (width - 40 - 42) / 4; 

export default function CustomersScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(customersData);
  const handleSearch = (text) => {
    setSearchQuery(text);

     if (text) {
      const newData = customersData.filter((item) => {
        const itemData = item.name.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
    } else {
      setFilteredData(customersData);
    }
  }
  return (
   <SafeAreaView style={{ flex: 1, backgroundColor: "#F8FAFC" }}>
      <View style={styles.container}>
        <Text style ={styles.headertext}>Customers</Text>
      <View style={styles.header}>
          <TextInput
        style={styles.searchInput}
        placeholder="Search customers"
        placeholderTextColor="#9CA3AF"
        value={searchQuery}
        onChangeText={handleSearch}
        clearButtonMode="while-editing" // iOS only clear button
      />
      <TouchableOpacity style={{height:40, width:'15%',backgroundColor:'white',     shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4, }, 
   
    shadowOpacity: 0.06, 

    shadowRadius: 8, 

    elevation: 5, justifyContent:'center',alignItems:"center", borderRadius:10}}>

        <MaterialCommunityIcons name="filter" size={24} color="gray" />
      </TouchableOpacity>
      </View>
       <View style={{flexDirection:'row', justifyContent:'space-between', gap:4, marginTop:10, marginBottom:20}}>

              <TouchableOpacity style={{shadowColor: "#000",shadowOffset: {},shadowOpacity: 0.05,
shadowRadius: 6,
elevation: 2, backgroundColor:'#00A86B',borderRadius:20,justifyContent:'center', alignItems:"center", padding:10, width:mediumCardWidth}}>
  <Text style={{fontSize:12, fontWeight:'bold', color:'white'}}>All(1,245)</Text>
</TouchableOpacity>
              <TouchableOpacity style={{shadowColor: "#000",shadowOffset: {},shadowOpacity: 0.05,
shadowRadius: 6,
elevation: 2, backgroundColor:'white',borderRadius:20,justifyContent:'center', alignItems:"center", padding:10, width:mediumCardWidth}}>
  <Text style={{fontSize:12, fontWeight:'bold'}}>New</Text>
</TouchableOpacity>
              <TouchableOpacity style={{shadowColor: "#000",shadowOffset: {},shadowOpacity: 0.05,
shadowRadius: 6,
elevation: 2, backgroundColor:'white',borderRadius:20,justifyContent:'center', alignItems:"center", padding:10, width:mediumCardWidth}}>
  <Text style={{fontSize:12, fontWeight:'bold'}}>Vip</Text>
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
              <View style={[styles.iconPlaceholder, , { backgroundColor: item.bgColor }]}>
             <Image
              source={item.icon}
              style={{
                width: 45,
                height: 45,
                borderRadius: 22.5,
              }}
            />
                 </View> 
              <View>
                <Text style={styles.subjectName}>{item.name}</Text>
                <Text style={styles.topicsText}>{item.email}</Text>
                <Text style={styles.topicsText}>Total Spent:{item.amount}</Text>
              </View>
            </View>

            <View style={styles.rightSection}>
              <Text style={[styles.percentageText,
                {color: item.percentageColor},
                {backgroundColor:item.percentageBg}
              ]}>{item.percentage}</Text>
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
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#F0F8FF',
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

