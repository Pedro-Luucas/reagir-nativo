import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import * as Clipboard from 'expo-clipboard';

export default function Janela(props) {
    return(
        <View style={styles.container}>
            <View style={styles.contentBox}>
                
                <Text style={styles.titulo}>A SENHA GERADA É:</Text>
                <TouchableOpacity style={styles.buttonSenha} onPress={() => Clipboard.setStringAsync(props.senha)}>
                    <Text style={styles.textoSenha}>{props.senha}</Text>
                </TouchableOpacity>
                
                <View style={styles.voltarSalvar}>
                    <TouchableOpacity style={styles.buttonVoltar} onPress={props.handleClose}>
                        <Text style={styles.textVoltar}>Voltar</Text>
                    </TouchableOpacity>   
                    <TouchableOpacity style={styles.buttonSalvar} onPress={props.handleSalvar}>
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
        height: '25%',
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
    buttonSenha: {
        backgroundColor: '#000000',
        padding: 10,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textoSenha: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    buttonSalvar: {
        backgroundColor: '#fd7e14',
        padding: 10,
        borderRadius: 10,
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textSalvar: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    buttonVoltar: {
        padding: 10,
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
