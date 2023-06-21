import { Link } from 'react-router-dom';
import splash from '../assets/splash.jpg';

function SplashPage() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center gap-8 items-center text-white relative">
      <div className="absolute inset-0 overflow-hidden">
        <img src={splash} alt="Background" className="h-full w-full object-fill " />
      </div>
      <ul className="z-10 mt-[12.9rem]">
        <li>
          <Link
            to="/signup"
            className="text-white py-2.5 text-center flex justify-around items-center bg-[#96bf01] mr-2 mb-2 w-52 rounded-full"
          >
            <svg
              class="h-8 w-8 text-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {' '}
              <path stroke="none" d="M0 0h24v24H0z" />{' '}
              <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />{' '}
              <circle cx="12" cy="12" r="3" />
            </svg>
            Sign Up
            <svg
              class="h-8 w-8 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {' '}
              <circle cx="12" cy="12" r="10" /> <polyline points="12 16 16 12 12 8" />{' '}
              <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
          </Link>
        </li>
        <li className="">
          <Link
            to="/login"
            className="text-white py-2.5 text-center flex justify-around items-center bg-[#96bf01] mr-2 mb-2 w-52 rounded-full"
          >
            <svg
              class="h-8 w-8 text-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {' '}
              <path stroke="none" d="M0 0h24v24H0z" />{' '}
              <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />{' '}
              <circle cx="12" cy="12" r="3" />
            </svg>
            Log In
            <svg
              class="h-8 w-8 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {' '}
              <circle cx="12" cy="12" r="10" /> <polyline points="12 16 16 12 12 8" />{' '}
              <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SplashPage;
