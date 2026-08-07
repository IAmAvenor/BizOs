import { View, Text, StyleSheet, FlatList, TextInput,  SafeAreaView,Image,TouchableOpacity,Dimensions,} from 'react-native';
import { useState } from 'react';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const productsData = [
  { id: '1', name: 'Wireless headphones', categories: 'Electronics', amount:'$59.99', availability: 'In stock',availabilityColor: '#00A86B',units:'120 units', icon: require('../../../assets/images/black_headphone.png'),bgColor: '#EFF6FF' },
  { id: '2', name: 'Smart watch Series 5',categories: 'Electronics', amount:'$59.99', availability: 'Low Stock',availabilityColor: 'orange',units:'15 units',icon: require('../../../assets/images/smart_watch.png'), bgColor: '#EFF6FF' },
  { id: '3', name: 'Power Bank 20,000mAh', categories: 'Accessories', amount:'$29.99', availability: 'In stock',availabilityColor: '#00A86B',units:'85 units',icon: require('../../../assets/images/powerbank_20k.png'),bgColor: '#EFF6FF' },
  { id: '4', name: 'Bluetooth Speaker',categories: 'Electronics', amount:'$45.99', availability: 'Out of Stock',availabilityColor: '#EF4444',icon: require('../../../assets/images/bluetooth.png'), bgColor: '#EFF6FF' },
];
 
const { width } = Dimensions.get('window');
  const gridCardWidth = (width - 40 - 12) / 2; 
  const mediumCardWidth = (width - 40 - 24) / 3; 
  const smallCardWidth = (width - 40 - 42) / 4; 

export default function InventoryScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(productsData);
  const handleSearch = (text) => {
    setSearchQuery(text);

     if (text) {
      const newData = productsData.filter((item) => {
        const itemData = item.name.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
    } else {
      setFilteredData(productsData);
    }
  }
  return (
   <SafeAreaView style={{ flex: 1, backgroundColor: "#F8FAFC" }}>
      <View style={styles.container}>
        <Text style ={styles.headertext}>Inventory</Text>
      <View style={styles.header}>
          <TextInput
        style={styles.searchInput}
        placeholder="Search products"
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
  <Text style={{fontSize:12, fontWeight:'bold', color:'white'}}>All (124)</Text>
</TouchableOpacity>
              <TouchableOpacity style={{shadowColor: "#000",shadowOffset: {},shadowOpacity: 0.05,
shadowRadius: 6,
elevation: 2, backgroundColor:'white',borderRadius:20,justifyContent:'center', alignItems:"center", padding:10, width:mediumCardWidth}}>
  <Text style={{fontSize:12, fontWeight:'bold'}}>Low Stock (8)</Text>
</TouchableOpacity>
              <TouchableOpacity style={{shadowColor: "#000",shadowOffset: {},shadowOpacity: 0.05,
shadowRadius: 6,
elevation: 2, backgroundColor:'white',borderRadius:20,justifyContent:'center', alignItems:"center", padding:10, width:mediumCardWidth}}>
  <Text style={{fontSize:12, fontWeight:'bold'}}>Out of Stock(2)</Text>
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
              <View style={[styles.iconPlaceholder, , { backgroundColor: item.bgColor }]}>
             <Image
              source={item.icon}
              style={{
                width: '100%',
                height: '100%',
                resizeMode:'cover'
              }}
            />
                 </View> 
              <View>
                <Text style={styles.subjectName}>{item.name}</Text>
                <Text style={styles.topicsText}>{item.categories}</Text>
                <Text style={styles.topicsText}>{item.amount}</Text>
              </View>
            </View>

            <View style={styles.rightSection}>
              <Text
              style={[
                styles.availability,
                { color: item.availabilityColor }
              ]}
            >
              {item.availability}
            </Text>
              <Text style={styles.percentageText}>{item.units}</Text>
            </View>
          </View>
          </>
        );
      }}
      />
          <TouchableOpacity style={{backgroundColor:'#00A86B', height:50, width:150, bottom:50, justifyContent:'center',alignItems:'center',borderRadius:12, alignSelf:'flex-end'}}>
            <Text style={{color:'white', fontSize:20, fontWeight:'bold'}}>+ Add Product</Text>
          </TouchableOpacity>
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
    gap: 2,
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

