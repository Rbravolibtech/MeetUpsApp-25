
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

function HomePage(props){



    return (
  
    <MeetupList meetups={props.meetups}/>
  
    )
}
export async function getStaticProps() {
    //fetch data from an API OR DATA BASE 
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        revalidate:1
    }
}

 export default HomePage