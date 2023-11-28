import MeetupList from "../components/meetups/meetupList"
import Layout from "../components/layout/Layout"

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
    return (
    <Layout>
    <MeetupList meetups={DUMMY_MEETUPS}/>
    </Layout>
    )
}

 export default HomePage