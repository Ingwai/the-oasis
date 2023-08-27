import { useEffect } from 'react';
import { getCabins } from '../services/apiCabins';
import Heading from '../ui/Heading';
import Row from '../ui/Row';

function Cabins() {
	useEffect(() => {
		getCabins().then(data => console.log(data));

		// async - await
		// const getCabinsData = async () => {
		// 	const data = await getCabins();
		// 	console.log(data);
		// };
		// getCabinsData();
	}, []);

	return (
		<Row type='horizontal'>
			<Heading as='h1'>All cabins</Heading>
			<p>TEST</p>
			<img src='https://ltmpstvcevfcoahibizw.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg' />
		</Row>
	);
}

export default Cabins;
