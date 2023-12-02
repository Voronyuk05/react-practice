import './App.css';
import { Header } from './components/Header.jsx'
import painting from './painting.json';
import { PaintingList } from './components/PaintingList/PaintingList.jsx'

export function App() {
  return(
    <PaintingList painting={painting} />
  )
}