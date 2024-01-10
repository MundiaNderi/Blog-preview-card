import './App.css';
import illustration from './assets/illustration-article.svg';
import avatar from './assets/image-avatar.webp';

function App() {
  return (
    <div className='flex flex-col items-start p-6 w-96 justify-center mx-auto rounded-lg border border-black bg-white shadow-lg mt-16'>
        <div className=''>
          <img className='rounded-md' src={illustration} alt='illustration' />
        </div>
        <div className='text-black font-Figtree font-bold text-xl leading-7 bg-yellow px-3 mb-3 mt-6'>
          Learning
        </div>
        <p className='font-Figtree mb-3 text-black font-medium text-base leading-7'>Published 21 Dec 2023</p>
        <h1 className='font-Figtree mb-3 text-black font-Figtree font-extrabold text-2xl leading-9'>HTML & CSS foundations</h1>
        <p className='font-Figtree mb-3 font-medium text-base leading-6 text-customGray border border-red-500'>
          These languages are the backbone of every website, defining
          structure, content, and presentation.
        </p>
        <div className='flex items-center'>
          <img src={avatar} alt='Avatar' className='mr-3 w-8 h-8' />
          <p className='font-Figtree text-black font-bold text-blue leading-6'>Greg Hooper</p>
        </div> 
      </div>
  );
}

export default App;
