import React,{useState,useEffect} from 'react'

function Emails() {
const [emails, setEmails]=useState([])

    useEffect(() => {
      fetch("http://localhost:4000/emails")
        .then((resp) => resp.json())
        .then(setEmails);
    }, []);
   

  return (
    <>
    {
      emails.map(email => {
        return (
         <div className='emailText'>
          {email.email}
         </div>
        )
      })
    }
    </>
  )
}

export default Emails
