// import Cell from './Cell.tsx'
import File from './File.tsx'
// import Folder from './Folder.tsx'
import './App.css'

function App() {
  const key = "https://huggingface.co/datasets/codeparrot/github-code/resolve/main/data/train-00000-of-01126.parquet"
  return <File file={key} />

  // const search = new URLSearchParams(location.search)
  // const key = search.get('key') ?? ''
  // if (Array.isArray(key)) throw new Error('key must be a string')

  // if (!key || key.endsWith('/')) {
  //   // folder view
  //   const prefix = key.replace(/\/$/, '')
  //   return <Folder prefix={prefix} />
  // } else if (search.has('col') && search.has('row')) {
  //   // cell view
  //   return <Cell />
  // } else {
  //   // file view
  //   return <File file={key} />
  // }
}

export default App