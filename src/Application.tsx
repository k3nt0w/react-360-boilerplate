import React from 'react'
import { AppRegistry, StyleSheet, Text, View, asset } from 'react-360'
// @ts-ignore
import Entity from 'Entity'

export default class Application extends React.Component<{}, { isOpen: boolean }> {
  constructor(props: any) {
    super(props)
    this.state = { isOpen: false }
  }

  render() {
    return (
      // <View style={styles.panel}>
      //   <View style={styles.greetingBox}>
      //     <Text style={styles.greeting}>Welcome to React 360!</Text>
      //   </View>
      //   <View
      //     style={styles.greetingBox}
      //     onInput={e => {
      //       const inputEvent = e.nativeEvent.inputEvent
      //       if (inputEvent.action === 'down') {
      //         this.setState({ isOpen: !this.state.isOpen })
      //       }
      //     }}
      //   >
      //     <Text style={styles.greeting}>Button Test</Text>
      //   </View>
      // </View>

      //@ts-ignore
      <Entity source={{ obj: asset('Alocasia.obj'), mtl: asset('Alocasia.mtl') }} />
    )
  }
}

// export const Application = () => (
//   <View style={styles.panel}>
//     <View style={styles.greetingBox}>
//       <Text style={styles.greeting}>Welcome to React 360!</Text>
//     </View>
//     <View
//       style={styles.greetingBox}
//       onInput={e => {
//         const inputEvent = e.nativeEvent.inputEvent
//         if (inputEvent.action === 'down') {
//           alert('button test')
//         }
//       }}
//     >
//       <Text style={styles.greeting}>Button Test</Text>
//     </View>
//   </View>
// )

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 3000,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2
  },
  greeting: {
    fontSize: 30
  }
})

AppRegistry.registerComponent('Application', () => Application)
