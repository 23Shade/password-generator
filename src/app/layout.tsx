import { Inter } from 'next/font/google'
import Head from 'next/head'
import { ReactNode } from 'react'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<Head>
				<title>Password Generator</title>
				<meta name="description" content="A Random Password Generator" />
				{/* Primary favicon */}
				<link rel="icon" href="/favicon/favicon.ico" />
				{/* Additional sizes */}
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
			</Head>
			<body className={inter.className}>{children}</body>
		</html>
	)
}
