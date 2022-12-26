import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '/src/scripts/utils/Auth'
import { Link } from 'react-router-dom'
import Tooltip from '/src/scripts/components/Tooltip'

export default function Header({ userInfo }) {
	const { signOut, updateUserDetails, user } = useContext(AuthContext)
	const [image, setImage] = useState()
	document.querySelector('.color-1').style.fill = `lightgrey`
	document.querySelectorAll('.color-2').forEach((elem) => (elem.style.fill = `white`))

	useEffect(() => {
		// IIFE to get and set user image or default image
		;(async () => {
			if (!userInfo) return null
			if (!userInfo.photoURL) return setColors()
			// return with noreferrer to prevent CORS errors
			return userInfo.photoURL
		})().then((res) => setImage(res))
	}, [])

	const setColors = async () => {
		let color = userInfo.defaultPhotoColor
		if (!color)
			// IIFE to generate a random color
			color = (() => {
				const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
				const h = random(0, 360),
					s = 100,
					l = random(20, 80) / 100,
					a = (s * Math.min(l, 1 - l)) / 100,
					f = (n) => {
						const k = (n + h / 30) % 12,
							color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
						return Math.round(255 * color)
							.toString(16)
							.padStart(2, '0')
					}
				return f(0) + f(8) + f(4)
			})()
		updateUserDetails({ defaultPhotoColor: color })

		// IIFE to generate a contrasting color (black or white)
		const color2 = ((color1) =>
			0.2126 * color1[(0, 1)].toString(10) +
				0.7152 * color1[(2, 3)].toString(10) +
				0.0722 * color1[(4, 5)].toString(10) >
			0.5
				? '000'
				: 'fff')(color)

		document.querySelector('.color-1').style.fill = `#${color}`
		document.querySelectorAll('.color-2').forEach((elem) => (elem.style.fill = `#${color2}`))
	}

	return (
		<header className="sticky flex justify-between px-4 pt-4 w-full">
			<Tooltip content={userInfo?.displayName ? userInfo.displayName : 'Loading name...'}>
				<Link className="relative h-fit" to="my-profile">
					{(image && (
						<img
							src={image}
							alt="Profile"
							referrerPolicy="no-referrer"
							className="cursor-pointer w-20 aspect-square rounded-xl overflow-hidden"
						/>
					)) || (
						<svg className="cursor-pointer w-20 aspect-square">
							<use href="#default-profile-image" />
						</svg>
					)}
				</Link>
			</Tooltip>
			<svg>
				<use href="#banter-logo-full" />
			</svg>
			<button onClick={async () => await signOut()}>Sign Out</button>
		</header>
	)
}
