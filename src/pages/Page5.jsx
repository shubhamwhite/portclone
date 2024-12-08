import image from '../../public/Doted Arrow PNG-Photoroom.png'

const Page5 = () => {

  return (
    <>
      <div>
        <div
          id="section2"
          className="bg-cream1 big-monitor:text-center big-screen:p-20 mobile:p-2 mobile:text-center "
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
           
          }}
        >
          {/* You can remove the <img> tag since it's no longer needed as a foreground image */}
          <div className="rotateText">
            <h1 className="text-[42vw] text-black font-[anzo1] leading-[35vw]">
              POWER
            </h1>
          </div>
          <div className="rotateText">
            <h1 className="text-[42vw] text-green-500 font-[anzo1] leading-[35vw]">
              OF
            </h1>
          </div>
          <div className="rotateText">
            <h1 className="text-[42vw] text-gray-500 font-[anzo1] leading-[35vw]">
              AN
            </h1>
          </div>
          <div className="rotateText">
            <h1 className="text-[42vw] text-black font-[anzo1] leading-[35vw]">
              MERN
            </h1>
          </div>
          <div className="rotateText">
            <h1 className="text-[42vw] text-gray-500 font-[anzo1] leading-[35vw]">
              ENGINE
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page5;
