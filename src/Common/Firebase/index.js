// @flow

import firebase from "firebase/app";
import config from "./config.json";

export default firebase.initializeApp(config);
