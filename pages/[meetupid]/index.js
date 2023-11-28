
import MeetUpDetail from "../../components/meetups/meetupDetail"


function MeetUpDetails(){
    return (
    <MeetUpDetail
   
        image= "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg"
        title="First Meetup"
        address="Some Street 5, Some city"
        description="this is a first meetup"
 />
    )
}

export async function getStaticProps(context) {
//fetch data for a single meetup



const meetupId =    context.params.meetupId;
console.log(meetupId);


return {
    props:{
        MeetUpData: {
            image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
            id: "m1",
            title: "First meetup",
            address: "some street 5, some city",
            description: "this is a first meetup",
        }
    }
}
}

export default MeetUpDetails