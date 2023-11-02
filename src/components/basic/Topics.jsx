import { collection, getDocs } from 'firebase/firestore';
import { useState } from 'react';
import { useEffect } from 'react';
import { db } from '../../utils/firebase';

function Topics({ currentMember }) {
  const [current, setCurrent] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'topics'), {});
        // const res = querySnapshot.filter((item) => {
        //   return item.data().uId === currentMember.uId;
        // });
        // console.log(doc.id);
        // console.log(doc.data().uId);
        querySnapshot.forEach((doc) => {
          // console.log(currentMember.id);
          if (doc.data().uId === currentMember.id) {
            // console.log(currentMember.id);
            setCurrent({ ...current, ...doc.data() });
          }
        });
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return <></>;
}

export default Topics;
