import { Tabs } from "expo-router";
import React from "react";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Home', headerLeft: () => <></> }} />
      <Tabs.Screen name="about" options={{ title: 'About' }} />
      <Tabs.Screen name="+not-found" />
    </Tabs>
  );
}
