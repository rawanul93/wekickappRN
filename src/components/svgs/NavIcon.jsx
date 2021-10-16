import React from 'react';

import { ExploreIcon, ExploreIconActive } from './ExploreIcon'
import { CreateIcon, CreateIconActive } from './CreateIcon';
import { ScheduleIcon, ScheduleIconActive} from './ScheduleIcon';
import { AlertIcon, AlertIconActive} from './AlertIcon';




export const NavIcon = ({ name, isActive }) => {

    if(name === 'Explore') {
        return isActive? <ExploreIconActive /> : <ExploreIcon />
    } 
    if (name === 'Create') {
        return isActive? <CreateIconActive /> : <CreateIcon />
    }

    if (name === 'Schedule') {
        return isActive? <ScheduleIconActive /> : <ScheduleIcon />
    }

    if (name === 'Alerts') {
        return isActive? <AlertIconActive /> : <AlertIcon />
    }
};
