import React from 'react';
import {storiesOf} from '@storybook/react';
// import {action} from '@storybook/addon-actions';
import Logo from '../src/components/Logo.jsx';

storiesOf('Logo', module)
    .add('', () => (
        <Logo/>
    ));
