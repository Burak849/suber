import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Navbar from '../components/Navbar';
export default function About() {
  return (
    
    <div>
      
    <Navbar />
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">

              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Suber ile güvenli yolculuk yapın!</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              Suber isimli uygulamamız bulunduğunuz bir bölgeden gitmek istediğiniz bölgeye sizi sorunsuz bir şekilde varmanızı amaçlayan bir ulaşım platformudur. Kullanışlı ve basit arayüzü sayesinde birkaç parmak hareketiyle sizin konumunuzu şirketimizin anlaşmalı olduğu güvenli ve tecrübeli sürücülere iletmesini ve sizi gideceğiniz yere kadar misafir etmelerini sağlar.
                </p>
                </div>
            </div>
            </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://images.pexels.com/photos/34239/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
            
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
      
                  <span>
                    <strong className="font-semibold text-gray-900">Güvenlik:</strong> Plaka, sürücü adı, sürücünün fotoğrafı ve sürücünün puanı yolculara sunulmaktadır. Sürücü beğenilmezse işlem iptal edilebilir ve bir başka sürücü için çağrı yapılabilir. Bulunduğunuz konuma, çevrenizdeki araç sayısına bağlı olarak Uberfection aracının gelmesi değişkenlik gösterebilir ancak ortalama 10 dakika içerisinde belirttiğiniz konuma varmaktadır. 
                  </span>
                </li>
                <li className="flex gap-x-3">
              
                  <span>
                    <strong className="font-semibold text-gray-900">Araç çeşitliliği:</strong>   UberTaxi, UberXL ve UberBlack olmak üzere 3 tip araç tipi bulunmaktadır. Yapacağınız ödeme gideceğiniz araca göre değişmektedir. Oldukça ekonomik fiyatlarla ve yolculuk sonunda değişmeyen sabit ücretlerle transfer öncesinde karar verebileceğiniz imkanlar sunar. 
                  </span>
                </li>
                <li className="flex gap-x-3">
   
                  <span>
                    <strong className="font-semibold text-gray-900">Müşteri memnuniyeti:</strong>  Hızlı varış hizmetleri, güvenli ödeme işlemleri sayesinde müşteri memnuniyetine de son derece önem veren firmamız, sizleri gideceğiniz yere kadar konforlu yol deneyimi sağlamaktan memnuniyet duyar. Detaylı bilgi için lütfen bizimle iletişime geçin: 123-456-7890
                  </span>
                </li>
              </ul>
              <p className="mt-8">
             
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}