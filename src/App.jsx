import { ColorPicker } from './components/ColorPicker/ColorPicker.jsx';
import { colorPickerOptions } from './colorOptions.jsx';
import { Alert } from './components/Alert/Alert.jsx'
import styles from './App.css'
import painting from './painting.json';
import { PaintingList } from './components/PaintingList/PaintingList.jsx'
import { Counter } from './components/Counter/Counter.jsx';
import { Component } from 'react';
import { DropdownMenu } from './components/DropdownMenu/DropdownMenu.jsx'

export class App extends Component {
  state = {
    data: painting,
  }

  render() {
    return (
      <div>
        <DropdownMenu />
        <br />
        <br />
        <ColorPicker options={colorPickerOptions} />
      </div>
    )
  }
}

// export function App() {
//   return (
//     <div>
//       <PaintingList painting={painting} />
//       {/* <PaintingList painting={painting}/> */}
//       {/* <Alert text="Останнє попередження" type="warning" />
//       <Alert text="Ура! Все ок!" type="success" />
//       <Alert text="О Жах - Все пропало!" type="error" /> */}
//     </div>

//     // <ColorPicker options={colorPickerOptions} />
//   )
// }