import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AddGroupAdvert from './components/groups/AddGroupAdvert';
import Groups from './components/groups/Groups';
import AddMembersAdvert from './components/members/AddMembersAdvert';
import Members from './components/members/Members';
import SendMessage from './components/messaging/SendMessage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/*' element={<Navigate to="/members" />} />
				<Route path='/members' element={<Members />} />
				<Route path='/members/new' element={<AddMembersAdvert />} />
				<Route path='/groups' element={<Groups />} />
				<Route path='/groups/new' element={<AddGroupAdvert />} />
				<Route path='/message' element={<SendMessage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
