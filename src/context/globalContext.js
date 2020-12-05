import React, { createContext, useReducer, useContext } from "react"

//Define context
const GlobaStateContext = createContext()
const GlobaDispatchContext = createContext()

//Reducer
const globalReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME": {
      return { ...state, currentTheme: action.theme }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, {
    currentTheme: "dark",
  })
  return (
    <GlobaDispatchContext.provider value={dispatch}>
      <GlobaStateContext.provider value={state}>
        {children}
      </GlobaStateContext.provider>
    </GlobaDispatchContext.provider>
  )
}
