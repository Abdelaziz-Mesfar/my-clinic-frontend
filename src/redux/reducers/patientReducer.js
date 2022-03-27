import { useState } from "react";
import { GET_ALL_PATIENT } from "../types/patientActionTypes";

const [patient, setPatient] = useState([
    {
      firstName: "aziz" ,
      lastName: "mesfar",
      phone: "53847293",
      adresse: "jiqsfhqsoh",
      age: "26"
    },
    {
      firstName: "slfknq" ,
      lastName: "sqf",
      phone: "53847293",
      adresse: "jiqsfhqsoh",
      age: "26"

    }
  ])

const patientReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PATIENT:
            
        default:
            break;
    }
}

export default patientReducer