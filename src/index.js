import React from 'react'

import { createRoot } from 'react-dom/client'
import './index.less'

import App from './App.jsx'

createRoot(document.getElementById('app')).render(<App price={1000} />)