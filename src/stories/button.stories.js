import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import Button from '../components/Button';

const stories = storiesOf('Buttons', module);
stories.addDecorator(withKnobs);

stories
  

    .add('with text', () =>
        <Button primary={boolean('Primary', true)} onClick={action('clicked')}> hi Button</Button>)
    .add('with some emoji', () => (
        <Button primary={boolean('Primary', true)} onClick={action('clicked')}>
            <span role="img" aria-label="so cool">
                😀 😎 👍 💯
      </span>
        </Button>
    ));