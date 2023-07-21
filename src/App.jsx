function App() {
  return (
    <div className='bg-black/25 w-screen h-screen p-10 flex flex-col gap-6 transition-all'>
      <div className='font-zcool text-6xl text-sky-400 hover:text-7xl'>
        祝熊玉琛生日快樂！
      </div>
      <div className='font-dancing text-6xl text-pink-400 hover:text-7xl'>
        Happy Birthday!
      </div>
      <div>
        {/* <ReactAudioPlayer src='./happy_birthday.mp3' autoPlay loop /> */}
      </div>
    </div>
  );
}

export default App;
