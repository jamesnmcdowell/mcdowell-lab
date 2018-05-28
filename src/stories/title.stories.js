import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import Title from '../components/Title';

storiesOf('Title', module)
    .add('with text', () => (
        <Title>Hello, I'm a Title component</Title>
    ));