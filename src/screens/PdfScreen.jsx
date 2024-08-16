import {
  ActivityIndicator,
  StyleSheet,
  Text,
  ToastAndroid,
  useWindowDimensions,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Pdf from 'react-native-pdf';
import Dialog from 'react-native-dialog';

import {useNavigation, useRoute} from '@react-navigation/native';
import {Slider} from '@react-native-assets/slider';

import ActionBar from '../components/ActionBar';
import {THEME} from '../constants';
import {FAB} from 'react-native-paper';
import useThemeStore from '../stores/useThemeStore';
import BannerAdComponent from '../components/BannerAdComponent';

const PdfScreen = () => {
  const route = useRoute();
  const {data} = route.params;
  const source = {uri: data.file, cache: true};
  const {height} = useWindowDimensions();

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [error, setError] = useState(null);
  const [number, onChangeNumber] = useState(null);
  const [header, toggleHeader] = useState(true);

  const {theme} = useThemeStore();
  const colors = theme === 'dark' ? THEME.dark : THEME.light;

  const handleCancel = () => {
    setDialogVisible(false);
  };

  const handleJump = () => {
    const pageNumber = parseInt(number);
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setPage(pageNumber);
      setDialogVisible(false);
      setCurrentPage(number);
    } else {
      ToastAndroid.show(
        `Page number is not valid: Pages (1 - ${totalPages})`,
        ToastAndroid.SHORT,
      );
      setDialogVisible(false);
    }
  };

  const customThumb = ({value}) => (
    <View style={[styles.thumbContainer, {backgroundColor: colors.action}]}>
      <Text style={[styles.thumbText]}>{Math.floor(value)}</Text>
    </View>
  );

  const handleScreen = () => {
    toggleHeader(prev => !prev);
  };

  return (
    <>
      {header ? (
        <ActionBar
          title={
            data.name.length > 22 ? data.name.slice(0, 22) + '...' : data.name
          }
          screen="pdf"
          dialogVisible={() => setDialogVisible(true)}
          file={data.file}
        />
      ) : null}
      <View>
        <Dialog.Container visible={dialogVisible}>
          <Dialog.Title>{`Page Number (1 - ${totalPages})`}</Dialog.Title>
          <Dialog.Description>
            Jump directly to the particular page of the current file.
          </Dialog.Description>
          <Dialog.Input
            label=""
            onChangeText={onChangeNumber}
            keyboardType="numeric"
          />
          <Dialog.Button label="Cancel" onPress={handleCancel} />
          <Dialog.Button label="Go to the page" onPress={handleJump} />
        </Dialog.Container>
      </View>

      <View style={styles.container}>
        {loading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" />
          </View>
        )}
        {error ? (
          <Text style={styles.errorText}>Error loading PDF: {error}</Text>
        ) : (
          <>
            {data.type === 'online' ? <BannerAdComponent /> : null}
            <Pdf
              page={page || 1}
              source={source}
              trustAllCerts={false}
              onLoadComplete={numberOfPages => {
                setTotalPages(numberOfPages);
                setCurrentPage(page || 1);
                setLoading(false);
              }}
              onPageChanged={page => setCurrentPage(page)}
              onError={e => {
                console.log(e);
                setError(e.message);
              }}
              style={[styles.pdf, {height}]}
              progressContainerStyle={{backgroundColor: '#000'}}
            />
          </>
        )}
        {totalPages > 0 && (
          <View style={[styles.sliderContainer, {height: height - 20}]}>
            <Slider
              value={currentPage}
              minimumValue={1}
              maximumValue={totalPages}
              step={1}
              vertical={true}
              CustomThumb={customThumb}
              style={[styles.slider, {height: height - 170}]}
              slideOnTap={false}
              minimumTrackTintColor="transparent"
              maximumTrackTintColor="transparent"
            />
          </View>
        )}
      </View>
      <FAB
        icon={header ? 'fullscreen' : 'fullscreen-exit'}
        style={[styles.fab, {backgroundColor: colors.action}]}
        onPress={handleScreen}
        color={colors.actionText}
      />
    </>
  );
};

export default PdfScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
  sliderContainer: {
    position: 'absolute',
    top: 20,
    right: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 40,
  },
  slider: {
    width: '100%',
    marginTop: 10,
  },
  thumbContainer: {
    opacity: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 32,
    borderRadius: 5,
    borderBottomEndRadius: 0,
    borderTopEndRadius: 0,
  },
  thumbText: {
    fontWeight: 'bold',
    color: 'white',
  },
  pdf: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
