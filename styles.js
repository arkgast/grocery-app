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
  liEditing: {
    backgroundColor: '#f9f9f9',
    borderColor: 'transparent',
    borderWidth: 0,
    flexDirection: 'row',
    paddingBottom: 3,
    paddingTop: 2,
  },
  liTextEditing: {
    flex: 3,
  },
  editButtons: {
    flex: 2,
    flexDirection: 'row',
  },
  editButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textEditButtonOk: {
    backgroundColor: '#039BE5',
    borderRadius: 90,
    height: 48,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textEditButtonCancel: {
    backgroundColor: '#ff5252',
    borderRadius: 90,
    height: 48,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center',
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
    paddingTop: 1,
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
