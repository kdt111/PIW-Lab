import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Auth from './components/Auth';
import AddGroupAdvert from './components/groups/AddGroupAdvert';
import Groups from './components/groups/Groups';
import AddMembersAdvert from './components/members/AddMembersAdvert';
import Members from './components/members/Members';
import SendMessage from './components/messaging/SendMessage';
import Data from './Data';
import Favourites from './components/Favourites';
import { auth } from './firebase/Init';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
    const [hasData, setHasData] = useState(false);

    const [user] = useAuthState(auth);

    useEffect(() => {
        if (!hasData) {
            console.log("Fetching data...");
            fetch("data.json")
                .then(response => response.json())
                .then(data => {
                    Data.members.length = 0;
                    Data.groups.length = 0;

                    for (const member of data.members) {
                        member.id = Data.GetMemberNextId();
                        member.type = "member";
                        Data.members.push(member);
                    }

                    for (const group of data.groups) {
                        group.id = Data.GetGroupNextId();
                        group.type = "group";
                        Data.groups.push(group);
                    }

                    setHasData(true);
                });
        }
    }, []);

	return (
        <BrowserRouter>
            <Routes>
                <Route path='/*' element={<Navigate to="/members" />} />
                <Route path='/members' element={<Members />} />
                <Route path='/members/new' element={<AddMembersAdvert />} />
                <Route path='/groups' element={<Groups />} />
                <Route path='/groups/new' element={<AddGroupAdvert />} />
                <Route path='/message' element={<SendMessage />} />
                <Route path='/auth' element={<Auth />} />
                <Route path='/favourites' element={<Favourites />} />
            </Routes>
        </BrowserRouter>
	);
}

export default App;
