import { Image } from "react-native-paper/lib/typescript/components/Avatar/Avatar";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native";

import BottomTabNavigator from "../navigation/TabNavigator";

export default class AlarmesScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          fontsLoaded: false,
          light_theme: true,
          posts: this.props.post
        };
      }
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <View style={styles.appTitle}>
                    <View style={styles.appTitleTextContainer}>
                        <Text style={styles.appTitleText}>Alarmes</Text>
                    </View>
                </View>
            </View>
        );
    }
}