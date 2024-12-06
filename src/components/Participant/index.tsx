import { View, Text, TouchableOpacity } from "react-native";
import { styles } from './style'

interface PropsParticipant{
    nomeParticipante: string,
    onRemove?: () => void;
}

export function Participant({nomeParticipante, onRemove}:PropsParticipant){
    return(
        <View style={styles.container}>
            <Text style={styles.name}>{nomeParticipante}</Text>

            <TouchableOpacity style={styles.button} onPress={onRemove}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
        </View>
    )
}