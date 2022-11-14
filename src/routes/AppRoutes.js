import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { Grafic } from '../pages/Grafic';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';


const Nav = createBottomTabNavigator();
const Stac = createStackNavigator();

function AuthRoutes() {
    return (
        <>
            <Nav.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Nav.Screen name='home' component={Home}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons
                                name="home"
                                color={color}
                                size={size}
                            />
                        )
                    }}
                />
                <Nav.Screen name='profile' component={Profile}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons
                                name="person"
                                color={color}
                                size={size}
                            />
                        )
                    }}
                />
                <Nav.Screen name='grafic' component={Grafic}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons
                                name="stats-chart"
                                color={color}
                                size={size}
                            />
                        )
                    }}
                />
            </Nav.Navigator>

            {/* <Stac.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stac.Screen name='home' component={Home}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons
                                name="home"
                                color={color}
                                size={size}
                            />
                        )
                    }}
                />
                <Stac.Screen name='profile' component={Profile}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons
                                name="person"
                                color={color}
                                size={size}
                            />
                        )
                    }}
                />
            </Stac.Navigator> */}
        </>

    )
}

export default AuthRoutes;