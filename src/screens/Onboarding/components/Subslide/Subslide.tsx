import { Button } from '@components';
import { screens } from '@constants';
import type { AuthStackNavigationProps } from '@navigation';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';

import {
  Description,
  SubslideContainer,
  Subtitle,
} from './Subslide.styles';

export interface ISubslideProps {
  index: number;
  subtitle: string;
  description: string;
  last: boolean;
  onScrollToPosition: (index: number) => void;
}

export const Subslide = ({
  index,
  subtitle,
  description,
  last,
  onScrollToPosition,
}: ISubslideProps) => {
  const nav = useNavigation<AuthStackNavigationProps>();

  const onPress = useCallback(() => {
    if (last) {
      nav.navigate(screens.WELCOME);
    }
    onScrollToPosition(index);
  }, [index, last, onScrollToPosition, nav]);

  return (
    <SubslideContainer>
      <Subtitle>{subtitle}</Subtitle>
      <Description>{description}</Description>
      <Button
        onPress={onPress}
        label={last ? 'Lets get started' : 'Next'}
        variant={last ? 'primary' : 'default'}
      />
    </SubslideContainer>
  );
};
