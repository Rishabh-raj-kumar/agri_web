import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
    <div class="">
        <header class="relative h-screen flex flex-col items-center justify-center text-white text-center bg-cover bg-center" style={{backgroundImage: 'url("/agriculutre_farmer.jpg")'}}>
            <div class="absolute inset-0 bg-black opacity-40"></div>
            <div class="relative z-10">
                <h1 class="text-4xl font-bold mb-4">AgriIoT Mobile App</h1>
                <p class="text-lg">Your Smart Agriculture Companion</p>
            </div>
            <section class="text-center mt-8 z-10">
            <a href="agriculture.apk" class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full inline-block" download="agriculture.apk">
                Download APK
            </a>
            <p class="mt-4 text-sm text-gray-100">Android Only</p>
        </section>
        </header>

        <section class=" p-5 bg-green-100 items-center justify-center  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-white rounded-lg shadow-md p-6">
                <img src="/crop_monitroing.jpg" alt="Crop Monitoring" class="rounded-lg mb-4"/>
                <h2 class="text-xl font-semibold mb-2">Crop Monitoring</h2>
                <p>Monitor soil moisture, temperature, and more.</p>
            </div>

            <div class="bg-white rounded-lg shadow-md p-6">
                <img src="/leaves_disease.jpg" alt="Disease Detection" class="rounded-lg mb-4"/>
                <h2 class="text-xl font-semibold mb-2">Disease Detection</h2>
                <p>Detect plant diseases with AI-powered image analysis.</p>
            </div>

            {/* <div class="bg-white rounded-lg shadow-md p-6">
                <img src="/marketplace.jpg" alt="Marketplace" class="rounded-lg mb-4"/>
                <h2 class="text-xl font-semibold mb-2">Marketplace</h2>
                <p>Buy and sell agricultural products.</p>
            </div> */}

            <div class="bg-white rounded-lg shadow-md p-6">
                <img src="/agriculure_knwoldge.jpg" alt="Education" class="rounded-lg mb-4"/>
                <h2 class="text-xl font-semibold mb-2">Education</h2>
                <p>Access educational resources for farmers.</p>
            </div>

            <div class="bg-white rounded-lg shadow-md p-6">
            <img src="/scheduling.jpg" alt="Scheduling" class="rounded-lg mb-4"/>
                <h2 class="text-xl font-semibold mb-2">Scheduling</h2>
                <p>Schedule watering and other tasks.</p>
            </div>

        </section>

        <section class="text-center p-8 bg-green-100">
            <a href="agriculture.apk" class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full inline-block" download="agriculture.apk">
                Download APK
            </a>
            <p class="mt-4 text-sm text-gray-500">Android Only</p>
        </section>

        <footer class="text-center text-gray-500 bg-gray-200 p-4">
            <p>&copy; 2025 AgriIoT. All rights reserved.</p>
        </footer>
    </div>
    </>
  )
}

export default App
