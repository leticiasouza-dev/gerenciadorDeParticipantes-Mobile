import { View, Text, TouchableOpacity } from "react-native";
import { styles } from './style'

interface PropsParticipant{
    nomeParticpante: string,
    onRemove: () => void;
}

export function Participant({nomeParticpante, onRemove}:PropsParticipant){
    return(
        <View style={styles.container}>
            <Text style={styles.name}>{nomeParticpante}</Text>

            <TouchableOpacity style={styles.button} onPress={onRemove}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
        </View>
    )
}