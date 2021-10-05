import React from 'react'
import './DownloadBtn.css'

const DownloadBtn = (props) => {
	return (
		<a className={`download-btn ${props.className}`} href='#'>
			{props.children}
		</a>
	)
}

export default DownloadBtn
