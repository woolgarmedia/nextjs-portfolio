import Image from 'next/image'
export function FaceImageComponent() {
    return (
      <div className=" my-6">
        <div className={`flex justify-center`}>
          <Image 
          className='shadow-xl'
            src='/images/cartoon-logo.webp'
            alt=''
            height={500}
            width={500}/>
        </div>
      </div>
    );
  }