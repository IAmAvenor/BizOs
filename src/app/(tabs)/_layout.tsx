import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="home" />
      <Tabs.Screen name="ai" />
      <Tabs.Screen name="analytics" />
      <Tabs.Screen name="customers" />
      <Tabs.Screen name="more" />
    </Tabs>
  );
}