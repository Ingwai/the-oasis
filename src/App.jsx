// instalujemy npm i styled-components

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Dashboard from './pages/Dashboard';
import Bookings from './pages/Bookings';
import Cabins from './pages/Cabins';
import Users from './pages/Users';
import Settings from './pages/Settings';
import Account from './pages/Account';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './ui/AppLayout';

export default function App() {
	return (
		<>
			<GlobalStyles />
			<BrowserRouter>
				<Routes>
					<Route element={<AppLayout />}>
						<Route index element={<Navigate replace to='dashboard' />} />
						<Route path='dashboard' element={<Dashboard />} />
						<Route path='bookings' element={<Bookings />} />
						<Route path='cabins' element={<Cabins />} />
						<Route path='users' element={<Users />} />
						<Route path='settings' element={<Settings />} />
						<Route path='account' element={<Account />} />
					</Route>
					<Route path='login' element={<Login />} />
					<Route path='*' element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

// 	<GlobalStyles /> nie może mieć children jedynie może być rodzeństem sibling

// npm i --save @supabase/supabase-js

// orginalny link do bazy w supabase i RLS
/*
curl 'https://ltmpstvcevfcoahibizw.supabase.co/rest/v1/cabins?select=*' \ -H "apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0bXBzdHZjZXZmY29haGliaXp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMwNzY5NDMsImV4cCI6MjAwODY1Mjk0M30.EGgBFJiA63FBMKNO8-MWOVynNg05rgES5s18K7Jh55I" \ -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0bXBzdHZjZXZmY29haGliaXp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMwNzY5NDMsImV4cCI6MjAwODY1Mjk0M30.EGgBFJiA63FBMKNO8-MWOVynNg05rgES5s18K7Jh55I"

*/

// ZMIANY
//1. trzeba wkleić w command prompt: zmienić pojedyncze cudzysłowy w https na podwójne

/*
curl "https://ltmpstvcevfcoahibizw.supabase.co/rest/v1/cabins?select=*" \ -H "apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0bXBzdHZjZXZmY29haGliaXp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMwNzY5NDMsImV4cCI6MjAwODY1Mjk0M30.EGgBFJiA63FBMKNO8-MWOVynNg05rgES5s18K7Jh55I" \ -H  "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0bXBzdHZjZXZmY29haGliaXp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMwNzY5NDMsImV4cCI6MjAwODY1Mjk0M30.EGgBFJiA63FBMKNO8-MWOVynNg05rgES5s18K7Jh55I"

*/
