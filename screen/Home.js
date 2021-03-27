import React from 'react'
import {Dimensions} from 'react-native'


import {LinearGradient} from 'expo-linear-gradient'
import styled from 'styled-components/native'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Movies from '../components/Movies'
import { StatusBar } from 'expo-status-bar'

const item = [
    require('../assets/logo1.jpeg'),
    require('../assets/logo1.jpeg'),
    require('../assets/logo1.jpeg'),
    require('../assets/logo1.jpeg'),
]

const Container = styled.ScrollView`
    flex:1;
    background-color:#000
`

const Poster = styled.ImageBackground`
    width:100%;
    height:${(Dimensions.get('window').height * 81)/100}px;
`
const Gradient = styled(LinearGradient)`
    height:100%
`

const Home = ()=>{
   return (
       <>
       <StatusBar translucent backgroundColor='rgba(0,0,0,0.9)' style='light'></StatusBar>
       <Container>
        <Poster source={require('../assets/kingkongvsgodzila.jpeg')}>
            <Gradient
                locations={[0,0.2,0.6,0.93]}
                colors={['rgba(0,0,0,0.1)','rgba(0,0,0,0)','rgba(0,0,0,0)','rgba(0,0,0,0.8)']}
                >
            <Header/>
            <Hero />

            </Gradient>
        </Poster>
        <Movies label='Recomendados' itens={item}/>
        <Movies label='Popular' itens={item}/>
        <Movies label='Lançamentos' itens={item}/>
        <Movies label='Dramas' itens={item}/>
       </Container>
       </>
    )
}


export default Home