import {useState, useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';

const useInternetConnection = () => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    // Cleanup function to unsubscribe from NetInfo when the component unmounts
    return () => unsubscribe();
  }, []);

  return isConnected;
};

export default useInternetConnection;
