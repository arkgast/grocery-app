const React = require('react-native')
const {StyleSheet} = React
const constants = {
  actionColor: '#4caf50'
};

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1,
  },
  listview: {
    flex: 1,
  },
  li: {
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
  liContainer: {
    flex: 2,
  },
  liText: {
    color: '#333',
    fontSize: 16,
  },
  navbar: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    justifyContent: 'center',
    height: 60,
    flexDirection: 'row'
  },
  navbarTitle: {
    color: '#444',
    fontSize: 16,
    fontWeight: "500"
  },
  center: {
    textAlign: 'center',
  },
  actionSection: {
    flexDirection: 'row',
  },
  actionInput: {
    flex: 3,
    height: 50,
    borderWidth: 2,
  },
  actionButton: {
    flex: 2,
    backgroundColor: constants.actionColor,
  },
  actionButtonText: {
    borderColor: 'transparent',
    borderWidth: 1,
    height: 50,
    justifyContent: 'center',
  },
  actionText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  }
})

module.exports = styles
module.exports.constants = constants;
