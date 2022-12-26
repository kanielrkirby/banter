import React from 'react'

const Card = ({ children }) => {
	const newChildren = React.Children.map(children, recursiveClone)
	function recursiveClone(child) {
		if (React.isValidElement(child)) {
			let classNames = ''
			switch (child.type) {
				case 'h1':
					classNames = 'text-2xl font-medium text-3xl mb-5'
					break
				case 'button':
					classNames = 'bg-primary-200 rounded-md px-4 py-2 hover:bg-primary-300 transition-colors duration-300'
					break
				case 'input':
					classNames =
						'bg-transparent border-[.5px] border-white p-2 rounded-md w-full focus:outline-none focus:border-primary-300 focus:shadow-inner focus:shadow-black transition-colors duration-200'
					break
				case 'form':
					classNames = 'flex flex-col gap-5 w-full justify-center items-center mb-5'
					break
				default:
					break
			}
			const subChildren = React.Children.map(child.props.children, recursiveClone)
			return React.cloneElement(child, {
				className: child.props.className ? classNames + ' ' + child.props.className : classNames,
				children: subChildren,
			})
		}
		return child
	}
	return (
		<div className="flex flex-col gap-5 w-[30em] max-w-[90%] border-[.5px] shadow-[#efefef6d] shadow-md p-8 rounded-2xl justify-center items-center">
			{newChildren}
		</div>
	)
}

export default Card
