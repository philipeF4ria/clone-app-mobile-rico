import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Consult from '../pages/Consult';
import Invest from '../pages/Invest';
import Profile from '../pages/Profile';

const Tab = createBottomTabNavigator();

const Routes = () => (
	<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconColor;

					if (route.name === 'Consult') {
						iconColor = focused ? '#ff5300' : '#716b84';
						return <Ionicons name="wallet-outline" size={26} color={iconColor} />
					}
						else if (route.name === 'Invest') {
						iconColor = focused ? '#ff5300' : '#716b84';
						return <MaterialCommunity name="currency-usd-circle-outline" size={26} color={iconColor} />
					} else if (route.name === 'Profile') {
						iconColor = focused ? '#ff5300' : '#716b84';
						return <FontAwesome name="user-o" size={26} color={iconColor} />
					}
				}
			})}

			tabBarOptions={{
				activeTintColor: '#ff5300',
				activeBackgroundColor: '#00001d',
				inactiveBackgroundColor: '#00001d',
				style: {
					height: 54,
				},
				labelStyle: {
					fontSize: 14
				}
			}}
		>
			<Tab.Screen name="Consult" component={Consult} options={{ tabBarLabel: 'Consultar' }}/>
			<Tab.Screen name="Invest" component={Invest} options={{ tabBarLabel: 'Investir' }}/>
			<Tab.Screen name="Profile" component={Profile} options={{ tabBarLabel: 'Perfil' }}/>
		</Tab.Navigator>
);

export default Routes;
