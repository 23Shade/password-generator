'use client'

import { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'

const PasswordGenerator = () => {
	const [password, setPassword] = useState('Password')
	const [copied, setCopied] = useState(false)

	// Function to generate a random password
	const generatePassword = () => {
		const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
		let newPassword = ''
		for (let i = 0; i < 12; i++) {
			newPassword += chars.charAt(Math.floor(Math.random() * chars.length))
		}
		// Update password state with the generated password
		setPassword(newPassword)
		// Reset copied state when generating a new password
		setCopied(false)
	}

	// Function to handle copying the password to clipboard
	const handleCopy = () => {
		// Set copied state to true when copy button is clicked
		setCopied(true)
		// Reset copied state after 2 seconds
		setTimeout(() => setCopied(false), 2000)
	}

	// Render the PasswordGenerator component JSX
	return (
		<div className="relative flex flex-col items-start justify-center min-h-screen bg-[#e4e4e6] pl-16">
			<h1 className="text-5xl font-extrabold text-[#2b2a2a] mb-8">Password Generator</h1>
			<div className="flex items-center w-96 bg-[#f7f7f7] p-4 rounded-lg shadow-lg relative z-10">
				<span className="text-lg text-[#2b2a2a] mr-4 truncate">{password}</span>
				{/* Copy button using react-copy-to-clipboard */}
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
				{/* Display "Copied!" message when password is copied */}
				{copied && <span className="text-sm text-[#56e094] ml-2">Copied!</span>}
			</div>
			{/* Button to generate a new password */}
			<button
				className="mt-6 px-6 py-3 bg-[#56e094] text-white font-semibold rounded-lg shadow-md hover:bg-green-500 transition-transform transform hover:scale-105 z-10"
				onClick={generatePassword}
			>
				Generate Password
			</button>
			{/* Image component (hidden on small screens) */}
			<div className="absolute right-0 top-0 bottom-0 hidden md:block z-0">
				<img src="/res/hand.png" alt="Hand holding asterisk" className="object-contain h-full" />
			</div>
		</div>
	)
}

// Export the PasswordGenerator component
export default PasswordGenerator
