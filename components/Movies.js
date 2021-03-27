import React from 'react'

import styled from 'styled-components/native'
import {Dimensions} from 'react-native'

const Container = styled.View`
    padding:20px 0;

`
const Label = styled.Text`
    color:#fff;
    font-size:16px;
    margin: 0 0 5px 10px;
`
const MovieScroll = styled.ScrollView`
    padding-left:10px;
`

const MovieCard = styled.View`
    padding-right:9px;
`

const MoviePoster = styled.Image`
    width:${(Dimensions.get('window').width * 28)/ 100}px;
    height:150px;

`

const Movies = ({label,itens})=>{
   return (
        <Container>
            <Label>{label}</Label>
            <MovieScroll horizontal>
               {itens.map((movie,item)=>{
                   return (
                    <MovieCard key={String(item)}>
                        <MoviePoster resizeMode='cover' source={movie}/>
                    </MovieCard>
                   )
               })}
            </MovieScroll>
        </Container>
    )
}


export default Movies