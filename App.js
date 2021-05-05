import { StatusBar } from 'expo-status-bar';
import React from 'react';
// Platform sert à pouvoir faire un choix de la plateforme que l'on va selectionner pour effectuer telle action ou modification 
import { StyleSheet, SafeAreaView, Platform, View } from 'react-native';

//------------Import components-------------------
import Header from './src/components/_Shared/Header';
//------------------------------------------------

export default function App() {
  return (
    // SafeAreaView permet d'éviter que nos éléments aillents trop haut sur le mobile, fonctionne que pour IOS
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // Ici je dis, sur la platform android tu vas rajouter un padding top de 25
    // Le 25 est déjà appliqué de base donc je mets en commentaire 

    // paddingTop: Platform.OS === 'android' ? 25 : 0,
    paddingLeft: 20,
    paddingRight: 20
  },
});
