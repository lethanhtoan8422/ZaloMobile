import { StyleSheet } from 'react-native';
import * as encoding from 'text-encoding';
import Router from './src/routes';

export default function App() {
   return Router();
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },
});
