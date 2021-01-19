import { useEffect, useState } from "react";
import { projectFiresotre } from "../firebase/config";

const useFirestore = (collectionRef) => {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    const onsub = projectFiresotre
      .collection(collectionRef)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let document = [];
        snap.forEach((doc) => {
          document.push({ ...doc.data(), id: doc.id });
        });
        setDocs(document);
      });

    return () => onsub();
  }, [collectionRef]);

  return { docs };
};

export default useFirestore;
