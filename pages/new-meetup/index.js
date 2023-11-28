import { useRouter } from "next/router";

import NewMeetUpForm from "../../components/meetupFrom";



function NewMeetUpPage() {
 const router =   useRouter()
    

   async function addMeetupHandler(enteredMeetupData) {
    const response =   await fetch("/api/new-meetup", {
        method: "POST",
        body: JSON.stringify(enteredMeetupData),
        headers: {
            "content-type": "application/json"
        }
    });

    const data = await response.json();

    console.log(data);
    
        router.push("/")
    }

    return <NewMeetUpForm onAddMeetup={addMeetupHandler}/>
}
 
export default NewMeetUpPage