import React from 'react'
import clsx from 'clsx'
import Heading from '../Heading/Heading'
import Image from '../Image/Image'

export const BallisticProtectionCard = ({
  otherClasses,
  protection,
  caliber,
  ammunition,
  mass,
  testRange,
  bulletVelocity,
  strikes,
  weaponImage,
}) => {
  const ballisticProtectionCardClasses = clsx(
    otherClasses,
    'w-full shadow-lg rounded-lg'
  )

  return (
    <div
      className={ballisticProtectionCardClasses}
      data-testid="ballistic-protection-card"
    >
      <Heading
        type="h5"
        otherClasses="font-Exo2 text-white w-full text-center font-normal bg-primary_green_600 py-2  rounded-tl-lg rounded-tr-lg"
      >
        Cen <span className="font-semibold">{protection}</span>
      </Heading>
      <div className="w-full px-4 flex flex-col sm:flex-row py-6 items-center">
        <div className="w-full lg:w-[60%]">
          <ul className="flex flex-col gap-3">
            <li className="text-base leading-6 font-Open_Sans text-gray-900 font-semibold ">
              Caliber: <span className="font-normal">{caliber}</span>
            </li>
            <li className="text-base leading-6 font-Open_Sans text-gray-900 font-semibold ">
              Ammunition: <span className="font-normal">{ammunition}</span>
            </li>
            <li className="text-base leading-6 font-Open_Sans text-gray-900 font-semibold ">
              Mass (g): <span className="font-normal">{mass}</span>
            </li>
            <li className="text-base leading-6 font-Open_Sans text-gray-900 font-semibold ">
              Test Range (m): <span className="font-normal">{testRange}</span>
            </li>
            <li className="text-base leading-6 font-Open_Sans text-gray-900 font-semibold ">
              Bullet Velocity (m.s):{' '}
              <span className="font-normal">{bulletVelocity}</span>
            </li>
            <li className="text-base leading-6 font-Open_Sans text-gray-900 font-semibold ">
              # of Strikes: <span className="font-normal">{strikes}</span>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-[40%]">
          <Image
            imageData={weaponImage}
            otherClasses="w-full"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  )
}

export default BallisticProtectionCard
