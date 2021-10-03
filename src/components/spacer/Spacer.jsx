import React from 'react'
import styled from 'styled-components/native';
import { View } from 'react-native';

const Top1 = styled.View`
    margin-top: ${(props) => props.theme.space[1]};
`

const Top2 = styled.View`
    margin-top: ${(props) => props.theme.space[2]};
`

const Top3 = styled.View`
    margin-top: ${(props) => props.theme.space[3]};
`

const Top4 = styled.View`
    margin-top: ${(props) => props.theme.space[4]};
`

const Top5 = styled.View`
    margin-top: ${(props) => props.theme.space[5]};
`

////////////////////////////


const Bottom1 = styled.View`
    margin-bottom: ${(props) => props.theme.space[1]};
`

const Bottom2 = styled.View`
    margin-bottom: ${(props) => props.theme.space[2]};
`

const Bottom3 = styled.View`
    margin-bottom: ${(props) => props.theme.space[3]};
`

const Bottom4 = styled.View`
    margin-bottom: ${(props) => props.theme.space[4]};
`

const Bottom5 = styled.View`
    margin-bottom: ${(props) => props.theme.space[5]};
`

////////////////////////////

const Left1 = styled.View`
    margin-left: ${(props) => props.theme.space[1]};
`

const Left2 = styled.View`
    margin-left: ${(props) => props.theme.space[2]};
`

const Left3 = styled.View`
    margin-left: ${(props) => props.theme.space[3]};
`

const Left4 = styled.View`
    margin-left: ${(props) => props.theme.space[4]};
`

const Left5 = styled.View`
    margin-left: ${(props) => props.theme.space[5]};
`

////////////////////////////

const Right1 = styled.View`
    margin-right: ${(props) => props.theme.space[1]};
`

const Right2 = styled.View`
    margin-right: ${(props) => props.theme.space[2]};
`

const Right3 = styled.View`
    margin-right: ${(props) => props.theme.space[3]};
`

const Right4 = styled.View`
    margin-right: ${(props) => props.theme.space[4]};
`

const Right5 = styled.View`
    margin-right: ${(props) => props.theme.space[5]};
`


export const Spacer = ({ variant }) => {

    if(variant === 'top1') return <Top1/>
    if(variant === 'top2') return <Top2/>
    if(variant === 'top3') return <Top3/>
    if(variant === 'top4') return <Top4/>
    if(variant === 'top5') return <Top5/>

    if(variant === 'bottom1') return <Bottom1/>
    if(variant === 'bottom2') return <Bottom2/>
    if(variant === 'bottom3') return <Bottom3/>
    if(variant === 'bottom4') return <Bottom4/>
    if(variant === 'bottom5') return <Bottom5/>

    if(variant === 'left1') return <Left1/>
    if(variant === 'left2') return <Left2/>
    if(variant === 'left3') return <Left3/>
    if(variant === 'left4') return <Left4/>
    if(variant === 'left5') return <Left5/>

    if(variant === 'right1') return <Right1/>
    if(variant === 'right2') return <Right2/>
    if(variant === 'right3') return <Right3/>
    if(variant === 'right4') return <Right4/>
    if(variant === 'right5') return <Right5/>

    else {return <Top1/>}

}
