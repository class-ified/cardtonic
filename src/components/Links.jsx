const DesktopNavigationLink = ({text}) => {

	const handleDesktopNavigation = (e) => {
		// console.log(e.target)
	}
	
	return (
		<h3 className="text-small text-regular text-black" onClick={handleDesktopNavigation}>
			{text}
		</h3>
	)
}

export {DesktopNavigationLink}