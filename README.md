# 리엑트 노트 앱

### json server

npm i json-server
json-server --watch ./src/db/data.json --port 3001

### react-router-dom v6

npm i react-router-dom

### mement js

npm i moment

### hooks

useState useEffct useRef

### GET

참고
https://www.daleseo.com/js-window-fetch/

useEffect(() => {
fetch('http://localhost:3001/notes?\_sort=date&\_order=desc')
.then(res => res.json())
.then(data => setNotes(data))
}, [])
