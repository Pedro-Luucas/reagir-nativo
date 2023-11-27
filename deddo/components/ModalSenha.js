import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import * as Clipboard from 'expo-clipboard';

export default function Janela(props) {
    return(
        <View style={styles.container}>
            <View style={styles.contentBox}>
                
                <Text style={styles.titulo}>A SENHA GERADA É:</Text>
                <TouchableOpacity onPress={() => Clipboard.setStringAsync(props.senha)}>
                    <Text style={styles.texto} >{props.senha}</Text>
                </TouchableOpacity>
                
                <View style={styles.voltarSalvar}>
                    <TouchableOpacity style={styles.buttonVoltar}>
                        <Text style={styles.textVoltar}>Voltar</Text>
                    </TouchableOpacity>   
                    <TouchableOpacity style={styles.buttonSalvar} >
                        <Text style={styles.textSalvar}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    

);}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(24,24,24,0.3)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    contentBox: {
        backgroundColor: '#fff',
        width: '80%',
        height: '15%',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    voltarSalvar: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        marginTop: 20,
        marginBottom: 10,
    },
    texto: {
        fontSize: 16,
    },
});
