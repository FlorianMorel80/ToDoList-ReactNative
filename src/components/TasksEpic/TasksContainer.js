import React, { useState } from 'react';
import { View, Text } from 'react-native';

//------------Import components-------------------
import TasksList from './TaksList';

function TasksContainer(props) {
    const [tasks, setTasks] = useState([
        { title: 'Nouvelle tâches', completed: false }]);
    return (
        <View>

            <TasksList tasks={tasks} />
        </View>
    );
}

export default TasksContainer;