import { Text, View, TextInput, TouchableOpacity, ScrollView, Alert, FlatList} from "react-native"
import {styles} from './styles'

import { Participant } from "../../components/Participant"

export function Home(){
    const participants = ['lele', 'lindaaa', 'beatriz', 'romilda', 'marian', 'joana', 'marcelina', 'joaquina']


    function handleParticipantAdd(){
        if(participants.includes('lele')){
            return Alert.alert('Participante Existe','já existe um participante com esse nome ')
        }
    }

    function handleParticipantRemove(name: string){
        Alert.alert('Remover', `Remover o participante ${name}`, [
            { // primeiro botão com o sim
                text: 'Sim',
                onPress: () => Alert.alert('deletado') // quando clicar em sim, exibirá outro alert com a mensagem deletado
            },
            { // segundo botão
                text: 'Não',
                style: 'cancel'
            }

        ]);
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

        {/* <ScrollView>
            {
                participants.map((partip) => (
                    <Participant key={partip} nomeParticipante={partip} onRemove={handleParticipantRemove}/>
                ))
            }

        </ScrollView> */}

        <FlatList 
            data={participants}
            keyExtractor={item => item}
            renderItem={({item}) => (
                <Participant 
                    key={item}  
                    nomeParticipante={item}
                    onRemove={() => handleParticipantRemove(item)}
                />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
                <Text>
                    nenhum cadastrado
                </Text>
            )}
        />
        </View>
    )
}