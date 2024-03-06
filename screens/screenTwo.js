import * as React from 'react';
import { View, Text } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "two" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>two Screen</Text>
        </View>
    );
}