// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import OTPVerificationScreen from './OTPVerificationScreen';
// import SuccessScreen from './SuccessScreen';
// import Toast from 'react-native-toast-message';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="OTPVerification">
//         <Stack.Screen name="OTPVerification" component={OTPVerificationScreen} />
//         <Stack.Screen name="Success" component={SuccessScreen} />
//       </Stack.Navigator>
//       <Toast ref={(ref) => Toast.setRef(ref)} /> {/* Moved outside of the Navigator */}
//     </NavigationContainer>
//   );
// };

// export default App;






import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OTPVerificationScreen from './OTPVerificationScreen';
import SuccessScreen from './SuccessScreen';
import Toast from 'react-native-toast-message';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="">
    <Stack.Screen name="OTPVerification" component={OTPVerificationScreen} />
    <Stack.Screen name="Success" component={SuccessScreen} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
      <Toast />
    </View>
  );
};

export default App;

// import React from 'react';
// import { View } from 'react-native';
// import JioCinema from './JioCinema';  // Ensure correct path

// const App = () => {
//   return (
//     <View style={{ flex: 1 }}>
//       <JioCinema />
//     </View>
//   );
// };

// export default App;

