import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Card, Text, Button} from 'react-native-paper'

export default function Nome() {

    const nome '????'

    function esconder() {
        nome = '????'
        console.log(nome)
    }

    function revelar() {
        nome = '????'
        console.log(nome)
    
  return (
    <View> 
        <Card>
            <Card.Content>
                
                <Card.Title title="Componente Nome">
                  <Text>Nome `{nome}</Text>
                
                </Card.Title>
            </                       Card.Content>
        </Card>
    </View>
  )
}

const styles = StyleSheet.create({})