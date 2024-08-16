import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ToastAndroid,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import RNFS from 'react-native-fs';
import {ProgressBar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import useInternetConnection from '../hooks/useInternetConnection';
import {BOOK} from '../constants';

const Chapter = ({data, index, colors, loc, showAd, isAdLoaded}) => {
  const isConnected = useInternetConnection();
  const navigation = useNavigation();

  const {protocol, domain, user, project, access, branch} = BOOK;
  const fileSource = `${protocol}://${domain}/${user}/${project}/${access}/${branch}/${loc}/${data.file}`;

  const filePath = `${RNFS.DocumentDirectoryPath}/${data.file}`;
  const fileUrl = fileSource;
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isFileDownloaded, setIsFileDownloaded] = useState(false);

  useEffect(() => {
    checkFileExists();
  }, []);

  const checkFileExists = async () => {
    try {
      const fileExists = await RNFS.exists(filePath);
      setIsFileDownloaded(fileExists);
    } catch (error) {
      console.error(error);
    }
  };

  const downloadFile = async () => {
    setIsDownloading(true);
    try {
      const {promise} = RNFS.downloadFile({
        fromUrl: fileUrl,
        toFile: filePath,
        progress: data => {
          const progress = (data.bytesWritten / data.contentLength) * 100;
          setDownloadProgress(progress.toFixed(0));
        },
        progressDivider: 1,
      });
      await promise;
      setIsDownloading(false);
      setIsFileDownloaded(true);
      setDownloadProgress(0);
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to download the file.');
      setIsDownloading(false);
    }
  };

  const handlePress = async () => {
    if (isFileDownloaded) {
      if (isAdLoaded) {
        showAd();
      }
      navigation.navigate('Pdf', {
        data: {file: filePath, name: data.name, type: 'offline'},
      });
    } else {
      if (!isConnected) {
        ToastAndroid.show(
          'Please connect to Internet to Download',
          ToastAndroid.SHORT,
        );
      } else {
        downloadFile();
      }
    }
  };

  const handleOnline = async () => {
    if (!isConnected) {
      ToastAndroid.show(
        'Please connect to Internet to Download',
        ToastAndroid.SHORT,
      );
    } else {
      if (isAdLoaded) {
        showAd();
      }
      navigation.navigate('Pdf', {
        data: {file: fileUrl, name: data.name, type: 'online'},
      });
    }
  };

  const handleDelete = () => {
    Alert.alert(`Delete "${data.name}"`, `Are you sure you want to delete?`, [
      {
        text: 'No',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: async () => {
          await deleteFile();
          ToastAndroid.show(`${data.name} Deleted`, ToastAndroid.SHORT);
        },
      },
    ]);
  };

  const deleteFile = async () => {
    try {
      await RNFS.unlink(filePath);
      setIsFileDownloaded(false);
    } catch (error) {
      console.error('Failed to delete file:', error);
    }
  };

  return (
    <View
      style={[
        styles.item,
        {
          backgroundColor: colors.card,
          borderColor: colors.cardBorder,
        },
      ]}>
      <View style={styles.header}>
        <Text style={[styles.unit, {color: colors.text}]}>
          {index === 0 ? 'Preface' : `Unit ${index}`}
        </Text>
        <Text style={[styles.title, {color: colors.text}]}>{data.name}</Text>
        {isFileDownloaded && (
          <Ionicons
            name="trash"
            color={colors.trash}
            size={24}
            onPress={handleDelete}
          />
        )}
      </View>
      <View style={styles.action}>
        {isFileDownloaded ? (
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.download}
            onPress={handlePress}>
            <Text style={[styles.btnText, {color: colors.btn}]}>
              Read Offline
            </Text>
          </TouchableOpacity>
        ) : (
          !isDownloading && (
            <View style={styles.first}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.download}
                onPress={handlePress}>
                <Text style={[styles.btnText, {color: colors.btn}]}>
                  Download
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.online}
                onPress={handleOnline}>
                <Text style={[styles.btnText, {color: colors.btn}]}>
                  Online
                </Text>
              </TouchableOpacity>
            </View>
          )
        )}
        {isDownloading && (
          <View>
            <View style={styles.progressHeader}>
              <Text style={[styles.progressText, {color: colors.text}]}>
                {Math.round(downloadProgress)}% / 100%
              </Text>
              <Text style={[styles.progressText, {color: colors.text}]}>
                Downloading
              </Text>
            </View>
            <ProgressBar
              style={{backgroundColor: colors.progress}}
              progress={downloadProgress / 50}
              color="limegreen"
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default Chapter;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'column',
    padding: 15,
    gap: 15,
    borderRadius: 5,
    marginHorizontal: 10,
    marginBottom: 10,
    borderWidth: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  unit: {
    fontSize: 16,
  },
  title: {
    flex: 1,
    fontSize: 16,
  },
  delete: {},
  action: {},
  first: {
    flexDirection: 'row',
    gap: 15,
  },
  first: {
    flexDirection: 'row',
    gap: 15,
  },
  download: {
    backgroundColor: 'limegreen',
    padding: 5,
    flex: 2,
    borderRadius: 5,
  },
  online: {
    backgroundColor: 'lightgray',
    padding: 5,
    flex: 1,
    borderRadius: 5,
  },
  btnText: {
    fontSize: 16,
    textAlign: 'center',
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  progressText: {
    fontSize: 16,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
