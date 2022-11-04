import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { MaterialIcons } from '@expo/vector-icons';
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
                            <MaterialIcons
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
                            <MaterialIcons
                                name="person"
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