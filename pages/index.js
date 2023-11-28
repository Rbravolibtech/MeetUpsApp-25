import MeetupList from "../components/meetups/meetupList"

const DUMMY_MEETUPS = [
    {
        id: "m1",
        title: "A FIRST MEETUP",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
        address: 'some address 5, 12345 some city',
        description: " This is a second meetup"
    }
]

function HomePage(){
    return <MeetupList meetups={DUMMY_MEETUPS}/>
}

 export default HomePage