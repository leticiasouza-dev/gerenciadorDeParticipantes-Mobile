import { Text, View, TextInput, TouchableOpacity, ScrollView} from "react-native"
import {styles} from './styles'

import { Participant } from "../../components/Participant"

export function Home(){
    const participants = ['lele', 'lindaaa', 'beatriz', 'romilda', 'marian', 'joana', 'marcelina', 'joaquina']


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

        <ScrollView>
            {
                participants.map((partip) => (
                    <Participant key={partip} nomeParticipante={partip}/>
                ))
            }

            {/* <Participant nomeParticpante='lele linda' onRemove={() => handleParticipantRemove('lele')}/>
            <Participant nomeParticpante="letícia souza" onRemove={() => handleParticipantRemove('lindaaa')}/> */}

        </ScrollView>
        </View>
    )
}