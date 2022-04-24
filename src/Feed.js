import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';


function Feed() {
    const user = useSelector(selectUser);
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);
 
    useEffect(() => {
        db.collection('posts')
            .orderBy('timpestamp','desc')
            .onSnapshot((snapshot) =>
                setPosts(
                    snapshot.docs.map((doc)=>({
                        id: doc.id,
                        data: doc.data(),
                    }))
                )
        );
    },[]);

    const sendPost = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl:user.photoUrl ||'',
            timpestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setInput('');
    };

  return ( 
    <div className="feed">
        <div className='feed_inputContainer'>
            <div className='feed_input'>
                <CreateIcon />
                <form>
                    <input placeholder="Write a post" value={input} onChange={e => setInput(e.target.value)} type='text'/>
                    <button onClick={sendPost} type='submit'>Send</button>
                </form>
            </div>            

            <div className='feed_inputOptions'>
                <InputOption Icon = {ImageIcon} title="Photo" color ='#70B5F9'/>
                <InputOption Icon={SubscriptionsIcon} title={'Video'} color='#7FC15E'/> 
                <InputOption Icon={EventNoteIcon} title={'Event'} color='#E7A33E'/>
                <InputOption Icon={CalendarViewDayIcon} title={'Write article'} color='#fc9294'/>
            </div>
        </div>

        <h6><hr/>Sort by:Top</h6>

        <FlipMove>
            {posts.map(({id, data:{ name, description, message, photoUrl }}) => (
                <Post 
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}
        </FlipMove>

    </div>
  )
}

export default Feed