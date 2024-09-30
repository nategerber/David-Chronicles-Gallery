'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

const stations = [
  { id: 1, name: "Wandering - Start", x: 10, y: 10 },
  { id: 2, name: "Elemental", x: 30, y: 30 },
  { id: 3, name: "Family", x: 50, y: 50 },
  { id: 4, name: "Identity", x: 70, y: 70 },
  { id: 5, name: "Embodiment and Emotion", x: 90, y: 90 },
  { id: 6, name: "Failure", x: 20, y: 80 },
  { id: 7, name: "Loss and Lament", x: 40, y: 60 },
  { id: 8, name: "Sound", x: 60, y: 40 },
  { id: 9, name: "Wandering - End", x: 80, y: 20 }
]

const stationContent = {
  1: `<p>Wandering is an invitation to move freely, in body, mind, and spirit, enjoying the sights and sounds along the way without rushing to a destination.</p>
      <p><strong>As you watch the clip, consider: Is David lost or moving purposefully? Is this what you think wandering looks like?</strong></p>
      <p>Our invitation to you today is to wander through the seven stations and journey each one–taking your time to breathe, relax, observe and reflect at each one, and above all, experience the Sound of the Eternal as he wanders alongside.</p>`,
  2: `<p>In the scene before you, David's state of being is personified by the weather surrounding him.</p>
      <p><strong>Consider as you watch: What type of weather matches the season you are in?</strong></p>
      <p>Take a moment to read this song by John Bunyan below. As you read, breathe and listen for a word or image you can take with you.</p>`,
  3: `<p><strong>Choose two people who have formed you</strong> (physically, emotionally, intellectually, or spiritually).</p>
      <p>They could have brought struggle or encouragement. Please choose a paper colour to represent the relationship and write their names down. Pin those papers to a branch, giving them to the Eternal.</p>`,
  4: `<p><strong>Consider: What is one aspect of David's identity that is reflected in this scene?</strong></p>
      <p><strong>Consider: What is one aspect of your identity which is prevalent in the current season you are in?</strong></p>
      <p>Take a look at yourself in the mirror. Do you see that identity staring back at you? How does it feel?</p>`,
  5: `<p><strong>As you watch the film clip consider: What is one of the primary emotions David embodies in this scene?</strong></p>
      <p><strong>Watch the film clip again and consider: What is a prevalent emotion you have felt during this season of your life?</strong></p>
      <p>Have you experienced that emotion in or through a part of your physical body (ie. forehead, arm, stomach)?</p>`,
  6: `<p>David was deeply flawed and sought to release his failing to the Eternal.</p>
      <p><strong>Consider: What is a failing in your life you've yet to gain peace from or need grace to cover?</strong></p>
      <p><strong>Write down the answer on a piece of wood.</strong></p>`,
  7: `<p>Loss is an inevitable part of life. Often, we associate loss with death. However, loss expands beyond being death-related. We can lose a hope, a dream, an identity. In response to loss, we grieve.</p>
      <p><strong>Imagine you're on the shore of your own grief or personal loss.</strong> Where is the Eternal in the tide of your life; holding your hand and inviting you into the cleaning water of Divine presence?</p>`,
  8: `<p><strong>As you watch the scene consider: What do you notice about David's reflection on the sound of the Eternal?</strong></p>
      <p>As you experience this scene, what is the Sound speaking into you? Is it a word, or a phrase, or a picture? Or, perhaps you are in a season of silence.</p>`,
  9: `<p>As you watch the film clip again consider: How has your understanding of David changed through this journey? How has your understanding of the Eternal in your life changed?</p>
      <p><strong>Click here and record a short video reflecting on your experience today.</strong></p>`
}

export default function Component() {
  const [currentStation, setCurrentStation] = useState<number | null>(null)

  const showStationInfo = (stationId: number) => {
    setCurrentStation(stationId)
  }

  const closeInfoPane = () => {
    setCurrentStation(null)
  }

  const navigateStation = (direction: number) => {
    if (currentStation) {
      const newStationId = currentStation + direction
      if (newStationId >= 1 && newStationId <= stations.length) {
        setCurrentStation(newStationId)
      }
    }
  }

  return (
    <div className="container mx-auto p-4 font-sans bg-gray-900 text-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-[#dc9756] mb-8">David Chronicles Immersive Encounter</h1>
      
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {stations.map((station) => (
          <button
            key={station.id}
            className="bg-[#6d4f94] text-white px-4 py-2 rounded hover:bg-[#dc9756] transition-colors"
            onClick={() => showStationInfo(station.id)}
          >
            {station.name}
          </button>
        ))}
      </div>
      
      <div className="relative w-full max-w-3xl mx-auto mb-8">
        <img src="/placeholder.svg?height=600&width=800" alt="Gallery Floorplan" className="w-full h-auto" />
        <div className="absolute inset-0">
          {stations.map((station) => (
            <button
              key={station.id}
              className="absolute w-6 h-6 bg-[#dc9756] rounded-full cursor-pointer hover:scale-110 transition-transform"
              style={{ left: `${station.x}%`, top: `${station.y}%` }}
              onClick={() => showStationInfo(station.id)}
            />
          ))}
        </div>
      </div>
      
      {currentStation && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-gray-800 p-6 rounded-lg max-w-2xl max-h-[90vh] overflow-y-auto relative">
            <h2 className="text-2xl font-semibold text-[#dc9756] mb-4">{stations.find(s => s.id === currentStation)?.name}</h2>
            <div className="mb-4 text-gray-300" dangerouslySetInnerHTML={{__html: stationContent[currentStation as keyof typeof stationContent]}} />
            <div className="flex justify-between mt-6">
              <button
                className="bg-[#6d4f94] text-white px-4 py-2 rounded hover:bg-[#dc9756] transition-colors"
                onClick={() => navigateStation(-1)}
              >
                Previous
              </button>
              <button
                className="bg-[#6d4f94] text-white px-4 py-2 rounded hover:bg-[#dc9756] transition-colors"
                onClick={() => navigateStation(1)}
              >
                Next
              </button>
            </div>
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-200"
              onClick={closeInfoPane}
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
