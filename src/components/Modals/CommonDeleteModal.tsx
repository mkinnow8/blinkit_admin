import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  respFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveFunctions';
import {COLORS} from '../../resources';

interface DeleteModalProps {
  visible: boolean;
  onConfirmDelete: () => void;
  onCancelDelete: () => void;
  title?: string;
  message?: string;
}

export const CommonDeleteModal = ({
  visible,
  onConfirmDelete,
  onCancelDelete,
  title = 'Confirm Delete',
  message = 'Are you sure you want to delete this item?',
}: DeleteModalProps) => {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={onCancelDelete}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.deleteButton]}
              onPress={onConfirmDelete}>
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    padding: responsiveWidth(20),
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: respFontSize(16),
    fontWeight: 'bold',
    color: COLORS.BLACK,
    marginBottom: responsiveHeight(10),
  },
  message: {
    fontSize: respFontSize(12),
    marginBottom: responsiveHeight(20),
    color: COLORS.DARK_GREY,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    padding: responsiveHeight(10),
    marginHorizontal: responsiveWidth(5),
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: COLORS.DARK_GREY,
  },
  deleteButton: {
    backgroundColor: COLORS.RED,
  },
  buttonText: {
    color: COLORS.WHITE,
    fontSize: respFontSize(12),
  },
});
