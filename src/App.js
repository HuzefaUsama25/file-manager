import './App.css';
import Folder from './components/Folder';
import File from './components/File'

function App() {
  return (
    <div className="App">
      <Folder name="Documents">
        <File name="homework.docx" />
        <File name="main.py" />
        <File name="notes.txt" />
        <File name="picture1.png" />
        <File name="audio123.mp4" />
        <Folder name="SubFolder">
          <File name="SubFile" />
        </Folder>
      </Folder>
      <Folder name="Desktop">
        <File name="Flutter Course.mp4" />
      </Folder>
      <Folder name="Music">
        <File name="song1.mp3" />
        <File name="song2.mp3" />
      </Folder>

    </div>
  );
}

export default App;
