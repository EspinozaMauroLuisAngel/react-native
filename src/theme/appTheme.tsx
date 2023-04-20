import { StyleSheet } from "react-native";
 
export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: '#00ffff',
    },

    calculadoraContainer: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end'
    },

    resultado: {
        color: 'black',
        fontSize: 60,
        textAlign: 'right',
        marginBottom: 10
    },

    resultadoPequeno: {
        color: '#black',
        fontSize: 30,
        textAlign: 'right',
    },

    fila: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10
    },

    boton: {
        height: 80,
        width: 80,
        backgroundColor: '#2D2D2D',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },

    botonTexto: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: '#7fff00',
        fontWeight: '300'
    }
});