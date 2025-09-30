import { Tabs } from 'expo-router';
import React from "react";

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="home" options={{ title: 'Home'}} />
            <Tabs.Screen name="savedItems" options={{ title: 'Saved Items' }} />
        </Tabs>
    )
}