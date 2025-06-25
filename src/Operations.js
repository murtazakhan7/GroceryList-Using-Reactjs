import React from 'react'

const Operations = async (url = '', Obj = null, Error = null) => {
    try {
        const response = await fetch(url, Obj);
        if (!response.ok) {
            throw Error("Could not perform Operation. Reload the app to try again")
        }
        const data = await response.json()
        console.log(data)
         } catch (err) {
        Error = err.message
        }
         finally {
        return Error
         }
    }

export default Operations