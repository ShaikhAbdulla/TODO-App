import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,ScrollView } from 'react-native';

import { setStatusBarBackgroundColor } from 'expo-status-bar';
// import { remove } from '../App';


// import CheckBox from '@react-native-community/checkbox';

export default function Task(props) {

    
    const dn = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const mon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug","Sep","Oct","Nov","Dec"]
        const day = new Date();
        const d = dn[day.getDay()]
        const date = day.getDate();
        const month = mon[day.getMonth()];
        const time=day.getHours();
        const min=day.getMinutes();
        const sec=day.getSeconds();
        // const yr=day.getYear()


   
 
//     const get=JSON.parse(localStorage.getItem("todo"))
//     console.log(get);

//     useEffect(() =>{
//  })

// const [del, setDel] = useState(false)

//     const deleteTask=() =>{
//         AsyncStorage.removeItem('appData')
//         setTask('');
//         setDel(true)
//     }

    
  


    // const [checked, setChecked] = useState(false);
    // const [checked1, setChecked1] = useState(false);
    // const [checked2, setChecked2] = useState(false);
    // const [isSelected, setSelection] = useState(false);
    // console.log(task);
   
    const[thumb,setThumb]=useState('👎');


    const done =() => {
        setThumb("👍")
    }
    
    return (
    
    
      
        <View style={styles.container}>
            <ScrollView>
        {/* { setThumb("yes")
    } */}
      
        
           
        {/* //     <CheckBox
        //         value={isSelected}
        //         onValueChange={setSelection}
        //         style={styles.checkbox}
        //     /> */}
            <View style={styles.taskContainer}>
            {/* <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
               setChecked(!checked);
            }}
            color={'green'}
            uncheckColor={'red'}
         /> */}
         <TouchableOpacity style={styles.square} onPress={done}><Text style={styles.done}>{thumb}</Text></TouchableOpacity>
                <Text style={styles.task}>{props.text}</Text>
                <TouchableOpacity style={styles.binCon} 
                // onPress={remove}
                >
                    {/* <Text style={styles.bin}>🗑️</Text> */}
                </TouchableOpacity>

                <Text style={styles.timing}>{d},{time}:{min}:{sec},{date} {month}</Text>
                
                
                {/* <View><TouchableOpacity style={styles.del} onPress={deleteTask}><Text>Del</Text></TouchableOpacity></View>
                 */}

            </View>
            
            {/* <View style={styles.taskContainer}> 
            <Checkbox
            status={checked1 ? 'checked' : 'unchecked'}
            onPress={() => {
               setChecked1(!checked1);
            }}
            color={'green'}
            uncheckColor={'red'}
         />
                <Text style={styles.task}>This is a Task 1</Text>

                

            </View>
            <View style={styles.taskContainer}>
            <Checkbox
            status={checked2 ? 'checked' : 'unchecked'}
            onPress={() => {
               setChecked2(!checked2);
            }}
            color={'green'}
            uncheckColor={'red'}
         />
                <Text style={styles.task}>This is a Task 2</Text>

                

            </View> */}
            </ScrollView>
        </View>




    )




}
const styles = StyleSheet.create({

    container: {
        flexDirection: 'column',
      


    },
    taskContainer: {
       
        width:'90%',
        flexDirection: 'row',

        backgroundColor: '#eed6f5',
        borderRadius: 20,
        marginTop:20,
        padding:10,





    },
    task: {
        fontSize: 20,
        

    },
    checkbox: {
        alignSelf: "center",
    },
    del:{
        flexDirection:'row',
    },
    square:{

    
    },
    done:{
        height:50,
        width:30,
    },
    timing:{
        position: 'absolute',
    bottom: 10,
    right:20,
    },
    binCon:{
        
        position:'absolute',
        right:20,
    }






})