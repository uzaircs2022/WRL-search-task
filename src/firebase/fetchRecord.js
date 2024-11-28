import { db } from "../firebase-config"; 
import { collection, getDocs, query,  where } from "firebase/firestore";  

export const fetchRecord = async (searchTerm) => {
  try {
    const Query = query(
      collection(db, "FCCAmateur_Uzair"),
      where("callsign", "==",searchTerm )
    );

    const querySnapshot = await getDocs(Query);

    if (querySnapshot.empty) {
      console.log("No record");
      return null;
    }
    
    const doc = querySnapshot.docs[0]; 
    return doc.data();
  } catch (error) {
    console.log("Error while fetching data from Firebase", error);
    throw new Error("Failed to fetch data");
  }
};

