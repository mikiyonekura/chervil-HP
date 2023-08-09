import Home from './Home';
import {db} from './firebase';
import { useEffect, useState } from 'react';
import {collection, getDocs} from 'firebase/firestore';
import { onSnapshot } from 'firebase/firestore';
import BodyCard3 from '../BodyCard3';
import Content3 from '../Content3';


function Db() {
  const [posts, setPosts] = useState([]);

  //リロードの時に一回だけ実行
  useEffect(() => {
    //データベースからデータを取得する
    const postData = collection(db, 'posts');
    console.log(postData);

    getDocs(postData).then((snapshot) => {
      //どっちでも取れる
      console.log(snapshot.docs.map((doc) => doc.data()))
      //spread構文は配列を展開
      console.log(snapshot.docs.map((doc) => ({ ...doc.data()})))
      
      setPosts(snapshot.docs.map((doc) => ({ ...doc.data()})))

      //リアルタイムで更新する
      onSnapshot(postData, (snapshot) => {
        console.log(snapshot.docs.map((doc) => ({ ...doc.data()})))
        setPosts(snapshot.docs.map((doc) => ({ ...doc.data()}))) 
      })
      
      
    });

    
  }, []);

  return (
    <div className="App">
    <Content3 posts={posts} />

    </div>
  );
}

export default Db;
