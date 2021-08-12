import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {logoutUser} from '../../redux/actions/loginScreen.actions';
import {callDummyApi} from '../../redux/actions/homeScreen.actions';
import {View, StyleSheet, FlatList} from 'react-native';
import {Button, Loader, ApiList} from '../../components';

const HomeScreen = props => {
  const {callLogoutUser, dummyApi, data, isLoading} = props;
  // console.log(data.entries);
  useEffect(() => {
    dummyApi();
  }, [dummyApi]);

  return (
    <View style={styles.mainContainer}>
      {/* <Button title="Logout" onPress={callLogoutUser} /> */}
      <FlatList
        data={data.entries}
        renderItem={item => <ApiList item={item} />}
        keyExtractor={(item, index) => index}
      />
      {isLoading && (
        <View style={styles.loaderView}>
          <Loader />
        </View>
      )}
    </View>
  );
};
function mapStateToProps({HomeReducer}) {
  return {
    data: HomeReducer.data,
    isLoading: HomeReducer.isLoading,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    callLogoutUser: bindActionCreators(logoutUser, dispatch),
    dummyApi: bindActionCreators(callDummyApi, dispatch),
  };
}
const styles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
  },
  loaderView: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
