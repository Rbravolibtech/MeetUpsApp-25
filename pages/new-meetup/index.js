import { useRouter } from "next/router";
import { Fragment } from "react";

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

    return (
    
    <Fragment>
        <Head>
            <title>Add a New Meetup</title>
            <meta
            name="description"
            content="Browse a huge list of highly active React meetups!"
            />
            </Head>
        <NewMeetUpForm onAddMeetup={addMeetupHandler}/>
    </Fragment>
    )
}
 
export default NewMeetUpPage