# React Firebase Search Functionality 

This is a React application that fetches data from a Firebase database and displays it on the front end. The data is fetched using callsign of a user, allowing users to get the details of a particular user using their call signs.

### Features

- Fetches data from Firebase Firestore.
- Displays data in a table
- Allows users to search other users using call signs.

### Tech Stack

- **React**: Frontend framework to build the user interface.
- **Firebase**: Used for the backend to store and fetch data.

### Installation

Follow these steps to get the application up and running locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
2. **Install dependencies**: Run the following command to install the necessary dependencies:
      ```bash
   npm install

### Code Structure
 ```bash
├── src
│   ├── pages
│   │   ├── Main.js        # Main dashboard component
│   ├── hooks
│   │   └── useFetchRecord.js    # Custom hook to fetch data from Firebase
│   ├── firebase-config.js    # Firebase configuration file
│   └── App.js                # Main app component
└── .env                      # Firebase credentials (add to .gitignore)
