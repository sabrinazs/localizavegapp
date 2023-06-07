import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../pages/Home"
import Restaurantes from "../pages/Restaurantes"
import Produtos from "../pages/Produtos"
import LojasOnline from "../pages/LojasOnline"
import LojasFisicas from "../pages/LojasFisicas"
import Sobre from "../pages/Sobre"
import Contato from "../pages/Contato"
const Stack = createNativeStackNavigator()
export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Restaurantes" component={Restaurantes} />
                <Stack.Screen name="Produtos" component={Produtos} />
                <Stack.Screen name="Lojas Online" component={LojasOnline} />
                <Stack.Screen name="Lojas Fisicas" component={LojasFisicas} />
                <Stack.Screen name="Sobre" component={Sobre} />
                <Stack.Screen name="Contato" component={Contato} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}