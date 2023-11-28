import { useEffect, useState } from "react"
import MeetupList from "../components/meetups/meetupList"


const DUMMY_MEETUPS = [
    {
        id: "m1",
        title: "A FIRST MEETUP",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
        address: 'some address 5, 12345 some city',
        description: " This is a FIRST meetup"
    },
    {
        id: "m2",
        title: "A SECOND MEETUP",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
        address: 'some address 10, 123456 some city',
        description: " This is a second meetup"
    }
]

function HomePage(){
const [loadedMeetups, setLoadedMeetups] =    useState([])

    useEffect(() => {
// send a http request and fetch data
 setLoadedMeetups(DUMMY_MEETUPS);
    }, [])
    return (
  
    <MeetupList meetups={loadedMeetups}/>
  
    )
}

 export default HomePage