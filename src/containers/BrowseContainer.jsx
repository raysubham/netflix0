import React, { useContext, useState, useEffect } from "react";
import SelectionProfileContainer from "./profiles";
import { FirebaseContext } from "../context/firebase";

export default function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return (
    <>
      <SelectionProfileContainer user={user} setProfile={setProfile} />
    </>
  );
}
