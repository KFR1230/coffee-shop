import { async } from '@firebase/util';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
  where,
} from 'firebase/firestore';
import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage';
import { db, storage } from '../utils/firebase';

//member

export const getCurrentMemberData = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'topics'), {});
    return querySnapshot;
  } catch (error) {
    console.log(error);
  }
};

export const editMemberData = async ({
  memberName,
  memberDescription,
  memberAvatar,
  memberId,
}) => {
  try {
    const docRef = await setDoc(doc(db, 'topics', memberId), {
      avatar: memberAvatar,
      description: memberDescription,
      name: memberName,
    });
  } catch (error) {
    console.log(error);
  }
};

const getMetadataURL = async (data) => {
  const starsRef = ref(storage, `member-images/${data}`);
  // Get the download URL
  try {
    const url = await getDownloadURL(starsRef);
    return url;
  } catch (error) {
    console.log(error);
  }
};

export const getFile = async () => {
  const listRef = ref(storage, 'member-images');
  try {
    const res = await listAll(listRef);
    const promises = res.items.map((itemRef) => {
      const url = getMetadataURL(itemRef.name);
      return url;
    });
    const arr = await Promise.all(promises); //用promise.all把所有的promise跑完後，一次取值
    return arr;
  } catch (error) {
    console.log(error);
  }
};

export const postImg = async (file, fileName, name) => {
  //建立img 在 storage，並取得圖片網址
  const storageRef = ref(storage, `${fileName}/${name}`);
  const metadata = {
    contentType: 'image/jpeg',
  };
  await uploadBytes(storageRef, file, metadata);
  const url = await getFoodImgURL(name, fileName);
  return url;
};

// menu

const getFoodImgURL = async (name, fileName) => {
  const starsRef = ref(storage, `${fileName}/${name}`);
  // Get the download URL
  try {
    const url = await getDownloadURL(starsRef);
    return url;
  } catch (error) {
    console.log(error);
  }
};

export const getTitleData = async (title, subTitle) => {
  // console.log('getTitleData', title, subTitle);
  const drinksRef = collection(db, title);
  let q;
  if (title === 'Drink' || title === 'Food' || title === 'Beans') {
    q = query(drinksRef, orderBy('type', 'desc'));
  } else {
    q = query(
      drinksRef,
      orderBy('type', 'desc'),
      where('type', '==', subTitle)
    );
  }

  try {
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, ' => ', doc.data());
    });
    return querySnapshot;
  } catch (error) {
    console.log(error);
  }
};

export const getSubTitleData = async (title, subTitle) => {
  // console.log('getSubTitleData', title, subTitle);
  const drinksRef = collection(db, title);
  let q = query(
    drinksRef,
    orderBy('type', 'desc'),
    where('type', '==', subTitle)
  );

  try {
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, ' => ', doc.data());
    });
    return querySnapshot;
  } catch (error) {
    console.log(error);
  }
};

export const addTR = async ({ ...props }) => {
  const { name, des, price, pattern, att, isSold, isSweet, isHot, type } =
    props;

  const drinksRef = collection(db, 'Drink');

  await setDoc(doc(drinksRef, name), {
    name,
    des,
    price,
    pattern,
    att,
    isSold,
    isHot,
    isSweet,
    type,
  });
};

export const getTR = async () => {
  const drinksRef = collection(db, 'Drink');
  const q = query(drinksRef, orderBy('type'));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, ' => ', doc.data());
  });
};

export const addDR = async ({ ...props }) => {
  const { name, des, price, isSold, type, url } = props;

  const foodRef = collection(db, 'Food');

  await setDoc(doc(foodRef, name), {
    name,
    des,
    price,
    isSold,
    type,
    url,
  });
};

export const addBN = async ({ ...props }) => {
  const { name, des, pattern, att, price, isSold, type, url } = props;

  const foodRef = collection(db, 'Beans');

  await setDoc(doc(foodRef, name), {
    name,
    des,
    pattern,
    att,
    price,
    isSold,
    type,
    url,
  });
};

// cart to history
//建立個人已購項目
export const addMemberCart = async ({ ...props }) => {
  const { memberId, cartProducts } = props;
  const time = new Date().toLocaleString('zh-Hant', {
    dateStyle: 'full',
    timeStyle: 'full',
    hour12: false,
  });
  const memberRef = collection(db, `${memberId}`);

  await setDoc(doc(memberRef), {
    products: cartProducts,
    createAt: time,
    isFinished: false,
  });
};

//取得個人為結帳商品
export const getUnfinishedProducts = async ({ memberId }) => {
  const memberRef = collection(db, `${memberId}`);
  const q = query(memberRef, where('isFinished', '==', false));

  try {
    const querySnapshot = getDocs(q);
    const data = (await querySnapshot).docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

//結算最後結果(將isFinished轉為true)，然後儲存至finished的集合
export const changeFinishedStatus = async ({
  memberId,
  unFinishedProducts,
  finalProducts,
  total,
}) => {
  const date = new Date().toLocaleString('zh-hant', {
    dateStyle: 'full',
    timeStyle: 'short',
    hour12: false,
  });

  const memberFinishedRef = collection(db, `${memberId}-finished`);
  //建立新的集合時，同時更改原本的status
  unFinishedProducts.forEach((i) =>
    setDoc(doc(db, memberId, i.id), { ...i, isFinished: true })
  );

  await setDoc(doc(memberFinishedRef), {
    endDate: date,
    payType: '付現',
    status: '已完成',
    products: finalProducts,
    total,
  });
};

//最後建立出memberFinished的集合取出過往的結算
export const getMemberFinished = async ({ memberId }) => {
  const memberRef = collection(db, `${memberId}-finished`);
  const q = query(memberRef, orderBy('endDate', 'desc'));

  try {
    const querySnapshot = getDocs(q);
    const data = (await querySnapshot).docs.map((doc) => {
      return doc.data();
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
