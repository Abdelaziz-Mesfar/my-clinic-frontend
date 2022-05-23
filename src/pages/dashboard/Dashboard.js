import React, { useCallback, useEffect, useState } from 'react'
import { Calendar, dateFnsLocalizer, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'

import NewAppointmentModal from '../../components/new-appointment-modal/NewAppointmentModal'
import { fetchAllPatients } from '../../redux/actions/patientsActionCreator'
import { fetchAllAppointments, fetchAppointmentById } from '../../redux/actions/appointmentActionCreators'
import EditDeleteAppointmentModal from '../../components/appointment-modal/EditDeleteAppointmentModal'

import './dashboard.css'

function Dashboard() {

  const localizer = momentLocalizer(moment)
  const dispatch = useDispatch()

  const events = useSelector(state => state.appointments.all)
  const user = useSelector(state => state.user.info)
  const userName = user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1)

  useEffect(() => {
    dispatch(fetchAllPatients())
    dispatch(fetchAllAppointments())
  }, [])



  // useEffect(()=>{
  //   dispatch(fetchAllAppointments())
  // },[])

  // const [event, setEvent] = useState(events)

  // console.log(event);

  // const handleSelectSlot = useCallback(
  //   ({ start, end }) => {
  //     const title = window.prompt('New Event name')
  //     if (title) {
  //       setEvent((prev) => [...prev, { start, end, title }])
  //     }
  //   },
  //   [setEvent]
  // )

  const handleSelectEvent = useCallback(
    (event) => dispatch(fetchAppointmentById(event._id))/*window.alert(event.title)*/,
    []
  )

  return (
    <>
      <div className="dashboard">
        <div className="dashboard__new-appointment" >
          <div>
            <p> {`Welcome Dr. ${userName}`} </p>
          </div>
          <div>
            <p>DASHBOARD</p>
          </div>
          <NewAppointmentModal />
        </div>
        <div className="dashboard__calendar">
          <Calendar
            localizer={localizer}
            events={events.map(ev => ({ ...ev, start: moment(ev.start), end: moment(ev.end) }))}
            startAccessor="start"
            endAccessor="end"
            onSelectEvent={handleSelectEvent}
            // onSelectSlot={handleSelectSlot}
            selectable
            views={['month', 'agenda']}
            popup
            style={{ height: "450px", margin: "50px" }}
          />
        </div>
      </div>
      <EditDeleteAppointmentModal />
    </>
  )
}

export default Dashboard

// const EditDeleteModal = () => {
//   const selectedAppointment = useSelector()
//   return selectedAppointment ? (
//     <Modal
//       onClose={dispatch(resetSelectedApppointment())}
//     >
//       Title: {selectedAppointment.title}
//     </Modal>
//   ) : (
//     null
//   )
// }