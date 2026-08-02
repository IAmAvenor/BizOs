import { useEffect } from "react";
import { router } from "expo-router";
import {View,Text,Stylesheet,Image,TouchableOpacity,ActivityIndicator} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/(onboarding)");
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={{flex:1}}>
        <LinearGradient colors={[
            "rgba(16,185,129,0.08)",
            "#FFFFFF",
            "rgba(59,130,246,0.08)"
        ]}
        />
        <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
            <Image source={require('@/assets/images/splash-icon.png')} style={{width:180, height:120}}/>
            <Text style={{fontSize:40,fontWeight: 700, color:"#111827",marginTop:20,bottom:20}}>Biz<Text style={{color:"#10B981"}}>Os</Text>
            </Text>
                <Text style={{color:"gray", bottom:"10", fontSize:18 }}>Ai-powered Business Os</Text>
                <Text style={{color:"gray", bottom:"10"}}>Run.Grow.Succeed</Text>

                <ActivityIndicator size="large" color="#10B981"/>
        </View>
    </SafeAreaView>
  );
}