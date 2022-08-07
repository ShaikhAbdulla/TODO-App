import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef, pages } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, Alert, ScrollView, Image } from 'react-native';
import Task from './Components/Task';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import Onboarding from 'react-native-onboarding-swiper';

{/* <Onboarding
  pages={[
    {
      backgroundColor: '#fff',
      image: <Image source={require('./assets/page1.png')} />,
      title: 'Welcome ToDo App!!',
      subtitle: 'Where you can save your daily tasks ',
    },
    {
      backgroundColor: '#fff',
      image: <Image source={require('./assets/page2.png')} />,
      title: 'Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    {
      backgroundColor: '#fff',
      image: <Image source={require('./assets/page3.png')} />,
      title: 'Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    
  ]}
/> */}






export default function App() {
  //   const onboardingRef = useRef<Onboarding>(null);

  // <Onboarding
  //     ref={onboardingRef}
  //     pages={pages}
  // />

  // onboardingRef.current.goNext()
  // onboardingRef.current.goToPage(2, true)
  // onboardingRef.current.goToPage(2, false);

  const dn = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const mon = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const day = new Date();
  const d = dn[day.getDay()]
  const date = day.getDate();
  const month = mon[day.getMonth()];

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [header, setHeader] = useState('Lets add a task!!')

  console.log('errrrorrrr', taskItems);

  useEffect(() => {
    async function tempFunction() {

      await getTask();
    }

    tempFunction();


    return () => {

    }
  }, []

  );

  const clearAll = () => {
    Alert.alert(
      "Alert",
      "Are you sure you want to delete the whole list?",
      [
        {
          text: 'Yes',
          onPress:
            () => {
              setTaskItems([]);
              setHeader('Lets add a task!!')


            }
        },
        {
          text: 'No',
          onPress:
            () => {
              setTaskItems(taskItems)
            }
        }
      ]
    )
  }

  const addTask = async () => {
    if (task == "") {
      alert("Please Enter the Task!!")
        ;

    } else {
      Keyboard.dismiss();
      try {
        setTaskItems([...taskItems, task])
        setHeader("Today's task!")

        const output = JSON.stringify(taskItems);

        await AsyncStorage.setItem('itemList', output);
        setTask("");
      } catch (err) {
        console.log(err);
      }
    }

  }
  const getTask = async () => {
    try {
      const list = await AsyncStorage.getItem('itemList');

      const result = JSON.parse(list)


      setTaskItems(result);
      taskItems == "" ? setHeader("Lets add a task!!") : setHeader("Today's task!");


    } catch (err) { }
  };

  // const removeT = async (index) => {
  //   try{
  // AsyncStorage.removeItem('itemTask' , (index)=> {
  // console.log("deleted")
  // // const list=  AsyncStorage.getItem('itemTask');
  // // const result=JSON.parse(list)
  // //     setTaskItems(result);
  //    });
  //   }catch(err){
  //       console.log(err);
  //    }}

  const remove = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
    itemsCopy == '' ? setHeader('Lets add a task!!') :
      console.log('deleted a Task');
  }

  //  const saveTask= async () => {
  //   try{
  // AsyncStorage.setItem("appData", task);
  //   }
  //   catch (error){
  //     console.log(error);
  //   }
  //  };
  //  const getTask=async () => {
  //   try{
  //     const list= await AsyncStorage.getItem('appData');
  //     setTask(list);
  //   }catch(error){}
  //  };
  //  useEffect(() =>{
  //   getTask();
  //  }, []
  //  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.hText}>ToDo App</Text>

      </View>
      <View>
        <View style={styles.del}>
          <Text style={styles.todayT}>{header}</Text>
          <Icon style={styles.delete} name="delete" size={25} color="red" onPress={clearAll} />
        </View>
        <Text>{d} , {date} {month}</Text>
      </View>
      <ScrollView>
        <View style={styles.list}>


          {
            taskItems?.map((item, index) => {

              return <TouchableOpacity key={index} onLongPress={() => remove(index)} >
                <Task text={item} taskItems={taskItems} />
              </TouchableOpacity>

            })
          }

          {/* <Task text={'Task 1'}
        // task={task}
        />
        <Task text={'Task 2'}/>
        <Task text={'Task 3'}/> */}

        </View>
      </ScrollView>
      <View style={styles.empty}></View>
      <View style={styles.addContainer}>
        <View style={styles.add}>
          <TextInput style={styles.input} placeholder="Add new task!!"
            value={task}
            onChangeText={text => {
              console.log(text);
              setTask(text)
            }}

          />
        </View>
        <View style={styles.plus}>
          <TouchableOpacity
            onPress={() => addTask(taskItems)

            }
          >
            <Text style={styles.plusIcon}>➕</Text>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c389d3',

  },
  header: {
    backgroundColor: '#e6c5f1',

    borderRadius: 20,
    marginTop: 25,
    maxWidth: '100%',
    height: 35,


  },
  hText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'

  },
  todayT: {
    fontWeight: 'bold',
    fontSize: 30,
    textDecorationLine: 'underline',
  },
  addContainer: {
    position: 'absolute',
    bottom: 10,
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5,


  },
  headerText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  list: {
    marginLeft: 25,
    // alignItems:'center',

  },
  add: {
    flex: 2,
    marginLeft: 10,
    // justifyContent:'space-around',
    backgroundColor: 'white',
    // width:295,
    maxWidth: '100%',
    height: 40,
    borderRadius: 10,
  },
  input: {
    fontSize: 20,
    padding: 10,

  },
  plus: {
    marginLeft: 5,
    maxWidth: '100%',
    marginRight: 10,


    backgroundColor: '#e6c5f1',
    width: 35,

    borderRadius: 15,
  },
  plusIcon: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
  },
  del: {
    flexDirection: 'row',
  },
  delete: {
    position: 'absolute',
    right: 10,
    top: 7,
  },
  empty: {
    height: 70,
  }
});