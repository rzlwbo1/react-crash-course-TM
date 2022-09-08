import React, {useState} from 'react'

// form itu component level state, bukan global state/app state

function FormAdd() {

  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  return (
    <form className='add-form'>
      <div className="form-control">
        <label>Task</label>
        <input type="text" placeholder='add task' value={text} onChange={(e) => setText(e.target.value)}/>
      </div>

      <div className="form-control">
        <label>Day & time</label>
        <input type="text" placeholder='add day & time' value={day} onChange={(e) => setDay(e.target.value)}/>
      </div>

      <div className="form-control form-control-check">
        <label>Set reminder</label>
        <input type="checkbox" value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
      </div>

      <input type="submit" value={'save task'} className={'btn btn-block'}/>
    </form>
  )
}

export default FormAdd