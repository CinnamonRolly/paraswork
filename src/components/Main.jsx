import React from 'react'
import Card from './Card'

const Main = () => {
  return (
    <div>
      <h1 className='text-white text-2xl font-bold px-5 pt-5'>Recently played</h1>
      <div className='flex flex-row overflow-y-auto'>
        <Card title={'Perfect'} artist={'Ed Sheeran'} imageurl={'https://upload.wikimedia.org/wikipedia/en/4/45/Divide_cover.png'}/>
        <Card title={'Until I Found You'} artist={'Stephen Sanchez'} imageurl={'https://upload.wikimedia.org/wikipedia/en/f/f5/Stephen_Sanchez_-_Until_I_Found_You.png'} />
        <Card title={'Bad Dream'} artist={'Stellar'} imageurl={'https://i1.sndcdn.com/artworks-4pCfQXzeIx6sAO0x-nwUygg-t500x500.jpg'}/>
        <Card title={'Light Switch'} artist={'Charlie Puth'} imageurl={'https://i1.sndcdn.com/artworks-nbBZSydaEijU-0-t500x500.jpg'}/>
        <Card title={'Life By The Sea'} artist={'Tubbo, CG5'} imageurl={'https://images.genius.com/0ce753a6a9dcdd9f31cba22266640847.1000x1000x1.png'}/>
      </div>
      <h1 className='text-white text-2xl font-bold px-5 pt-5'>Recommended for today</h1>
      <div className='flex flex-row overflow-y-auto'>
        <Card title={'Perfect'} artist={'Ed Sheeran'} imageurl={'https://upload.wikimedia.org/wikipedia/en/4/45/Divide_cover.png'}/>
        <Card title={'Until I Found You'} artist={'Stephen Sanchez'} imageurl={'https://upload.wikimedia.org/wikipedia/en/f/f5/Stephen_Sanchez_-_Until_I_Found_You.png'} />
        <Card title={'Bad Dream'} artist={'Stellar'} imageurl={'https://i1.sndcdn.com/artworks-4pCfQXzeIx6sAO0x-nwUygg-t500x500.jpg'}/>
        <Card title={'Light Switch'} artist={'Charlie Puth'} imageurl={'https://i1.sndcdn.com/artworks-nbBZSydaEijU-0-t500x500.jpg'}/>
        <Card title={'Life By The Sea'} artist={'Tubbo, CG5'} imageurl={'https://images.genius.com/0ce753a6a9dcdd9f31cba22266640847.1000x1000x1.png'}/>
      </div>
      <h1 className='text-white text-2xl font-bold px-5 pt-5'>Your top mixes</h1>
      <div className='flex flex-row overflow-y-auto'>
        <Card title={'Perfect'} artist={'Ed Sheeran'} imageurl={'https://upload.wikimedia.org/wikipedia/en/4/45/Divide_cover.png'}/>
        <Card title={'Until I Found You'} artist={'Stephen Sanchez'} imageurl={'https://upload.wikimedia.org/wikipedia/en/f/f5/Stephen_Sanchez_-_Until_I_Found_You.png'} />
        <Card title={'Bad Dream'} artist={'Stellar'} imageurl={'https://i1.sndcdn.com/artworks-4pCfQXzeIx6sAO0x-nwUygg-t500x500.jpg'}/>
        <Card title={'Light Switch'} artist={'Charlie Puth'} imageurl={'https://i1.sndcdn.com/artworks-nbBZSydaEijU-0-t500x500.jpg'}/>
        <Card title={'Life By The Sea'} artist={'Tubbo, CG5'} imageurl={'https://images.genius.com/0ce753a6a9dcdd9f31cba22266640847.1000x1000x1.png'}/>
      </div>
      <h1 className='text-white text-2xl font-bold px-5 pt-5'>Today's biggest hits</h1>
      <div className='flex flex-row overflow-y-auto'>
        <Card title={'Perfect'} artist={'Ed Sheeran'} imageurl={'https://upload.wikimedia.org/wikipedia/en/4/45/Divide_cover.png'}/>
        <Card title={'Until I Found You'} artist={'Stephen Sanchez'} imageurl={'https://upload.wikimedia.org/wikipedia/en/f/f5/Stephen_Sanchez_-_Until_I_Found_You.png'} />
        <Card title={'Bad Dream'} artist={'Stellar'} imageurl={'https://i1.sndcdn.com/artworks-4pCfQXzeIx6sAO0x-nwUygg-t500x500.jpg'}/>
        <Card title={'Light Switch'} artist={'Charlie Puth'} imageurl={'https://i1.sndcdn.com/artworks-nbBZSydaEijU-0-t500x500.jpg'}/>
        <Card title={'Life By The Sea'} artist={'Tubbo, CG5'} imageurl={'https://images.genius.com/0ce753a6a9dcdd9f31cba22266640847.1000x1000x1.png'}/>
      </div>
      <h1 className='text-white text-2xl font-bold px-5 pt-5'>Sing-along</h1>
      <div className='flex flex-row overflow-y-auto'>
        <Card title={'Perfect'} artist={'Ed Sheeran'} imageurl={'https://upload.wikimedia.org/wikipedia/en/4/45/Divide_cover.png'}/>
        <Card title={'Until I Found You'} artist={'Stephen Sanchez'} imageurl={'https://upload.wikimedia.org/wikipedia/en/f/f5/Stephen_Sanchez_-_Until_I_Found_You.png'} />
        <Card title={'Bad Dream'} artist={'Stellar'} imageurl={'https://i1.sndcdn.com/artworks-4pCfQXzeIx6sAO0x-nwUygg-t500x500.jpg'}/>
        <Card title={'Light Switch'} artist={'Charlie Puth'} imageurl={'https://i1.sndcdn.com/artworks-nbBZSydaEijU-0-t500x500.jpg'}/>
        <Card title={'Life By The Sea'} artist={'Tubbo, CG5'} imageurl={'https://images.genius.com/0ce753a6a9dcdd9f31cba22266640847.1000x1000x1.png'}/>
      </div>

    </div>
  )
}

export default Main
