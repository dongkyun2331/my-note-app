import { useRef } from 'react'
import moment from 'moment/moment'
import 'moment/locale/ko'
import { useNavigate } from 'react-router-dom'

export default function Write() {
  const navigate = useNavigate()
  const titleRef = useRef()
  const detailRef = useRef()

  function onWrite(e) {
    e.preventDefault()
    console.log(titleRef.current.value)
    console.log(detailRef.current.value)

    fetch('http://localhost:3001/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: titleRef.current.value,
        detail: detailRef.current.value,
        date: moment().format('YYYY년 MMMM Do, h:mm:ss '),
      }),
    }).then((res) => {
      if (res.ok) {
        navigate('/')
      }
    })
  }

  function goBack(e) {
    e.preventDefault()
    navigate(-1)
  }

  return (
    <div className="container">
      <h2>노트 작성</h2>
      <form>
        <div>
          <label>제목</label>
          <input type="text" placeholder="제목" ref={titleRef} />
        </div>
        <div>
          <label>내용</label>
          <textarea
            cols="30"
            rows="10"
            placeholder="내용"
            ref={detailRef}
          ></textarea>
        </div>
        <div>
          <button onClick={goBack}>취소하기</button>
          <button onClick={onWrite}>작성하기</button>
        </div>
      </form>
    </div>
  )
}
