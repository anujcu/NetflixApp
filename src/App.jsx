
import { Provider } from 'react-redux'
import './App.css'
import Body from './Components/Body/Body'
import AppStore from './Store/AppStore'

function App() {

  return (
    <Provider store={AppStore}>
      <Body/>
    </Provider>
  )
}

export default App
