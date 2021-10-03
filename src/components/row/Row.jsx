import React from 'react'
import styled from 'styled-components/native';


const RowStart = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    /* margin-bottom: ${(props) => props.theme.space[4]}; */
`

const RowCentered = styled.View`
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: ${(props) => props.theme.space[4]};
`


const RowEnd = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    /* margin-bottom: ${(props) => props.theme.space[4]}; */

`

const RowSplit = styled.View`
    flex-direction: row;
    justify-content: space-between;   
    /* margin-bottom: ${(props) => props.theme.space[4]}; */

`

export const Row = ({ variant, children }) => {
    if(variant === 'split') {return <RowSplit>{children}</RowSplit>}
    else if(variant === 'centered') {return <RowCentered>{children}</RowCentered>}
    else if(variant === 'end') {return <RowEnd>{children}</RowEnd>}
    else {return <RowStart>{children}</RowStart>}}
