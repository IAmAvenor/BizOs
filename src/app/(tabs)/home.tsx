import { StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Pressable,
  FlatList } from "react-native";
  import { IconButton, Badge, Avatar } from 'react-native-paper';
 import { LineChart } from "react-native-gifted-charts";
 import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
  const { width } = Dimensions.get('window');
  const gridCardWidth = (width - 40 - 12) / 2; 
  const mediumCardWidth = (width - 40 - 24) / 3; 
  const smallCardWidth = (width - 40 - 42) / 4; 
  const chartWidth = width * 0.4;
  const lineData = [
  { value: 20 },
  { value: 35 },
  { value: 28 },
  { value: 45 },
  { value: 40 },
  { value: 55 },
  { value: 60 },
];
export default function HomeScreen() {
  return (
   <SafeAreaView style={{ flex: 1, backgroundColor: "#F8FAFC" }}>
  <ScrollView
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{ padding: 20, paddingBottom: 50 }}
  >
    <View style={styles.headerRow}>
        <View style={{flex:1}}>
          <Text style={styles.subGreeting}>Good morning,</Text>
          <Text style={styles.mainGreeting}>Muhammad 👋</Text>
        </View>
        <View style={styles.avatar}>
            <IconButton icon="bell" size={30}
        onPress={() => router.push('/notifications')}
        accessibilityLabel="show new notifications"></IconButton>
        <Badge visible={true} size={8} style={styles.badge}/>
        </View>
        <View>
          <TouchableOpacity onPress={() => router.push("/profile")}>
          <Avatar.Image size={50} source={require("@/assets/images/mine.png")} style={{backgroundColor:"gray"}} />
           </TouchableOpacity >
        </View>
      </View>
      <View style={{width:"100%", height:140, backgroundColor:"white", borderRadius:12, shadowColor: "#000",
shadowOffset: {
    width: 0,
    height: 4,
},
shadowOpacity: 0.06,
shadowRadius: 12,
elevation: 5, marginTop:10,}}>
        <View style={{flexDirection:"row", justifyContent:"space-between", padding:15,}}>
          <View style={{gap:4,}}>
         <Text style={{fontSize:15, fontWeight:'bold',}}>Total Revenue</Text>
         <Text style={{fontSize:26, fontWeight:'bold'}}>
            $24,560.00
          </Text>
          </View>
          <View>
          <IconButton
          icon="chevron-right"
          size={18}
      />
          </View>
        </View>

        <View
  style={{
    flexDirection: "row",
    justifyContent: "space-between",

    paddingHorizontal: 18,
  }}
>
  <Text style={{ color: "#22C55E" }}>
    ▲12.5%
    <Text style={{ color: "#64748B" }}> vs last week</Text>
  </Text>

  <View style={{ width: 170, position:"relative", right:64, bottom:65 }}>
    <LineChart
      data={lineData}
      width={240}
      height={140}
      curved
      areaChart
      color="#22C55E"
      startFillColor="#22C55E"
      endFillColor="#ffffff"
      startOpacity={0.2}
      endOpacity={0.2}
      thickness={2.5}
      hideDataPoints
      hideAxesAndRules
      hideYAxisText
      hideXAxisText
    />
  </View>
</View>
      </View>
      <View style={{flexDirection:'row', justifyContent:"space-between", marginTop:14, gap:10}}>
        <View style={{width:mediumCardWidth,height:110, backgroundColor:"white" , borderRadius:12, shadowColor: "#000", shadowOffset: { width: 0, height: 4,}, shadowOpacity: 0.06, shadowRadius: 12, elevation: 8, padding:10, gap:8}}>
          <Text style={{fontSize:16, fontWeight:"bold", color:"gray"}}>Orders</Text>
          <Text style={{fontSize:20, fontWeight:"bold"}}>320</Text>
           <Text style={{ color: "#22C55E" }}>
             ▲8.2%
            </Text>
        </View>
        <View style={{width:mediumCardWidth,height:110, backgroundColor:"white" , borderRadius:12, shadowColor: "#000", shadowColor: "#000", shadowOffset: { width: 0, height: 4,}, shadowOpacity: 0.06, shadowRadius: 12, elevation: 8, padding:10, gap:8}}>
           <Text style={{fontSize:16, fontWeight:"bold", color:'gray'}}>Customers</Text>
          <Text style={{fontSize:20, fontWeight:"bold"}}>1,245</Text>
           <Text style={{ color: "#22C55E" }}>
           ▲6.4%
         </Text>
        </View>
        <View style={{width:mediumCardWidth,height:110, backgroundColor:"white", borderRadius:12, shadowColor: "#000", shadowColor: "#000", shadowOffset: { width: 0, height: 4,}, shadowOpacity: 0.06, shadowRadius: 12, elevation: 8, padding:10, gap:8}}>
          <Text style={{fontSize:16, fontWeight:"bold", color:"gray"}}>Profit</Text>
          <Text style={{fontSize:20, fontWeight:"bold"}}>$8,430 </Text>
          <Text style={{ color: "#22C55E" }}>
           ▲10.3%
          </Text>
        </View>
      </View>
        <View style={{width:"100%", height:180, backgroundColor:"#F0F8FF", borderRadius:12, shadowColor: "#000",
              shadowOffset: {
                  width: 0,
                  height: 4,
              },
              shadowOpacity: 0.06,
              shadowRadius: 12,
              elevation: 3, marginTop:20, padding:15,}}>
                <View style={{flexDirection:'row', gap:4}}>
                  <View style={{height:20, width:20, borderRadius:5, backgroundColor:'#DBEAFE',justifyContent:'center', alignItems:"center"}}>
                <MaterialCommunityIcons
                  name="robot-outline"
                  size={20}
                  color="#2563EB"
                />
                  </View>
                  <Text style={{fontSize:16, fontWeight:'bold', color:'#2563EB'}}>AI Insight</Text>
                </View>
                <View style={{marginTop:10}}>
                <Text style={{fontWeight:"500", fontSize:16}}>Sales are up 12.5% this week.</Text>
                <Text style={{fontWeight:"500", fontSize:16}}>Keep it up! Focus on your top</Text>
                <Text style={{fontWeight:"500", fontSize:16}}>selling products.</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between', marginTop:20}}>
                  <TouchableOpacity style={{backgroundColor:'white', borderWidth:1, borderColor:"#2563EB",padding:5, borderRadius:5  }}>
                    <Text style={{fontSize:12, color:'#2563EB', fontWeight:'bold'}}>View more</Text>
                  </TouchableOpacity>
                  <View style={{height:25, width:30, borderRadius:5, backgroundColor:'#DBEAFE', position:'relative', bottom:15, right:40, justifyContent:'center', alignItems:'center'}}>
                    <MaterialCommunityIcons
                      name="creation"
                      size={22}
                      color="#06B6D4"
                    />
                  </View>
                </View>
              </View>

          <View style={{marginTop:15}}>
          <View style={{flexDirection:'row', justifyContent:'space-between',}}>
            <Text style={{fontWeight:"bold"}}>Quick Actions</Text>
            <Pressable>
              <Text style={{color:'#00A86B'}}>See All</Text>
            </Pressable>
          </View>



          <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:15}}>
            <View style={{width:smallCardWidth, height:100, alignItems:"center", gap:10}}>
              <TouchableOpacity onPress={() => router.push("/invoices")} style={{backgroundColor:"#DCFCE7", opacity:0.3, borderRadius:10, height:50, width:50, justifyContent:"center", alignItems:"center", shadowColor: "#000", shadowOffset: {
                 width: 0,
  height: 2,
},
shadowOpacity: 0.05,
shadowRadius: 6,
elevation: 5 ,
              }}>
                <MaterialCommunityIcons
                  name="file-document-outline"
                  size={30}
                  color="#00A86B"
                />
              </TouchableOpacity>
              <Text style={{fontWeight:'900', fontSize:10}}>Invoice</Text>
            </View>
            <View style={{width:smallCardWidth, height:100, alignItems:"center", gap:10}}>
              <TouchableOpacity style={{backgroundColor:"#DCFCE7", opacity:0.3, borderRadius:10, height:50, width:50, justifyContent:"center", alignItems:"center", shadowColor: "#000", shadowOffset: {
  width: 0,
  height: 2,
},
shadowOpacity: 0.05,
shadowRadius: 6,
elevation: 5 ,}}>
                <MaterialCommunityIcons
                  name="gift-outline"
                  size={30}
                  color="#00A86B"
                />
              </TouchableOpacity>
              <Text style={{fontWeight:'900', fontSize:10}}>Add Product</Text>
            </View>
            <View style={{width:smallCardWidth, height:100, alignItems:"center", gap:10}}>
              <View style={{backgroundColor:"#FFFBEB", opacity:0.3, borderRadius:10, height:50, width:50, justifyContent:"center", alignItems:"center",shadowColor: "#000",
shadowOffset: {
  width: 0,
  height: 2,
},
shadowOpacity: 0.05,
shadowRadius: 6,
elevation: 5,}}>
                <MaterialCommunityIcons
                  name="cash-plus"
                  size={30}
                  color="#F59E0B"
                />
              </View>
              <Text style={{fontWeight:'900', fontSize:10}}>Record Expense</Text>
            </View>
            <View style={{width:smallCardWidth, height:100, alignItems:"center", gap:10}}>
              <TouchableOpacity onPress={() => router.push("/message")} style={{backgroundColor:"#DCFCE7", opacity:0.3, borderRadius:10, height:50, width:50, justifyContent:"center", alignItems:"center", shadowColor: "#000",
shadowOffset: {
  width: 0,
  height: 2,
},
shadowOpacity: 0.05,
shadowRadius: 6,
elevation: 5 ,}}>
                <MaterialCommunityIcons
                  name="email-outline"
                  size={30}
                  color="#00A86B"
                />
              </TouchableOpacity>
              <Text style={{fontWeight:'900', fontSize:10}}>Send Message</Text>
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
  
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  subGreeting: {
    fontSize: 20,
    color: '#64748b',
    fontWeight: '300',
  },
  mainGreeting: {
    fontSize: 24,
    fontWeight: '500',
    color: '#0f172a',
    marginTop: 2,
  },
  avatar: {
   position:"relative",
   alignSelf:"flex-start",
  },
  badge:{
     position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#00A86B',    
  },
});