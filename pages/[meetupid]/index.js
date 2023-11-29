import { MongoClient, ObjectId } from "mongodb"
import { Fragment } from "react";
import Head from "next/head"
import MeetUpDetail from "../../components/meetups/meetupDetail"


function MeetUpDetails(props){
    return (
        <Fragment>
          <Head>
            <title>{props.meetUpData.title}</title>
            <meta name="description" content={props.meetUpData.description}/>
            </Head>  
          <MeetUpDetail
              image= {props.meetUpData.image}
              title={props.meetUpData.title}
              address={props.meetUpData.address}
              description={props.meetUpData.description}
       />
        </Fragment>
          )
}

export async function getStaticPaths() {
    const client =  MongoClient.connect("mongodb+srv://<username>:<password>@cluster0.rfre0.mongodb.net/?")
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const selectedMeetup = meetupsCollection.findOne({})


    return {
        fallback: false,
        paths: meetups.map((meetup) => ({params: {meetupId: meetup._id.toString()}, } )), 
    }
}




const db = client.db()


const meetupsCollection = db.collection("meetups")

const selectedMeetup = await meetupsCollection.findOne({_id: meetupId(meetupId),
})    


client.close()


return {
    props:{
        MeetUpData:{
            id:selectedMeetup._id.toString(),
            title: selectedMeetup.title,
            address: selectedMeetup.address,
            image: selectedMeetup.image,
            description: selectedMeetup.description,
        }, 
    },
};


export default MeetUpDetails