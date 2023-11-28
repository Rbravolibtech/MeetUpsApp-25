
import MeetupList from "../components/meetups/meetupList"


function HomePage(props){
    return ( <MeetupList meetups={props.meetups}/>
    )
}

export async function getStaticProps() {
    //fetch data from an API OR DATA BASE 

    const client =  MongoClient.connect("mongodb+srv://<username>:<password>@cluster0.rfre0.mongodb.net/?")
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

   const meetups =  await meetupsCollection.find().toArray();

   client.close()

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            }))
        },
        revalidate:1
    }
}

 export default HomePage