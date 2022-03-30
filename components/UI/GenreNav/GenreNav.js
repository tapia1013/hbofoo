import { useState } from 'react'
import { useStateContext } from "../../HBOProvider";
import Link from 'next/link'


const GenreNav = (props) => {
	// const globalState = useStateContext();

	const [activeNav, setActiveNav] = useState(false)

	setTimeout(() => setActiveNav(true), 300)

	return (
		<ul className={`genre-nav ${activeNav ? 'genre-nav--active' : ''}`}>
			<GenreList genresData={props.genresData} mediaType={props.mediaType} />
		</ul>
	);
};



// loop through genres tags component
const GenreList = (props) => {
	return props.genresData.map((item) => {
		return (
			<li key={item.id}>
				<Link href={`/${props.mediaType}/genre/${item.id}`}>
					<a>
						{item.name}
					</a>
				</Link>
			</li>
		)
	})
}


export default GenreNav;
