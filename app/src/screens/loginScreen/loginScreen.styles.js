import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  formView: {
    flex: 1,
    width: '70%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  bottomTextInput: {
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  button: {
    width: '40%',
  },
});

export default styles;
