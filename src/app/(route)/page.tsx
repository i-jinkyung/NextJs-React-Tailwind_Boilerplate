"use client"

import {RecoilRoot} from 'recoil'

export default function Home() {
  return (
      <RecoilRoot>
        <div className='text-red-500 text-xl font-bold'>hello world</div>
      </RecoilRoot>
  );
}
