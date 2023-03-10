import { useState } from 'react'
import { MdMode, MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function Note({ note }) {
  const [screen, setScreen] = useState(false)

  function onDelete() {
    //
  }

  if (screen === true) {
    return null
  }

  return (
    <li className="note">
      <h4 className="title">{note.title}</h4>
      <p>{note.detail}</p>
      <div className="bottom">
        {/* <div className="date">{note.date}</div> */}
        <div className="btns">
          <span>
            <Link to={'/edit'} state={note}>
              <MdMode />
            </Link>
          </span>
          <span>
            <MdDelete onClick={onDelete} />
          </span>
        </div>
      </div>
    </li>
  )
}
