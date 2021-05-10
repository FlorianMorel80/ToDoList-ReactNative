import React, { version } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

const TaskTile = ({ title }) => {
    return (
        <View style={styles.taskItem}>
            <Image
                style={styles.icon}
                source={require('../../../assets/iconCheck.png')}
            />
            <Text>
                {title} !!
            </Text>
            <Image
                style={styles.icon}
                source={require('../../../assets/iconBin.png')}
            />
        </View >
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30
    },

    taskItem: {
        flexDirection: 'row'
    }
})



export default TaskTile;