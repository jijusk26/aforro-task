import React from 'react';
import { ActivityIndicator, Modal, View } from 'react-native';
import { Colors } from '../constants/colors';

const FullPageLoader = ({ open }: { open: boolean }) => {
  return (
    <Modal visible={open}>
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.background,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ActivityIndicator size={40} color={Colors.primary} />
      </View>
    </Modal>
  );
};

export default FullPageLoader;
