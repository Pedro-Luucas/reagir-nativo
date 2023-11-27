import { View, Text, StyleSheet } from 'react-native';


export default function Janela(props) {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>A SENHA GERADA É:</Text>
            <Text style={styles.texto}>{props.senha}</Text>
        </View>
    

);}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(24,24,24,0.5)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    texto: {
        fontSize: 16,
    },
});
