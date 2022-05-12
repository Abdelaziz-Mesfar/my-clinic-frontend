import React, { useCallback, useEffect, useState } from 'react'
import { Calendar, dateFnsLocalizer, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import NewAppointmentModal from '../components/new-appointment-modal/NewAppointmentModal'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllPatients } from '../redux/actions/patientsActionCreator'
import { fetchAllAppointments } from '../redux/actions/appointmentActionCreators'



function Dashboard() {

  const localizer = momentLocalizer(moment)
  const dispatch = useDispatch()

  const events = useSelector(state => state.appointments.all)

  useEffect(()=>{
    dispatch(fetchAllPatients())
  },[])

  useEffect(()=>{
    dispatch(fetchAllAppointments())
  },[])

  const [event, setEvent] = useState(events)

  console.log(event);

  const handleSelectSlot = useCallback(
    ({ start, end }) => {
      const title = window.prompt('New Event name')
      if (title) {
        setEvent((prev) => [...prev, { start, end, title }])
      }
    },
    [setEvent]
  )

  const handleSelectEvent = useCallback(
    (event) => window.alert(event.title),
    []
  )

  return (
    <>
      <Calendar
        localizer={localizer}
        events={event}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={handleSelectEvent}
        // onSelectSlot={handleSelectSlot}
        selectable
        style={{ height: "500", margin: "50px" }}
      />
      <NewAppointmentModal setEvent={setEvent} event={event} />
    </>
  )
}

export default Dashboard