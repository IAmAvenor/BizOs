import { View, Text, StyleSheet, FlatList, TextInput,  SafeAreaView,Image,TouchableOpacity,Dimensions,} from 'react-native';
import { useState } from 'react';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const invoicesData = [
  { id: '1', name: 'INV-00124', categories: 'Sarah Johnson', amount:'$134.97', availability: 'paid',availabilityColor: '#10B981', availabilityBg:'#ECFDF5', units:'Today', icon:'file-document-outline',iconColor: '#10B981',bgColor: '#ECFDF5', },
 
  { id: '2', name: 'INV-00123', categories: 'Michael Brown', amount:'$89.00', availability: 'pending',availabilityColor: '#F59E0B', availabilityBg:'#FFFBEB', units:'Yesterday',icon:'file-document-outline',iconColor: '#F59E0B',bgColor: '#FFFBEB', },
 
  { id: '3', name: 'INV-00122', categories: 'David Wilson', amount:'$250.00', availability: 'Overdue',availabilityColor: '#EF4444', availabilityBg:'#FEF2F2', units:'Aug 6 2026', icon:'file-document-outline',iconColor: '#EF4444',bgColor: '#FEF2F2', },
 
  { id: '4', name: 'INV-00121', categories: 'Emily Davis', amount:'$65.00', availability: 'paid',availabilityColor: '#10B981', availabilityBg:'#ECFDF5', units:'Aug 5 2026',icon:'file-document-outline',iconColor: '#10B981',bgColor: '#ECFDF5', },
 
  { id: '5', name: 'INV-00120', categories: 'James Enderson', amount:'$520.00', availability: 'pending',availabilityColor: '#F59E0B', availabilityBg:'#FFFBEB', units:'Aug 4 2026',icon:'file-document-outline',iconColor: '#F59E0B',bgColor: '#FFFBEB', },
 
];
 
const { width } = Dimensions.get('window');
  const gridCardWidth = (width - 40 - 12) / 2; 
  const mediumCardWidth = (width - 40 - 24) / 3; 
  const smallCardWidth = (width - 40 - 42) / 4; 

export default function InventoryScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(invoicesData);
  const handleSearch = (text) => {
    setSearchQuery(text);

     if (text) {
      const newData = invoicesData.filter((item) => {
        const itemData = item.name.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
    } else {
      setFilteredData(invoicesData);
    }
  }
  return (
   <SafeAreaView style={{ flex: 1, backgroundColor: "#F8FAFC" }}>
      <View style={styles.container}>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginBottom:20}}>
        <Text style ={styles.headertext}>Invoices</Text>
         <TouchableOpacity style={{backgroundColor:'#00A86B', height:40, width:150, justifyContent:'center',alignItems:'center',borderRadius:12,}}>
            <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>+ Create Invoice</Text>
          </TouchableOpacity>
        </View>
      <View style={styles.header}>
          <TextInput
        style={styles.searchInput}
        placeholder="Search invoices..."
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

        <MaterialCommunityIcons name="sort-ascending" size={24} color="gray" />
      </TouchableOpacity>
      </View>
       <View style={{flexDirection:'row', justifyContent:'space-between', gap:4, marginTop:10, marginBottom:20}}>

              <TouchableOpacity style={{shadowColor: "#000",shadowOffset: {},shadowOpacity: 0.05,
shadowRadius: 6,
elevation: 2, backgroundColor:'#00A86B',borderRadius:20,justifyContent:'center', alignItems:"center", padding:10, width:smallCardWidth}}>
  <Text style={{fontSize:12, fontWeight:'bold', color:'white'}}>All</Text>
</TouchableOpacity>
              <TouchableOpacity style={{shadowColor: "#000",shadowOffset: {},shadowOpacity: 0.05,
shadowRadius: 6,
elevation: 2, backgroundColor:'white',borderRadius:20,justifyContent:'center', alignItems:"center", padding:10, width:smallCardWidth}}>
  <Text style={{fontSize:12, fontWeight:'bold'}}>Paid</Text>
</TouchableOpacity>
              <TouchableOpacity style={{shadowColor: "#000",shadowOffset: {},shadowOpacity: 0.05,
shadowRadius: 6,
elevation: 2, backgroundColor:'white',borderRadius:20,justifyContent:'center', alignItems:"center", padding:10, width:smallCardWidth}}>
  <Text style={{fontSize:12, fontWeight:'bold'}}>Pending</Text>
</TouchableOpacity>
              <TouchableOpacity style={{shadowColor: "#000",shadowOffset: {},shadowOpacity: 0.05,
shadowRadius: 6,
elevation: 2, backgroundColor:'white',borderRadius:20,justifyContent:'center', alignItems:"center", padding:10, width:smallCardWidth}}>
  <Text style={{fontSize:12, fontWeight:'bold'}}>Overdue</Text>
</TouchableOpacity>
        </View>
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20, gap:4 }}
        renderItem={({ item }) => {
           return(
            <>
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
                <Text style={styles.subjectName}>{item.name}</Text>
                <Text style={styles.topicsText}>{item.categories}</Text>
                <Text style={{fontWeight:'bold'}}>{item.amount}</Text>
              </View>
            </View>

            <View style={styles.rightSection}>
              <Text
              style={[
                styles.availability,
                { color: item.availabilityColor },
                {backgroundColor:item.availabilityBg},
              ]}
            >
              {item.availability}
            </Text>
            <TouchableOpacity>
              <MaterialCommunityIcons name="chevron-right" size={20} color="gray" />
            </TouchableOpacity>
              <Text style={styles.percentageText}>{item.units}</Text>
            </View>
          </View>
          </>
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
    gap: 20,
    
  },
  iconPlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 2,
    backgroundColor: '#F0F8FF',
    justifyContent:"center",
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
    gap: 4,
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
  availability: {
    fontSize: 12,
    
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

