import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import { ActivityIndicator, Alert, Button, FlatList, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, } from 'react-native';

type SectionProps = PropsWithChildren<{title: string;}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? 'white' : 'black',
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? 'light' : 'dark',
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const [count, setCount] = useState(0);

  const isDarkMode = useColorScheme() === 'dark';

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View
          style={{
            backgroundColor: isDarkMode ? 'black' : 'white',
          }}>
          <Section title="000">
            <Button title={String(count)} onPress={() => setCount(pre => pre+1)}></Button>
          </Section>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title='Hello'>
            <Text style={styles.items}>
              Just Read
            </Text>
            <Text style={{color: 'blue'}}>
              Just Read
            </Text>
          </Section>
          <Section title='Hello1'>
            <View>
              <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
              <View style={{width: 100, height: 100, backgroundColor: 'blue'}} />
              <View style={{width: 200, height: 200, backgroundColor: 'steelblue'}} />
            </View>
          </Section>
          <Section title='Hello2'>
            <View style={{height: 300, width: 300, backgroundColor: 'red'}}>
              <View style={{height: '50%', backgroundColor: 'skyblue'}}><Text>Hello</Text></View>
              <View style={{height: '50%', backgroundColor: 'steelblue'}}><Text>Hello</Text></View>
            </View>
          </Section>
          <Section title='Hello3'>
            <Button title='点击' onPress={() => Alert.alert('Hello')} />
            <ActivityIndicator size="large" color='orange' />
          </Section>
          <Section title='List'>
            <FlatList
              data={DATA}
              renderItem={({item}) => <Item title={item.title} />}
              keyExtractor={item => item.id}></FlatList>
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

type ItemProps = { title: string }

function Item({title}: ItemProps) {
  return (
    <View style={{ width: 450 - 48, height: 50, backgroundColor: 'pink'}}>
      <Text>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  items: {
    color: 'red',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
