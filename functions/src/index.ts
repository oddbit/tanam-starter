
import * as tanam from 'tanam';

tanam.initializeApp({
    users: {
        "your.email@gmail.com": "superAdmin",
    },
    firebaseApp: {
        apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
        authDomain: "your-project-id.firebaseapp.com",
        databaseURL: "https://your-project-id.firebaseio.com",
        projectId: "your-project-id",
        storageBucket: "your-project-id.appspot.com",
        messagingSenderId: "0123456789"
    },
});

export * from 'tanam';
