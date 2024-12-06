import { Text, View, TextInput, TouchableOpacity} from "react-native"
import {styles} from './styles'

import { Participant } from "../../components/Participant"

export function Home(){

    function handleParticipantAdd(){
        alert('você clicou')
    }

    function handleParticipantRemove(name: string){
        alert( `você removeu + ${name}`)
    }

    return(
        <View style={styles.container}>
            <Text style={styles.eventName}>Nome do evento</Text>
            <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>

            <View style={styles.form}>
                <TextInput 
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor='#6b6b6b'
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            <Participant nomeParticpante='lele linda' onRemove={() => handleParticipantRemove('lele')}/>
            <Participant nomeParticpante="letícia souza" onRemove={() => handleParticipantRemove('lindaaa')}/>
        </View>
    )
}