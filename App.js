/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Icon, Avatar } from 'react-native-elements'

// const App: () => React$Node = () => {
  const App = () => {
  return (
    <>
      <StatusBar backgroundColor={'crimson'} />
      <View style={{
        flex: 2,
        backgroundColor: 'crimson',
        padding: 20,
        paddingTop: 30
      }}>
        <Text style={styles.font}>Sawah Besar, Inc</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text style={[styles.font, {
              fontSize: 20,
              fontWeight: 'bold',
              paddingTop: 30,
              paddingBottom: 5
            }]}>Dobleh</Text>
            <Text style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: 'white',
              paddingBottom: 15
            }}>Tukang Kebon</Text>
          </View>
          <View style={{ paddingTop: 35 }}>
            <Avatar
              rounded
              size='medium'
              source={{
                uri:
                  'https://i7.pngguru.com/preview/377/517/316/upin-ipin-animation-animation.jpg',
              }}
            />
          </View>
        </View>
        {/* Menu Atas */}

        <View style={{
          backgroundColor: 'white',
          borderRadius: 10,
          flex: 5,
          paddingVertical: 10,
          justifyContent: "space-around",
          marginBottom: 30
        }}>
          <View style={styles.icon1}>
            <View style={styles.icon3}>
              <Icon
                name='library-books'
                color='teal'
                size={35}
              />
              <Text style={{ fontSize: 11, paddingTop: 5 }}>Reimbursement</Text>
            </View>
            <View style={styles.icon3}>
              <Icon
                name='calendar-times'
                type='font-awesome-5'
                color='blue'
                size={35}
              />
              <Text style={{ fontSize: 11, paddingTop: 5 }}>Time Off</Text>
            </View>
            <View style={styles.icon3}>
              <Icon
                name='edit-location'
                color='orange'
                size={35}
              />
              <Text style={{ fontSize: 11, paddingTop: 5 }}>Live Attendance</Text>
            </View>
            <View style={styles.icon3}>
              <Icon
                name='av-timer'
                color='darkorange'
                size={35}
              />
              <Text style={{ fontSize: 11, paddingTop: 5 }}>Overtime</Text>
            </View>
          </View>
          <View style={styles.icon2}>
            <View style={styles.icon3}>
              <Icon
                name='calendar'
                type='foundation'
                color='dodgerblue'
                size={35}
              />
              <Text style={{ fontSize: 11, paddingTop: 5 }}>Calendar</Text>
            </View>
            <View style={styles.icon3}>
              <Icon
                name='clock'
                type='material-community'
                color='orange'
                size={35}
              />
              <Text style={{ fontSize: 11, paddingTop: 5 }}>Attendance</Text>
            </View>
            <View style={styles.icon3}>
              <Icon
                name='stars'
                color='slateblue'
                size={35}
              />
              <Text style={{ fontSize: 11, paddingTop: 5 }}>Mekari Payday</Text>
            </View>
            <View style={styles.icon3}>
              <Icon
                name='bookmark'
                type='octicon'
                color='seagreen'
                size={33}
              />
              <Text style={{ fontSize: 11, paddingTop: 5 }}>My Payslip</Text>
            </View>
          </View>
        </View>

        {/* Menu Bawah */}

        <View style={{
          flexDirection: "row",
          flex: 2
        }}>

          <View style={styles.menubawah}>
            <View>
              <Text style={{ marginRight: 15, color: 'gray' }}>Rp</Text>
            </View>
            <View>
              <Text style={{ fontSize: 12, color: 'gray' }}>Request</Text>
              <Text style={{ fontWeight: 'bold' }}>Reimbursement</Text>
            </View>
          </View>
          <View style={styles.menubawah}>
            <View>
              <Icon
                name='calendar-blank-outline'
                type='material-community'
                color='gray'
                size={22}
                style={{ marginRight: 15 }}
              />
            </View>
            <View>
              <Text style={{ fontSize: 12, color: 'gray' }}>Request</Text>
              <Text style={{ fontWeight: 'bold' }}>Time Off</Text>
            </View>
          </View>
          <View style={styles.menubawah}>
            <Text>tes</Text>
          </View>

        </View>
      </View>
      <View style={{
        flex: 1,
        backgroundColor: 'white',
        padding: 20
      }}>
        <View style={[styles.familymember, {
          paddingBottom: 10,
          paddingTop: 0
        }]}>
          <View>
            <Text style={{
              fontWeight: "bold"
            }}>Announcement</Text>
          </View>
          <View>
            <Text style={{ color: 'dodgerblue', fontWeight: "bold" }}>View All</Text>
          </View>
        </View>
        <View style={styles.familymember}>
          <View>
            <Text style={{
              fontWeight: "bold"
            }}>New family member</Text>
          </View>
          <View style={{
            flexDirection: "row",
          }}>
            <View>
              <Icon
                name='primitive-dot'
                type='octicon'
                color='blue'
                size={20}
              />
            </View>
            <View>
              <Text style={{ paddingLeft: 10 }}>12 Sep 2019</Text>
            </View>
          </View>
        </View>
        <Text style={styles.announcement}>Pam Beesly</Text>
        <View style={styles.familymember}>
          <View>
            <Text>New family member</Text>
          </View>
          <Text style={{ color: 'gray' }}>11 Sep 2019</Text>
        </View>
        <Text style={styles.announcement}>Pam Beesly</Text>
        <View style={styles.familymember}>
          <View>
            <Text>New family member</Text>
          </View>
          <Text style={{ color: 'gray' }}>10 Sep 2019</Text>
        </View>
        <Text style={styles.announcement}>Pam Beesly</Text>
      </View>
      {/* <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={{
            flex:1,
            backgroundColor:'red'
          }}>
            <Text>Tes</Text>
          </View>
        </ScrollView>
      </SafeAreaView> */}
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  font: {
    color: 'white'
  },
  icon1: {
    flexDirection: "row",
  },
  icon2: {
    flexDirection: "row",
  },
  icon3: {
    width: "25%",
    alignItems: "center",
    justifyContent: 'space-around'
  },
  menubawah: {
    height: '70%',
    backgroundColor: 'white',
    marginRight: 20,
    borderRadius: 10,
    alignItems: 'center',
    padding: 20,
    flexDirection: 'row'
  },
  announcement: {
    color: 'gray',
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
    paddingBottom: 10
  },
  familymember: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10
  }
});

export default App;
