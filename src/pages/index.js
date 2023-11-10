import GlobalKeyListener from '@/components/GlobalKeyListener'
import TestComponent from '@/components/TestComponent'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'

export default function Home() {
  let [x, SetX] = useState(100)
  let [y, SetY] = useState(100)
  return (
    <>
      <div>BatataFrita</div>
      <TestComponent x={x} y={y} />
      <GlobalKeyListener
            x={x} SetX={SetX}
            y={y} SetY={SetY}
      />
    </>
  )
}
