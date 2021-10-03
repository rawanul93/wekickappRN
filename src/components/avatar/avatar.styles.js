import styled from 'styled-components/native';
import { Avatar } from 'react-native-paper';

export const UserAvatar = styled(Avatar.Image)`
    padding-left: ${(props) => props.theme.space[5]};
`
