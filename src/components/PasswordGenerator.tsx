'use client'

import { useState, useEffect } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'

const PasswordGenerator = () => {
	const [password, setPassword] = useState('Password')
	const [copied, setCopied] = useState(false)
	const [passwordLength, setPasswordLength] = useState(12)

	// Function to generate a random password
	const generatePassword = (length: number) => {
		const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
		let newPassword = ''
		for (let i = 0; i < length; i++) {
			newPassword += chars.charAt(Math.floor(Math.random() * chars.length))
		}
		// Update password state with the generated password
		setPassword(newPassword)
		// Reset copied state when generating a new password
		setCopied(false)
	}

	// Generate a password whenever the passwordLength changes
	useEffect(() => {
		generatePassword(passwordLength)
	}, [passwordLength])

	// Function to handle copying the password to clipboard
	const handleCopy = () => {
		// Set copied state to true when copy button is clicked
		setCopied(true)
		// Reset copied state after 2 seconds
		setTimeout(() => setCopied(false), 2000)
	}

	// Function to handle range slider input
	const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let value = Number(e.target.value)
		// Ensure the value does not exceed 50
		value = value > 50 ? 50 : value
		setPasswordLength(value)
		document.documentElement.style.setProperty(
			'--value',
			(((value - 1) * 100) / (50 - 1)).toString()
		)
	}

	// Ensure the initial value of --value matches the initial state of the slider
	useEffect(() => {
		document.documentElement.style.setProperty(
			'--value',
			(((passwordLength - 1) * 100) / (50 - 1)).toString()
		)
	}, [passwordLength])

	return (
		<div className="relative flex flex-col items-start justify-center min-h-screen bg-[#e4e4e6] pl-16">
			<div className="absolute inset-0 z-0 grid-background" />
			<div className="absolute right-0 top-0 bottom-0 hidden md:block z-0">
				<img src="/res/hand.png" alt="Hand holding asterisk" className="object-contain h-full" />
			</div>
			<h1 className="text-5xl font-extrabold text-[#2b2a2a] mb-8 relative z-10">
				Password Generator
			</h1>
			<div className="flex items-center w-96 bg-[#f7f7f7] p-4 rounded-lg shadow-lg relative z-10">
				<span className="text-lg text-[#2b2a2a] text-gray-500 opacity-75 mr-4 truncate">
					{password}
				</span>
				<CopyToClipboard text={password} onCopy={handleCopy}>
					<button className="ml-auto text-[#56e094] hover:text-green-500 transition">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
							/>
						</svg>
					</button>
				</CopyToClipboard>
				{copied && <span className="text-sm text-[#56e094] ml-2">Copied!</span>}
			</div>

			{/* Password Length Controls */}
			<div className="flex items-center mt-4 w-96 bg-[#f7f7f7] p-4 rounded-lg shadow-lg relative z-10">
				<label htmlFor="password-length" className="mr-4 text-lg text-[#2b2a2a]">
					Length:
				</label>
				<input
					type="range"
					id="password-length"
					min="1"
					max="50"
					value={passwordLength}
					onChange={handleRangeChange}
					className="w-1/2 mr-4 range-slider"
				/>
				<input
					type="number"
					min="1"
					max="50"
					value={passwordLength}
					onChange={(e) => {
						// Ensure the value does not exceed 50
						const value = Number(e.target.value)
						setPasswordLength(value > 50 ? 50 : value)
					}}
					className="w-16 p-1 border border-gray-300 rounded-md text-center"
				/>
			</div>

			<button
				className="mt-6 px-6 py-3 bg-[#56e094] text-white font-semibold rounded-lg shadow-md hover:bg-green-500 transition-transform transform hover:scale-105 relative z-10"
				onClick={() => generatePassword(passwordLength)}
			>
				Generate Password
			</button>
		</div>
	)
}

// Export the PasswordGenerator component
export default PasswordGenerator
